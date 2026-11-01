/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, ChevronUp, Sparkles, ArrowRight } from 'lucide-react';

export type SectionKey = 'hero' | 'the-math' | 'how-it-works' | 'pricing' | 'free-mockup';

interface GuideContent {
  sectionName: string;
  pillPreview: string;
  fullMessage: string;
  targetId: string;
  nextSectionKey: SectionKey;
}

const GUIDE_DATA: Record<SectionKey, GuideContent> = {
  hero: {
    sectionName: 'Executive Overview',
    pillPreview: '👋 Meet Your Digital Concierge',
    fullMessage: 'Welcome. I build custom restaurant websites that save you 30% on every order. Scroll down to see the math, or paste your link below for a free mockup.',
    targetId: 'the-math',
    nextSectionKey: 'the-math',
  },
  'the-math': {
    sectionName: 'The Reality of a $50 Order',
    pillPreview: '📊 The Reality of a $50 Order',
    fullMessage: "Here is the reality of a $50 order. DoorDash takes $15. My system takes $0. That's $15 back in your pocket every time a customer orders directly.",
    targetId: 'how-it-works',
    nextSectionKey: 'how-it-works',
  },
  'how-it-works': {
    sectionName: 'Three Simple Steps',
    pillPreview: '⚙️ Three Simple Launch Steps',
    fullMessage: "Three steps: 1. DM 'Website'. 2. I build your free mockup in 48 hours. 3. You launch and keep 100% of profits.",
    targetId: 'pricing',
    nextSectionKey: 'pricing',
  },
  pricing: {
    sectionName: 'Founding Partner Tier',
    pillPreview: '💎 Founding Partner Tier',
    fullMessage: 'Founding Partner tier: $0 setup, $99/mo. No contracts. Cancel anytime.',
    targetId: 'free-mockup',
    nextSectionKey: 'free-mockup',
  },
  'free-mockup': {
    sectionName: '48-Hour Custom Mockup',
    pillPreview: '🚀 48-Hour Custom Mockup',
    fullMessage: 'Paste your restaurant link below. I\'ll build a custom mockup in 48 hours. No email, no card required.',
    targetId: 'hero',
    nextSectionKey: 'hero',
  },
};

export function InteractiveSalesGuide() {
  const [activeSection, setActiveSection] = useState<SectionKey>('hero');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionKeys: SectionKey[] = ['hero', 'the-math', 'how-it-works', 'free-mockup', 'pricing'];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let detected: SectionKey = 'hero';
      for (const key of sectionKeys) {
        const el = document.getElementById(key);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            detected = key;
          }
        }
      }
      setActiveSection(detected);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentGuide = GUIDE_DATA[activeSection] || GUIDE_DATA.hero;

  const handleContinueTour = () => {
    const targetElement = document.getElementById(currentGuide.targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside 
      aria-label="Interactive Executive Brief"
      className="fixed bottom-5 left-5 z-50 font-dmsans select-none"
    >
      {/* Expanded Active Guide Card */}
      {isExpanded && (
        <div 
          className="mb-3 w-[320px] sm:w-[380px] bg-[#0c1220] border-2 border-emerald-500 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-white backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200"
          style={{ boxShadow: '0 10px 35px rgba(0,0,0,0.7), 0 0 25px rgba(16,185,129,0.2)' }}
        >
          {/* Card Header */}
          <div className="flex items-start justify-between pb-3 mb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-emerald-400 shrink-0 shadow-sm shadow-emerald-500/20">
                <img
                  src="https://i.ibb.co/4RCrTtgq/asset-1792214975663lqprujpso.jpg"
                  alt="Yoseph Seleshi Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-playfair font-bold text-sm sm:text-base text-white leading-tight">
                  The Ridge Creative Walkthrough
                </span>
                <span className="text-[11px] text-slate-300 italic mt-0.5 leading-snug">
                  A guided tour of your new commission-free storefront.
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider mt-1">
                  {currentGuide.sectionName}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsExpanded(false)}
              className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer shrink-0 ml-2"
              aria-label="Close walkthrough"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Guide Message Body */}
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-4 text-left">
            {currentGuide.fullMessage}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleContinueTour}
              className="flex-1 bg-[#10b981] hover:bg-[#0da371] text-stone-950 font-bold text-xs py-2.5 px-5 rounded-xl transition cursor-pointer shadow-md shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-1.5"
            >
              <span>Continue Tour</span>
              <span>→</span>
            </button>

            <button
              onClick={() => setIsExpanded(false)}
              className="text-xs text-slate-400 hover:text-white px-3 py-2.5 rounded-xl hover:bg-slate-800 transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Floating Pill Guide (48px height, 50px border-radius, emerald border, dark slate bg) */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          boxShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(16,185,129,0.25)',
        }}
        className="h-12 rounded-[50px] bg-[#0c1220] hover:bg-[#11192b] border border-emerald-500 text-white pl-1.5 pr-4 flex items-center gap-2.5 transition-all hover:scale-102 active:scale-98 cursor-pointer group"
        aria-expanded={isExpanded}
        aria-label="Toggle Ridge Creative digital concierge walkthrough"
      >
        {/* Real Logo in circle */}
        <div className="w-8 h-8 rounded-full overflow-hidden border border-emerald-400/80 shrink-0 shadow-sm">
          <img
            src="https://i.ibb.co/4RCrTtgq/asset-1792214975663lqprujpso.jpg"
            alt="Ridge Creative Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dynamic Guide Text */}
        <div className="flex items-center gap-2 text-left">
          <span className="text-xs sm:text-sm font-medium text-slate-100 max-w-[200px] sm:max-w-[260px] truncate">
            {currentGuide.pillPreview}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
            <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
            Concierge
          </span>
        </div>

        {/* Chevron Indicator */}
        <div className="ml-0.5 w-5 h-5 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
          <ChevronUp className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </button>
    </aside>
  );
}
