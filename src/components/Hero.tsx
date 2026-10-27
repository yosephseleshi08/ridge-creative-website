/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { InteractivePhoneMockup } from './InteractivePhoneMockup';

interface HeroProps {
  onClaimOffer?: () => void;
}

export function Hero({ onClaimOffer }: HeroProps) {
  const handleScrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClaimOffer) {
      onClaimOffer();
    } else {
      const el = document.getElementById('pricing');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 -right-48 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Kicker badge with <img src="/logo.png" alt="Ridge Creative Logo" /> */}
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="w-7 h-7 rounded-md border border-slate-700/80 bg-slate-900 overflow-hidden flex items-center justify-center shrink-0">
                <img 
                  src="/logo.png" 
                  alt="Ridge Creative Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = '<span class="text-[9px] font-bold text-emerald-400">RC</span>';
                    }
                  }}
                />
              </div>
              <span className="tracking-wide">Custom Restaurant Websites | 0% Commission</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Your Restaurant is Losing 30% to DoorDash.{' '}
              <span className="text-[#10b981] drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                Stop the Bleed.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300/90 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
              I build commission-free direct ordering websites for local restaurants. Live in 48 hours. $0 setup.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Primary CTA: Smoothly SCROLL DOWN to the pricing section (Do NOT redirect to Instagram) */}
              <a
                href="#pricing"
                onClick={handleScrollToPricing}
                className="bg-[#10b981] hover:bg-[#0da371] text-[#080c14] font-bold text-base px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition-all glow-emerald shadow-lg cursor-pointer active:scale-98"
              >
                <span>🔥</span>
                <span>Claim Your Founding Client Offer</span>
              </a>

              {/* Secondary CTA: Links to exact URL https://the-plannerz-place.ridgewebstudio.com/ */}
              <a
                href="https://the-plannerz-place.ridgewebstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-white font-medium text-base px-4 py-3 flex items-center justify-center gap-2 group transition-colors"
              >
                <span>See a Live Demo</span>
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </a>
            </div>

            {/* Trust Proof */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 pt-1">
              <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
              <span>Trusted by 7+ local restaurants.</span>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="lg:col-span-5 w-full relative mt-4 lg:mt-0 flex justify-center">
            <InteractivePhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
