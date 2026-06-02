'use client';

import { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ApplicationForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      formType: 'application',
      firstName: fd.get('firstName'),
      lastName: fd.get('lastName'),
      businessName: fd.get('businessName'),
      businessType: fd.get('businessType'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      volume: fd.get('volume'),
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
      <div id="apply" className="bg-white p-8 rounded-lg shadow-sm text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-teal/15">
          <Check className="h-7 w-7 text-teal" strokeWidth={2.5} />
        </div>
        <h2 className="text-2xl font-bold text-navy mb-2">Application received</h2>
        <p className="text-gray-600">
          Thanks! A National e-Payment specialist will reach out shortly — often the same business day —
          to finish setting up your account.
        </p>
      </div>
    );
  }

  return (
    <div id="apply" className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-navy mb-6">Free Merchant Application</h2>
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        {/* Honeypot */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="company_website_app">Company website</label>
          <input id="company_website_app" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-navy mb-1">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
              placeholder="First name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-navy mb-1">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
              placeholder="Last name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="businessName" className="block text-sm font-semibold text-navy mb-1">Business Name</label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            autoComplete="organization"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
            placeholder="Your business name"
          />
        </div>

        <div>
          <label htmlFor="businessType" className="block text-sm font-semibold text-navy mb-1">Business Type</label>
          <select
            id="businessType"
            name="businessType"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal bg-white"
          >
            <option value="">Select your industry</option>
            <option value="restaurants">Restaurant / QSR</option>
            <option value="retail">Retail</option>
            <option value="grocery">Grocery / Convenience Store</option>
            <option value="gas-stations">Gas Station</option>
            <option value="lodging">Hotel / Lodging</option>
            <option value="ecommerce">E-commerce</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
            placeholder="you@yourbusiness.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
            placeholder="(555) 000-0000"
          />
        </div>

        <div>
          <label htmlFor="volume" className="block text-sm font-semibold text-navy mb-1">Monthly Processing Volume (estimate)</label>
          <select
            id="volume"
            name="volume"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal bg-white"
          >
            <option value="">Select range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-25k">$5,000 – $25,000</option>
            <option value="25k-100k">$25,000 – $100,000</option>
            <option value="100k-500k">$100,000 – $500,000</option>
            <option value="500k+">$500,000+</option>
          </select>
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
          className="w-full bg-teal text-navy font-semibold py-3 rounded-lg hover:bg-teal-dark transition-colors text-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By submitting you agree to be contacted by a National e-Payment representative.
          No charges until you activate your account.
        </p>
      </form>
    </div>
  );
}
