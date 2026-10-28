/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Clock, Loader2 } from 'lucide-react';

export function FreeMockupFunnel() {
  const [linkInput, setLinkInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!linkInput.trim()) {
      setError('Please paste your Instagram or Google Maps link.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xwllbkpo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          link: linkInput.trim(),
          source: 'Free Mockup Funnel - Ridge Creative Web Studio',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setError(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setError('Submission failed. Please try again or DM @ridge_creative_ on Instagram.');
        }
      }
    } catch (err) {
      // Network fallback
      setError('Network error. Please check your connection or contact yoseph@ridgewebstudio.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-stone-50 text-stone-900 relative overflow-hidden font-dmsans">
      {/* Decorative subtle texture accents */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Kicker badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Zero Obligation · 100% Free Preview</span>
        </div>

        {/* Section Headline */}
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight leading-[1.1] mb-4 text-balance">
          Get a Free Custom Mockup in 48 Hours.
        </h2>

        {/* Subtitle */}
        <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-dmsans">
          I will build a custom, interactive demo for your restaurant so you can test drive direct ordering before spending a single penny.
        </p>

        {/* Funnel Form or Success Card */}
        {submitted ? (
          <div className="bg-white border-2 border-emerald-500/50 rounded-2xl p-8 sm:p-10 shadow-xl max-w-2xl mx-auto text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            {/* Required exact success headline */}
            <h3 className="font-playfair font-extrabold text-2xl sm:text-3xl text-stone-950">
              Got it! I'll DM you within 48 hours.
            </h3>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Your link was received: <strong className="text-emerald-700 font-mono break-all">{linkInput}</strong>. Yoseph is preparing your restaurant mockup with 0% direct ordering.
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setLinkInput('');
                }}
                className="text-xs text-stone-500 hover:text-stone-800 underline font-medium cursor-pointer"
              >
                Submit another restaurant link
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <form 
              action="https://formspree.io/f/xwllbkpo" 
              method="POST"
              onSubmit={handleSubmit} 
              className="relative"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2 bg-white rounded-2xl shadow-xl border border-stone-200 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all">
                <input
                  type="text"
                  name="link"
                  id="restaurant-link"
                  value={linkInput}
                  onChange={(e) => {
                    setLinkInput(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Paste your Instagram or Google Maps link here..."
                  aria-label="Restaurant Instagram or Google Maps link"
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-3 sm:py-3.5 text-sm sm:text-base text-stone-900 placeholder:text-stone-400 bg-transparent focus:outline-none w-full disabled:opacity-60"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#10b981] hover:bg-[#0da371] active:scale-98 text-stone-950 font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all shrink-0 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Get My Free Mockup</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {error && (
                <p className="text-red-600 text-xs text-left mt-2.5 pl-4 font-medium">
                  {error}
                </p>
              )}
            </form>

            {/* Reassurance Microcopy */}
            <p className="text-xs sm:text-sm text-stone-500 mt-4 font-normal">
              Just your link. No email, no phone, no card required.
            </p>

            {/* 3 Quick Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-stone-200/80 text-left">
              <div className="flex items-center gap-2.5 text-xs text-stone-600">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ready in 48 hours</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero sales pressure</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-600">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Custom to your kitchen</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
