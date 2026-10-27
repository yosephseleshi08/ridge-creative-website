/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    "You lose $15 on a $50 order.",
    "You never get the customer’s email or phone number.",
    "You are building someone else’s business, not yours."
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Kicker Tag */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-5 h-[2px] bg-[#10b981]" aria-hidden="true" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#10b981]">
            THE COST OF THIRD-PARTY ORDERS
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-white max-w-2xl leading-[1.15] mb-10 text-balance">
          Every Order Through DoorDash Costs You 30%.
        </h2>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: 3 Checkmark Bullets */}
          <div className="lg:col-span-7 space-y-4">
            {problems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3.5 group p-2 rounded-xl transition-colors hover:bg-slate-900/40"
              >
                <div className="w-5 h-5 rounded bg-[#10b981] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-3.5 h-3.5 text-[#080c14] stroke-[3]" />
                </div>
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Breakdown Bar Chart Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#0b121e] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
              {/* Order total vs Commission tags */}
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-3">
                <span className="text-slate-400">A $50 order</span>
                <span className="text-[#f59e0b]">30% commission</span>
              </div>

              {/* Progress Bar (70% emerald / 30% amber) */}
              <div 
                className="w-full h-3 rounded-full bg-slate-800/80 flex overflow-hidden p-0.5 gap-0.5"
                role="img"
                aria-label="Bar chart showing $35 kept and $15 lost in fees from a $50 order"
              >
                <div 
                  className="bg-[#10b981] h-full rounded-l-full shadow-sm transition-all duration-1000" 
                  style={{ width: '70%' }}
                />
                <div 
                  className="bg-[#f59e0b] h-full rounded-r-full shadow-sm transition-all duration-1000" 
                  style={{ width: '30%' }}
                />
              </div>

              {/* Numerical comparison figures */}
              <div className="flex items-center justify-between mt-6 pt-2">
                <div>
                  <div className="font-outfit font-extrabold text-3xl sm:text-4xl text-white tracking-tight tabular-nums">
                    $35
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    You keep
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#f59e0b] tracking-tight tabular-nums">
                    -$15
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    Gone in fees
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
