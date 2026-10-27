/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { InstagramIcon, FacebookIcon, GmailIcon } from './SocialIcons';

export function SocialProof() {
  return (
    <section className="py-16 sm:py-24 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Stat Card */}
          <div className="md:col-span-4 w-full">
            <div className="bg-[#0b121e] border border-slate-800 rounded-2xl p-8 sm:p-10 flex flex-col justify-center items-start shadow-xl">
              <span className="font-outfit font-black text-6xl sm:text-7xl text-[#10b981] tracking-tight leading-none mb-3 drop-shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                7+
              </span>
              <p className="text-slate-400 text-sm sm:text-base font-medium">
                Restaurant websites built.
              </p>
            </div>
          </div>

          {/* Right Column: Bio & Social Handles */}
          <div className="md:col-span-8 flex flex-col items-start text-left">
            {/* Kicker */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-5 h-[2px] bg-[#10b981]" aria-hidden="true" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#10b981]">
                THE PERSON BEHIND THE STUDIO
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Built by Yoseph Seleshi
            </h2>

            {/* Bio text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Founder & Lead Designer at Ridge Creative Web Studio. I’ve built 7+ restaurant websites that help owners keep 100% of their online revenue.
            </p>

            {/* Real Social Icons Row with exact requested URLs */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ridge_creative_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Ridge Creative on Instagram"
                className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 flex items-center justify-center p-2.5 transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <InstagramIcon className="w-full h-full" />
              </a>

              {/* Facebook */}
              <a
                href="https://web.facebook.com/profile.php?id=61563444573166"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Ridge Creative on Facebook"
                className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 flex items-center justify-center p-2.5 transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FacebookIcon className="w-full h-full" />
              </a>

              {/* Email (Gmail logo, directed to yoseph@ridgewebstudio.com) */}
              <a
                href="mailto:yoseph@ridgewebstudio.com"
                aria-label="Email Yoseph Seleshi at yoseph@ridgewebstudio.com"
                className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 flex items-center justify-center p-2.5 transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <GmailIcon className="w-full h-full" />
              </a>
            </div>

            {/* Direct contact info display */}
            <div className="mt-4">
              <a 
                href="mailto:yoseph@ridgewebstudio.com" 
                className="text-xs text-slate-400 hover:text-emerald-400 transition-colors font-mono"
              >
                yoseph@ridgewebstudio.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
