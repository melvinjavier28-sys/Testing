// Lead intake endpoint — receives contact & application form submissions
// and emails them via Resend. Runs as a Vercel serverless function.
//
// Required env vars: RESEND_API_KEY   (your Resend API key)
//                    LEAD_TO_EMAIL    (the inbox that receives the leads)
//                    — both set in Vercel → Settings → Environment Variables
// Optional env var:  LEAD_FROM_EMAIL  (default: Resend's test sender; switch to an
//                                      address on your verified domain once set up)

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TO_EMAIL = process.env.LEAD_TO_EMAIL || 'support@nationalepayment.com';
// Partner/ISO inquiries route to a role inbox (overridable via env).
const PARTNER_TO_EMAIL = process.env.PARTNER_TO_EMAIL || 'support@nationalepayment.com';
const FROM_EMAIL = process.env.LEAD_FROM_EMAIL || 'National e-Payment <onboarding@resend.dev>';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function jsonError(message: string, status: number) {
  return Response.json({ ok: false, error: message }, { status });
}

// Field label maps per form type — keeps the email readable and ordered.
const FIELD_LABELS: Record<string, Record<string, string>> = {
  contact: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
  },
  application: {
    firstName: 'First name',
    lastName: 'Last name',
    businessName: 'Business name',
    businessType: 'Business type',
    email: 'Email',
    phone: 'Phone',
    volume: 'Monthly volume',
  },
  partner: {
    firstName: 'First name',
    lastName: 'Last name',
    company: 'Company',
    email: 'Email',
    phone: 'Phone',
    bookOfBusiness: 'Book of business',
    message: 'About their business',
  },
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[lead] RESEND_API_KEY is not set');
    return jsonError('The form is not fully set up yet. Please call us at (866) 436-9022.', 500);
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return jsonError('Could not read your submission. Please try again.', 400);
  }

  // Honeypot: bots fill hidden fields. Silently accept so they don't retry.
  if (typeof data.company_website === 'string' && data.company_website.trim() !== '') {
    return Response.json({ ok: true });
  }

  const formType =
    data.formType === 'application'
      ? 'application'
      : data.formType === 'partner'
        ? 'partner'
        : 'contact';
  const recipient = formType === 'partner' ? PARTNER_TO_EMAIL : TO_EMAIL;
  if (!recipient) {
    console.error('[lead] no recipient configured for', formType);
    return jsonError('The form is not fully set up yet. Please call us at (866) 436-9022.', 500);
  }
  const labels = FIELD_LABELS[formType];

  const email = String(data.email ?? '').trim();
  if (!EMAIL_RE.test(email)) {
    return jsonError('Please enter a valid email address.', 400);
  }

  // Build rows in defined label order, skipping empties.
  const rows = Object.entries(labels)
    .map(([key, label]) => {
      const raw = String(data[key] ?? '').trim();
      return raw ? { label, value: raw } : null;
    })
    .filter((r): r is { label: string; value: string } => r !== null);

  if (rows.length === 0) {
    return jsonError('Please fill in the form before submitting.', 400);
  }

  const headings: Record<string, string> = {
    application: 'New merchant application',
    partner: 'New ISO partner inquiry',
    contact: 'New contact message',
  };
  const heading = headings[formType];

  const who =
    formType === 'contact'
      ? String(data.name ?? '').trim()
      : `${String(data.firstName ?? '').trim()} ${String(data.lastName ?? '').trim()}`.trim() ||
        String(data.company ?? data.businessName ?? '').trim();

  const subjects: Record<string, string> = {
    application: `New application — ${who || email}`,
    partner: `New partner inquiry — ${who || email}`,
    contact: `New contact message — ${who || email}`,
  };
  const subject = subjects[formType];

  const textBody = `${heading}\n\n${rows.map((r) => `${r.label}: ${r.value}`).join('\n')}\n`;

  const htmlRows = rows
    .map(
      (r) =>
        `<tr>
          <td style="padding:8px 16px 8px 0;color:#6a6c6a;font-size:13px;white-space:nowrap;vertical-align:top">${escapeHtml(
            r.label,
          )}</td>
          <td style="padding:8px 0;color:#0e0f0c;font-size:14px;white-space:pre-wrap">${escapeHtml(
            r.value,
          )}</td>
        </tr>`,
    )
    .join('');

  const htmlBody = `<!doctype html><html><body style="margin:0;background:#f7f9f6;padding:24px;font-family:Inter,Arial,sans-serif">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e8ebe6">
      <div style="background:#0F3A5F;padding:20px 28px">
        <div style="color:#9fe870;font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:700">National e-Payment</div>
        <div style="color:#ffffff;font-size:18px;font-weight:700;margin-top:4px">${escapeHtml(heading)}</div>
      </div>
      <div style="padding:24px 28px">
        <table style="width:100%;border-collapse:collapse">${htmlRows}</table>
        <p style="margin:20px 0 0;color:#868685;font-size:12px">Reply directly to this email to respond to ${escapeHtml(
          who || email,
        )}.</p>
      </div>
    </div>
  </body></html>`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [recipient],
        reply_to: email,
        subject,
        html: htmlBody,
        text: textBody,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('[lead] Resend error', res.status, detail);
      return jsonError('We could not send your message right now. Please call (866) 436-9022.', 502);
    }
  } catch (err) {
    console.error('[lead] network error', err);
    return jsonError('We could not send your message right now. Please call (866) 436-9022.', 502);
  }

  return Response.json({ ok: true });
}
