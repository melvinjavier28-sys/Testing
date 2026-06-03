'use client';

import { useState } from 'react';
import { Check, AlertCircle, ArrowRight } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function PartnerForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      formType: 'partner',
      firstName: fd.get('firstName'),
      lastName: fd.get('lastName'),
      company: fd.get('company'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      bookOfBusiness: fd.get('bookOfBusiness'),
      message: fd.get('message'),
      company_website: fd.get('company_website'), // honeypot
    };

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Something went wrong.');
      form.reset();
      setStatus('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-card border border-gray-200/70 bg-white p-10 text-center shadow-[0_2px_18px_-8px_rgba(10,39,64,0.18)]">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-lime/15">
          <Check className="h-7 w-7 text-forest" strokeWidth={2.5} />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-navy">Inquiry received</h3>
        <p className="text-slate">
          Thanks for your interest in partnering with us. A dedicated business consultant will reach
          out within one business day. Need to talk sooner? Call{' '}
          <a href="tel:+18664369022" className="font-semibold text-forest">(866) 436-9022</a>.
        </p>
      </div>
    );
  }

  const field =
    'w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-lime';
  const labelCls = 'mb-1 block text-sm font-semibold text-navy';

  return (
    <div className="rounded-card border border-gray-200/70 bg-white p-7 shadow-[0_2px_18px_-8px_rgba(10,39,64,0.18)] md:p-9">
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        {/* Honeypot */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="company_website_partner">Company website</label>
          <input id="company_website_partner" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pFirst" className={labelCls}>First Name</label>
            <input id="pFirst" name="firstName" type="text" required autoComplete="given-name" className={field} placeholder="First name" />
          </div>
          <div>
            <label htmlFor="pLast" className={labelCls}>Last Name</label>
            <input id="pLast" name="lastName" type="text" required autoComplete="family-name" className={field} placeholder="Last name" />
          </div>
        </div>

        <div>
          <label htmlFor="pCompany" className={labelCls}>Company / Organization</label>
          <input id="pCompany" name="company" type="text" autoComplete="organization" className={field} placeholder="Your company name" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pEmail" className={labelCls}>Email Address</label>
            <input id="pEmail" name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
          </div>
          <div>
            <label htmlFor="pPhone" className={labelCls}>Phone Number</label>
            <input id="pPhone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="(555) 000-0000" />
          </div>
        </div>

        <div>
          <label htmlFor="pBook" className={labelCls}>Current Book of Business</label>
          <select id="pBook" name="bookOfBusiness" required className={`${field} bg-white`}>
            <option value="">Select range</option>
            <option value="just-starting">Just starting out</option>
            <option value="1-10">1 – 10 merchants</option>
            <option value="10-50">10 – 50 merchants</option>
            <option value="50-200">50 – 200 merchants</option>
            <option value="200+">200+ merchants</option>
          </select>
        </div>

        <div>
          <label htmlFor="pMsg" className={labelCls}>Tell us about your business</label>
          <textarea id="pMsg" name="message" className={`${field} h-28`} placeholder="What markets or industries do you serve?" />
        </div>

        {status === 'error' && (
          <p className="flex items-center gap-2 text-sm text-red-600">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-shine relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime py-3.5 text-base font-bold text-navy shadow-[0_10px_28px_-8px_rgba(159,232,112,0.85)] transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
        >
          {status === 'submitting' ? 'Submitting…' : (
            <>Submit Partner Inquiry <ArrowRight className="h-4 w-4" strokeWidth={2.5} /></>
          )}
        </button>

        <p className="text-center text-xs text-muted">
          Prefer to talk? Call <a href="tel:+18664369022" className="font-semibold text-forest">(866) 436-9022</a>.
          Your inquiry goes straight to our partner team.
        </p>
      </form>
    </div>
  );
}
