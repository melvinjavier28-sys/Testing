import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import { BadgeCheck, Building2, Headphones, ShieldCheck } from 'lucide-react';

const trustItems = [
  {
    Icon: Building2,
    title: 'Registered Banking Relationships',
    body: 'Processing relationships with Elavon, Wells Fargo, Esquire Bank, and Commercial Bank of California.',
  },
  {
    Icon: ShieldCheck,
    title: 'Security-First Equipment',
    body: 'PCI, EMV, and contactless-ready hardware options for countertop, mobile, and wireless workflows.',
  },
  {
    Icon: Headphones,
    title: '24/7 Merchant Support',
    body: 'A real support path for approvals, setup, equipment questions, and payment interruptions.',
  },
];

export default function TrustSignals() {
  return (
    <Section background="white" className="border-y border-ash">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-lime/15 px-4 py-2 text-xs font-bold text-forest mb-4">
            <BadgeCheck className="w-4 h-4" />
            Certified, supported, and ready to deploy
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3 tracking-tight">Built for Merchant Confidence</h2>
          <p className="text-slate">
            Clear onboarding, equipment guidance, compliance-aware setup, and support that stays available after approval.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {trustItems.map(({ Icon, title, body }) => (
            <div key={title} className="rounded-card border border-ash bg-white p-7 shadow-[rgba(0,0,0,0.06)_0px_6px_20px_0px]">
              <div className="w-11 h-11 rounded-xl bg-lime/20 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-forest" strokeWidth={1.7} />
              </div>
              <h3 className="text-base font-bold text-ink mb-2">{title}</h3>
              <p className="text-sm text-slate leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
