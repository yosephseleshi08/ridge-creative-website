/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export function PricingGrid() {
  const plans = [
    {
      id: 'founding',
      name: 'Founding Partner',
      tag: 'First 3 Clients Only',
      tagStyle: 'bg-amber-950/60 border-amber-500/40 text-amber-300 animate-spot-pulse',
      cardStyle: 'bg-[#0c1220] border-slate-800 text-white hover:border-slate-700',
      price: '$0',
      period: 'Setup + $99/mo',
      strikethrough: 'Normally $499 Setup',
      desc: 'Ideal for neighborhood restaurants wanting to stop third-party fee gouging immediately.',
      features: [
        'Live in 48 hours guaranteed',
        'Interactive mobile-first digital menu',
        '1-tap call & Google Maps navigation',
        'Monthly menu & price updates included',
        'Zero commission on orders (keep 100%)',
        'Custom domain setup & free hosting'
      ],
      isPopular: false,
      btnStyle: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
    },
    {
      id: 'growth',
      name: 'Growth & Direct Ordering',
      tag: '🔥 Most Popular · Recommended',
      tagStyle: 'bg-emerald-500 text-slate-950 font-bold',
      // Pure white background to break up the dark theme and highlight as recommended option
      cardStyle: 'bg-white text-stone-900 border-2 border-emerald-500 shadow-2xl relative lg:-translate-y-3',
      price: '$299',
      period: 'Setup + $99/mo',
      strikethrough: 'Normally $799 Setup',
      desc: 'Everything you need to turn visitors into repeat diners with direct takeout and booking.',
      features: [
        'Everything in Founding Partner',
        'Commission-free direct ordering checkout',
        'Direct table reservation booking widget',
        'Local Google SEO & Maps optimization',
        'Customer email & phone data capture',
        'Direct Stripe / Square payout integration',
        'Priority updates within 24 hours'
      ],
      isPopular: true,
      btnStyle: 'bg-[#10b981] hover:bg-[#0da371] text-slate-950 font-bold glow-emerald'
    },
    {
      id: 'vip',
      name: 'VIP Full Maintenance',
      tag: 'Full Agency Hands-Off',
      tagStyle: 'bg-slate-800/80 border-slate-700 text-slate-300',
      cardStyle: 'bg-[#0c1220] border-slate-800 text-white hover:border-slate-700',
      price: '$499',
      period: 'Setup + $149/mo',
      strikethrough: 'Normally $1,199 Setup',
      desc: 'Complete white-glove digital presence for busy owners who want zero tech headaches.',
      features: [
        'Everything in Growth & Direct Ordering',
        'Automated Google Review QR flyer design',
        'Event, catering & private party pipelines',
        'SMS & email loyalty program integration',
        'Same-day priority updates (just text me)',
        'Quarterly revenue & menu optimization review'
      ],
      isPopular: false,
      btnStyle: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
    }
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 max-w-6xl mx-auto px-6 scroll-mt-24 font-dmsans">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2.5 mb-3">
          <div className="w-5 h-[2px] bg-[#10b981]" aria-hidden="true" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#10b981]">
            TRANSPARENT RESTAURANT PRICING
          </span>
        </div>

        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
          Simple, Commission-Free Pricing.
        </h2>

        <p className="text-slate-400 text-base sm:text-lg">
          No hidden fees, no percentage cuts, no long-term contracts. Keep 100% of your hard-earned revenue.
        </p>
      </div>

      {/* 3-Tier Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${plan.cardStyle}`}
          >
            <div>
              {/* Badge Tag */}
              <div className="mb-4">
                <span className={`inline-flex items-center text-xs px-3 py-1 rounded-full border ${plan.tagStyle}`}>
                  {plan.tag}
                </span>
              </div>

              {/* Plan Name & Strikethrough */}
              <h3 className="font-playfair font-extrabold text-2xl tracking-tight mb-1">
                {plan.name}
              </h3>
              <p className={`text-xs font-medium line-through ${plan.isPopular ? 'text-stone-400' : 'text-slate-500'}`}>
                {plan.strikethrough}
              </p>

              {/* Price display */}
              <div className="my-5 flex items-baseline gap-1.5">
                <span className={`font-playfair font-black text-4xl sm:text-5xl tracking-tight ${plan.isPopular ? 'text-stone-950' : 'text-emerald-400'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm font-semibold ${plan.isPopular ? 'text-stone-600' : 'text-slate-300'}`}>
                  {plan.period}
                </span>
              </div>

              {/* Short Description */}
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 pb-6 border-b ${plan.isPopular ? 'text-stone-600 border-stone-200' : 'text-slate-400 border-slate-800'}`}>
                {plan.desc}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                <p className={`text-[11px] font-bold uppercase tracking-wider ${plan.isPopular ? 'text-stone-900' : 'text-slate-300'}`}>
                  What's included:
                </p>
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.isPopular ? 'bg-emerald-100 text-emerald-700' : 'bg-emerald-950/60 text-emerald-400'}`}>
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className={`text-xs sm:text-sm ${plan.isPopular ? 'text-stone-700 font-medium' : 'text-slate-300'}`}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ONLY this button in the pricing card links to external IG */}
            <div>
              <a
                href="https://ig.me/m/ridge_creative_"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all shadow-md active:scale-98 cursor-pointer ${plan.btnStyle}`}
              >
                <span>Claim Your Spot Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Email Fallback CTA */}
              <div className="text-center mt-3">
                <a
                  href="mailto:yoseph@ridgewebstudio.com"
                  className={`text-xs transition-colors underline-offset-4 hover:underline ${
                    plan.isPopular 
                      ? 'text-stone-600 hover:text-emerald-700 font-medium' 
                      : 'text-slate-400 hover:text-emerald-400'
                  }`}
                >
                  Or email me: yoseph@ridgewebstudio.com
                </a>
              </div>

              <p className={`text-[11px] text-center mt-1.5 ${plan.isPopular ? 'text-stone-400' : 'text-slate-500'}`}>
                Instant DM to Yoseph · Quick 5-min onboarding
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* Guarantee Banner */}
      <div className="mt-12 text-center text-xs sm:text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-3">
        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <Check className="w-4 h-4" /> 100% Money-Back Guarantee
        </span>
        <span className="hidden sm:inline">·</span>
        <span>If you don't love your custom site design in 48 hours, pay $0.</span>
      </div>

    </section>
  );
}
