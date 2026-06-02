'use client';

import { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      formType: 'contact',
      name: fd.get('name'),
      email: fd.get('email'),
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
      <div className="bg-white p-12 rounded-lg max-w-2xl mx-auto text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-teal/15">
          <Check className="h-7 w-7 text-teal" strokeWidth={2.5} />
        </div>
        <h2 className="text-2xl font-bold text-navy mb-2">Message sent</h2>
        <p className="text-gray-600">
          Thanks for reaching out — a member of our team will get back to you within the hour.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-12 rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-navy mb-6">Send us a Message</h2>
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        {/* Honeypot — hidden from people, tempting to bots */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="company_website">Company website</label>
          <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label htmlFor="contactName" className="block text-sm font-semibold text-navy mb-2">Name</label>
          <input
            id="contactName"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contactEmail" className="block text-sm font-semibold text-navy mb-2">Email</label>
          <input
            id="contactEmail"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="contactMessage" className="block text-sm font-semibold text-navy mb-2">Message</label>
          <textarea
            id="contactMessage"
            name="message"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal h-32"
            placeholder="Your message..."
          ></textarea>
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
          className="w-full bg-teal text-navy font-semibold py-3 rounded-lg hover:bg-teal-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
