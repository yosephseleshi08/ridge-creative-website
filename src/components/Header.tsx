/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface HeaderProps {
  onClaimOffer?: () => void;
}

export function Header({ onClaimOffer }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#080c14]/90 border-b border-white/[0.06] transition-all">
      <div className="max-w-6xl mx-auto px-6 h-20 sm:h-22 flex items-center justify-between">
        {/* Brand Logo with Real Logo URL, larger size, rounded-full, and emerald glow */}
        <a 
          href="#" 
          className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg py-1"
          aria-label="Ridge Creative Web Studio Home"
        >
          {/* Logo image with min-height 48px, rounded-full, subtle border & glow */}
          <div className="relative min-h-[48px] h-12 w-12 sm:min-h-[52px] sm:h-13 sm:w-13 rounded-full overflow-hidden border border-emerald-500/30 shadow-lg shadow-emerald-500/20 bg-slate-900 shrink-0 transition-transform group-hover:scale-105">
            <img 
              src="https://i.ibb.co/4RCrTtgq/asset-1792214975663lqprujpso.jpg" 
              alt="Ridge Creative Logo" 
              className="w-full h-full object-cover rounded-full"
              loading="eager"
            />
          </div>

          {/* Brand Name Typography */}
          <div className="flex flex-col text-left">
            <span className="font-playfair font-bold text-lg sm:text-xl tracking-tight text-white leading-tight group-hover:text-emerald-300 transition-colors">
              Ridge Creative
            </span>
            <span className="font-dmsans text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400 leading-tight mt-0.5">
              WEB STUDIO
            </span>
          </div>
        </a>

        {/* Header right side kept minimal without the Claim Offer button */}
      </div>
    </header>
  );
}
