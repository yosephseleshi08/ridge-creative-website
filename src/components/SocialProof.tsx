/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { InstagramIcon, FacebookIcon, GmailIcon } from './SocialIcons';

export function SocialProof() {
  return (
    <section className="py-16 sm:py-24 bg-white text-stone-900 border-t border-stone-200 font-dmsans">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Stat Card on White Background with Green Border for Contrast */}
          <div className="md:col-span-4 w-full">
            <div className="bg-white border-2 border-emerald-500/60 rounded-3xl p-8 sm:p-10 flex flex-col justify-center items-start shadow-xl shadow-stone-200/60">
              <span className="font-playfair font-black text-6xl sm:text-7xl text-[#10b981] tracking-tight leading-none mb-3 drop-shadow-sm">
                7+
              </span>
              <p className="text-stone-700 text-base sm:text-lg font-bold">
                Restaurant websites built.
              </p>
              <p className="text-xs text-stone-500 mt-1 font-medium">
                100% commission-free results
              </p>
            </div>
          </div>

          {/* Right Column: Bio & Social Handles with dark text on white */}
          <div className="md:col-span-8 flex flex-col items-start text-left">
            {/* Kicker */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-5 h-[2px] bg-emerald-600" aria-hidden="true" />
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-700">
                THE PERSON BEHIND THE STUDIO
              </span>
            </div>

            {/* Headline in Playfair Display */}
            <h2 className="font-playfair font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-950 tracking-tight mb-4">
              Built by Yoseph Seleshi
            </h2>

            {/* Bio text in high-contrast dark text */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Founder & Lead Designer at Ridge Creative Web Studio. I’ve built 7+ restaurant websites that help owners keep 100% of their online revenue without paying a cent to third-party delivery apps.
            </p>

            {/* Real Social Icons Row (Authentic Colored SVGs on clean light buttons) */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ridge_creative_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Ridge Creative on Instagram"
                className="w-12 h-12 rounded-2xl bg-stone-100 hover:bg-white border border-stone-200 hover:border-emerald-500 flex items-center justify-center p-2.5 transition-all hover:scale-105 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
              >
                <InstagramIcon className="w-full h-full" />
              </a>

              {/* Facebook */}
              <a
                href="https://web.facebook.com/profile.php?id=61563444573166"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Ridge Creative on Facebook"
                className="w-12 h-12 rounded-2xl bg-stone-100 hover:bg-white border border-stone-200 hover:border-emerald-500 flex items-center justify-center p-2.5 transition-all hover:scale-105 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
              >
                <FacebookIcon className="w-full h-full" />
              </a>

              {/* Email (Gmail logo, directed to yoseph@ridgewebstudio.com) */}
              <a
                href="mailto:yoseph@ridgewebstudio.com"
                aria-label="Email Yoseph Seleshi at yoseph@ridgewebstudio.com"
                className="w-12 h-12 rounded-2xl bg-stone-100 hover:bg-white border border-stone-200 hover:border-emerald-500 flex items-center justify-center p-2.5 transition-all hover:scale-105 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
              >
                <GmailIcon className="w-full h-full" />
              </a>
            </div>

            {/* Direct contact info display */}
            <div className="mt-4">
              <a 
                href="mailto:yoseph@ridgewebstudio.com" 
                className="text-xs text-stone-600 hover:text-emerald-700 transition-colors font-mono font-medium underline underline-offset-4"
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
