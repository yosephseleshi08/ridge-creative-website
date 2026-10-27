/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function OfferSection() {
  return (
    <section id="offer" className="py-16 sm:py-24 max-w-6xl mx-auto px-6 scroll-mt-24">
      {/* Premium Gradient Card */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#0a1e19] via-[#091516] to-[#070e14] border border-emerald-500/30 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden">
        
        {/* Soft background emerald light glow */}
        <div 
          className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading and Price breakdown */}
          <div className="lg:col-span-7 text-left space-y-3">
            {/* Offer Title */}
            <div className="flex items-center gap-2">
              <span className="text-2xl" role="img" aria-label="Flame">🔥</span>
              <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                Founding Client Offer
              </h2>
            </div>

            {/* Strikethrough previous price */}
            <p className="text-slate-400 text-sm sm:text-base font-medium line-through decoration-slate-500 decoration-1">
              Normally $299 Setup
            </p>

            {/* Price headline */}
            <div className="pt-1">
              <div className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                <span className="text-[#10b981] drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">
                  $0
                </span>{' '}
                <span className="text-white">
                  Setup + $99/mo
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Pulse badge, CTA button, microcopy */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-5">
            
            {/* Amber Pulse Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-950/50 border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-semibold animate-spot-pulse shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span>Only 3 Spots Left This Month</span>
            </div>

            {/* CTA Button */}
            <a
              href="https://ig.me/m/ridge_creative_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-[#10b981] hover:bg-[#0da371] text-[#080c14] font-bold text-base px-9 py-4 rounded-xl transition-all glow-emerald shadow-lg cursor-pointer active:scale-98"
            >
              Claim Your Spot Now
            </a>

            {/* Reassurance Microcopy */}
            <p className="text-xs text-slate-400 tracking-wide font-normal">
              Your website. Your orders. Your revenue.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
