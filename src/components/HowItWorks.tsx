/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageSquare, LayoutTemplate, Rocket } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      step: '01',
      icon: MessageSquare,
      title: 'Start a conversation',
      description: 'DM me “Website” on Instagram or Facebook.',
    },
    {
      step: '02',
      icon: LayoutTemplate,
      title: 'See your restaurant online',
      description: 'I build your custom mockup in 48 hours (Free).',
    },
    {
      step: '03',
      icon: Rocket,
      title: 'Launch. Keep every dollar.',
      description: 'You approve, launch, and keep 100% of your profits.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Kicker */}
        <div className="inline-flex items-center gap-2.5 mb-3">
          <div className="w-5 h-[2px] bg-[#10b981]" aria-hidden="true" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#10b981]">
            YOUR DIRECT ORDERING WEBSITE
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12 text-balance">
          How It Works (3 Simple Steps)
        </h2>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#0b121e] border border-slate-800 hover:border-emerald-500/30 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Icon & Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-[#10b981] group-hover:bg-[#10b981] group-hover:text-[#080c14] transition-colors">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="font-outfit font-bold text-2xl text-slate-500 tabular-nums">
                      {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-outfit font-bold text-xl text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://final-client-closer.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#10b981] hover:bg-[#0da371] text-[#080c14] font-bold text-base px-8 py-3.5 rounded-xl inline-flex items-center justify-center transition-all glow-emerald shadow-lg cursor-pointer active:scale-98"
          >
            See a Live Restaurant Demo
          </a>
        </div>

      </div>
    </section>
  );
}
