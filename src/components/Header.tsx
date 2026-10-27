/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface HeaderProps {
  onClaimOffer?: () => void;
}

export function Header({ onClaimOffer }: HeaderProps) {
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
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#080c14]/90 border-b border-white/[0.06] transition-all">
      <div className="max-w-6xl mx-auto px-6 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg py-1"
          aria-label="Ridge Creative Web Studio Home"
        >
          {/* Logo Icon Box with Ridge / Frame Graphic */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-slate-300 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors shadow-sm">
            <svg
              className="w-5 h-5 sm:w-5.5 sm:h-5.5"
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

        {/* Claim Offer Action */}
        <div className="flex items-center gap-3">
          <a
            href="#offer"
            onClick={handleScrollToOffer}
            className="bg-[#10b981] hover:bg-[#0da371] text-[#080c14] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-lg transition-all glow-emerald-subtle whitespace-nowrap cursor-pointer active:scale-95"
          >
            Claim Offer
          </a>
        </div>
      </div>
    </header>
  );
}
