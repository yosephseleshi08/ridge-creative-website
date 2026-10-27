/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Check } from 'lucide-react';

export function ProblemSolutionSection() {
  const problems = [
    { title: 'Pinch-to-zoom PDFs', desc: 'Frustrated customers bounce when menus are unreadable clunky PDF downloads.' },
    { title: '30% Commission Gouging', desc: 'DoorDash & UberEats siphon away almost a third of every single ticket.' },
    { title: 'Missing Tap-to-Call & Maps', desc: 'Hungry locals can’t instantly ring your kitchen or navigate to your front door.' },
    { title: 'Outdated Prices & Items', desc: 'Old prices and sold-out specials left unedited for months because webmasters vanish.' },
  ];

  const solutions = [
    { title: 'Instant Mobile Menus', desc: 'Lightning-fast, appetizing, thumb-friendly ordering that loads in under 1 second.' },
    { title: '0% Commission Direct Ordering', desc: 'Keep 100% of every dollar. Payments go straight to your own Square/Stripe.' },
    { title: '1-Tap Call, Maps & Reserve', desc: 'Turn casual visitors into seated diners with one seamless tap from Instagram or Google.' },
    { title: 'Hands-off Monthly Updates', desc: 'Just text me your menu changes. I update your live website within hours for you.' },
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-slate-800/80 font-dmsans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Kicker Tag */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-5 h-[2px] bg-[#10b981]" aria-hidden="true" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#10b981]">
            THE COST OF THE STATUS QUO
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] text-balance">
            The Outdated Status Quo is Costing You Money.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Most restaurant websites were designed like desktop brochures from 2014. Here is why they leak customers and profit every day.
          </p>
        </div>

        {/* 2-Column Side-by-Side: The Outdated Problem vs The Ridge Creative Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* Card A: The Outdated Status Quo (Red X bullets) */}
          <div className="bg-[#0e121b] border border-red-500/20 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-red-500/10">
              <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold">
                ✕
              </span>
              <h3 className="font-playfair font-bold text-lg sm:text-xl text-red-200">
                The Outdated Status Quo
              </h3>
            </div>

            <div className="space-y-4">
              {problems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-md bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-400 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-sm sm:text-base text-slate-100">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card B: The Ridge Creative Solution (Green Checkmark bullets) */}
          <div className="bg-[#0b1717] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-emerald-500/10">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                ✓
              </span>
              <h3 className="font-playfair font-bold text-lg sm:text-xl text-emerald-300">
                The Ridge Creative Solution
              </h3>
            </div>

            <div className="space-y-4">
              {solutions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-sm sm:text-base text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300/80 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Visual Fee Comparison Card */}
        <div className="bg-[#0b121e] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs sm:text-sm font-semibold text-slate-400">
              Third-Party Take on a Typical $50 Ticket:
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#f59e0b]">
              30% DoorDash / UberEats cut
            </span>
          </div>

          {/* Progress Bar (70% emerald / 30% amber) */}
          <div 
            className="w-full h-3 rounded-full bg-slate-800/80 flex overflow-hidden p-0.5 gap-0.5 my-3"
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
          <div className="flex items-center justify-between pt-2">
            <div>
              <div className="font-playfair font-extrabold text-3xl sm:text-4xl text-white tracking-tight tabular-nums">
                $35
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                You keep (Third-party app)
              </div>
            </div>

            <div className="text-right">
              <div className="font-playfair font-extrabold text-3xl sm:text-4xl text-[#f59e0b] tracking-tight tabular-nums">
                -$15
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                Gone in fees per ticket
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800/80 text-center">
            <p className="text-xs sm:text-sm text-emerald-400 font-medium">
              💡 With Ridge Creative Direct Ordering: You keep the full <strong className="text-white">$50</strong> on every single order.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
