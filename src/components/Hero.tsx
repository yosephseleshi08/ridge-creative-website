/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, CheckCircle2, Lock, ShoppingBag } from 'lucide-react';
import pizzaImg from '../assets/images/artisanal_pizza_mockup_1793128124323.jpg';

interface HeroProps {
  onClaimOffer?: () => void;
}

export function Hero({ onClaimOffer }: HeroProps) {
  const handleScrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClaimOffer) {
      onClaimOffer();
    } else {
      const el = document.getElementById('offer');
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
            
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="w-7 h-7 rounded-md border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-400 shrink-0">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
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
              <a
                href="#offer"
                onClick={handleScrollToOffer}
                className="bg-[#10b981] hover:bg-[#0da371] text-[#080c14] font-bold text-base px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition-all glow-emerald shadow-lg cursor-pointer active:scale-98"
              >
                <span>🔥</span>
                <span>Claim Your Founding Client Offer</span>
              </a>

              <a
                href="https://final-client-closer.vercel.app/"
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

          {/* Right Column: Visual Mockup (The Local Table Preview) */}
          <div className="lg:col-span-5 w-full relative mt-4 lg:mt-0">
            {/* Browser Card Container */}
            <div className="relative rounded-2xl bg-[#0e1626] p-1.5 shadow-2xl border border-slate-700/60 overflow-visible transition-transform duration-300 hover:border-emerald-500/30">
              
              {/* Browser Window Header */}
              <div className="bg-[#edeae5] text-slate-800 rounded-t-xl px-4 py-2.5 flex items-center justify-between">
                {/* 3 Window Dots */}
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-400" />
                </div>
                
                {/* Title */}
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-stone-600">
                  ILLUSTRATIVE WEBSITE PREVIEW
                </span>

                {/* Lock Icon */}
                <Lock className="w-3.5 h-3.5 text-stone-600" />
              </div>

              {/* Browser Content */}
              <div className="bg-[#12141a] rounded-b-xl overflow-hidden text-left">
                
                {/* Website Sub-Nav Bar */}
                <div className="bg-[#faf8f5] px-4 py-2.5 flex items-center justify-between border-b border-stone-200">
                  <span className="font-outfit font-extrabold text-sm tracking-tight text-stone-900">
                    THE LOCAL TABLE
                  </span>
                  <a
                    href="https://final-client-closer.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#182a23] hover:bg-[#12201b] text-emerald-400 font-semibold text-[11px] px-2.5 py-1 rounded flex items-center gap-1 transition"
                  >
                    <span>Order direct</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>

                {/* Website Hero with Pizza image */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    src={pizzaImg}
                    alt="Artisanal pizza at The Local Table"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Contrast Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent p-5 flex flex-col justify-center">
                    <span className="text-[10px] font-extrabold tracking-widest text-emerald-400 uppercase mb-1">
                      FRESH. LOCAL. YOURS.
                    </span>
                    <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-white leading-tight drop-shadow-md">
                      Good food.<br />Closer to home.
                    </h2>
                    <a
                      href="https://final-client-closer.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 bg-white hover:bg-stone-100 text-stone-950 font-bold text-xs px-3 py-1.5 rounded shadow-sm w-fit transition"
                    >
                      <span>Explore the menu</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Website Bottom Card strip */}
                <div className="bg-[#faf8f5] px-4 py-3 flex items-center justify-between border-t border-stone-200">
                  <div>
                    <p className="font-bold text-xs text-stone-900">Your kitchen. Your customers.</p>
                    <p className="text-[10px] text-stone-500">Direct ordering, made simple.</p>
                  </div>
                  <div className="w-7 h-7 rounded-md border border-stone-300 flex items-center justify-center text-stone-700">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Floating Badge (0% Commission. Always. Keep what you earn.) */}
              <div className="absolute -bottom-5 -right-2 sm:-bottom-6 sm:-right-4 z-20 bg-[#0c1a17]/95 border border-emerald-500/50 rounded-xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center gap-3.5">
                <span className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#10b981] leading-none drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]">
                  0%
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-outfit font-bold text-xs sm:text-sm text-white leading-tight">
                    Commission. Always.
                  </span>
                  <span className="text-[10px] sm:text-xs text-emerald-400/90 font-medium leading-tight">
                    Keep what you earn.
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
