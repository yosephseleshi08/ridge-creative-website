/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface HeaderProps {
  onClaimOffer?: () => void;
}

export function Header({ onClaimOffer }: HeaderProps) {
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
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#080c14]/90 border-b border-white/[0.06] transition-all">
      <div className="max-w-6xl mx-auto px-6 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo with <img src="/logo.png" alt="Ridge Creative Logo" /> */}
        <a 
          href="#" 
          className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg py-1"
          aria-label="Ridge Creative Web Studio Home"
        >
          {/* Logo container using <img src="/logo.png" alt="Ridge Creative Logo" /> */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-slate-700/80 bg-slate-900 overflow-hidden flex items-center justify-center group-hover:border-emerald-500/50 transition-colors shadow-sm shrink-0">
            <img 
              src="/logo.png" 
              alt="Ridge Creative Logo" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Graceful fallback if user removes or replaces logo
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = '<span class="text-xs font-bold text-emerald-400">RC</span>';
                }
              }}
            />
          </div>

          {/* Brand Name Typography */}
          <div className="flex flex-col text-left">
            <span className="font-outfit font-bold text-base sm:text-lg tracking-tight text-white leading-tight group-hover:text-emerald-300 transition-colors">
              Ridge Creative
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400 leading-tight">
              WEB STUDIO
            </span>
          </div>
        </a>

        {/* Claim Offer Action: Smoothly SCROLL DOWN to the pricing section (Do NOT redirect to Instagram) */}
        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            onClick={handleScrollToPricing}
            className="bg-[#10b981] hover:bg-[#0da371] text-[#080c14] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-lg transition-all glow-emerald-subtle whitespace-nowrap cursor-pointer active:scale-95"
          >
            Claim Offer
          </a>
        </div>
      </div>
    </header>
  );
}
