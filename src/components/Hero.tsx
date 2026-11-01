/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CheckCircle2, Loader2, RotateCcw } from 'lucide-react';
import { InteractivePhoneMockup } from './InteractivePhoneMockup';

interface HeroProps {
  onClaimOffer?: () => void;
}

export function Hero({ onClaimOffer }: HeroProps) {
  // Free Mockup Form State (Primary Hero CTA)
  const [linkInput, setLinkInput] = useState('');
  const [submittedLink, setSubmittedLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(10);

  // Auto-reset feature for hero form
  useEffect(() => {
    if (!submitted) {
      setCountdown(10);
      return;
    }

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setSubmitted(false);
          setLinkInput('');
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [submitted]);

  const handleHeroSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!linkInput.trim()) {
      setError('Please paste your Instagram or Google Maps link.');
      return;
    }

    setError('');
    setIsSubmitting(true);
    const targetLink = linkInput.trim();

    try {
      const response = await fetch('https://formspree.io/f/xwllbkpo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          link: targetLink,
          source: 'Hero Mockup Form - Ridge Creative Web Studio',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmittedLink(targetLink);
        setSubmitted(true);
        setCountdown(10);
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setError(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setError('Submission failed. Please try again or DM @ridge_creative_ on Instagram.');
        }
      }
    } catch {
      setError('Network error. Please check your connection or contact yoseph@ridgewebstudio.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden font-dmsans scroll-mt-20">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 -right-48 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Two Distinct Columns: Left (Content + Dominant Inline Form + Math Card) & Right (Phone Mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Subtext, Dominant Inline Form, Math Card stacked vertically */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Kicker badge with real logo */}
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium bg-slate-900/60 border border-slate-800 rounded-full py-1 px-3 shadow-sm">
              <div className="w-6 h-6 rounded-full overflow-hidden border border-emerald-500/40 shadow-sm shadow-emerald-500/20 shrink-0">
                <img 
                  src="https://i.ibb.co/4RCrTtgq/asset-1792214975663lqprujpso.jpg" 
                  alt="Ridge Creative Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="tracking-wide">Custom Restaurant Websites · 0% Commission</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] text-balance">
              Your Restaurant is Losing 30% to DoorDash.{' '}
              <span className="text-[#10b981] drop-shadow-[0_0_25px_rgba(16,185,129,0.3)] italic">
                Stop the Bleed.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300/90 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl font-dmsans">
              I build commission-free direct ordering websites for local restaurants. Live in 48 hours. $0 setup.
            </p>

            {/* Primary Dominant Inline Form (Replaces redundant hero CTA button) */}
            <div className="w-full max-w-xl pt-1">
              {submitted ? (
                <div className="bg-[#0b1717] border border-emerald-500/50 rounded-2xl p-5 shadow-2xl text-left space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                    <span className="font-playfair text-lg text-white">Got it! I'll DM you within 48 hours.</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Your link was received: <strong className="text-emerald-400 font-mono break-all">{submittedLink}</strong>. Yoseph is preparing your restaurant mockup with 0% direct ordering.
                  </p>
                  <div className="flex items-center gap-3 pt-1">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setLinkInput('');
                      }}
                      className="text-xs text-stone-900 bg-emerald-400 hover:bg-emerald-300 font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 cursor-pointer transition"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit another link</span>
                    </button>
                    <span className="text-[11px] text-slate-400">
                      Auto-reset in {countdown}s
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleHeroSubmit} className="space-y-3">
                  {/* Dominant, taller, more prominent input bar */}
                  <div className="flex flex-col sm:flex-row items-stretch gap-2.5 bg-[#0e1626] border-2 border-emerald-500/70 rounded-2xl p-2 shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(16,185,129,0.2)] focus-within:border-emerald-400 focus-within:ring-4 focus-within:ring-emerald-500/20 transition-all">
                    <input
                      type="text"
                      name="hero-link"
                      value={linkInput}
                      onChange={(e) => {
                        setLinkInput(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Paste your Instagram or Google Maps link here..."
                      aria-label="Restaurant Instagram or Google Maps link"
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-3.5 sm:py-4 text-base text-white placeholder:text-slate-400 bg-slate-900/60 rounded-xl focus:outline-none w-full disabled:opacity-60 font-medium"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#10b981] hover:bg-[#0da371] active:scale-98 text-stone-950 font-bold text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg glow-emerald transition-all shrink-0 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Get My Free Mockup</span>
                          <span className="text-lg">→</span>
                        </>
                      )}
                    </button>
                  </div>

                  {error && (
                    <p className="text-red-400 text-xs pl-2 font-medium">
                      {error}
                    </p>
                  )}

                  {/* Subtext and Elegant Text Link for "See a Live Demo" */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 pl-1 text-xs sm:text-sm text-slate-400">
                    <span>No email. No credit card. Just paste your restaurant link.</span>

                    {/* Secondary CTA: Simple elegant text link without background or border */}
                    <a
                      href="https://the-plannerz-place.ridgewebstudio.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-emerald-400 underline underline-offset-4 font-medium transition-colors inline-flex items-center gap-1 shrink-0"
                    >
                      <span>See a Live Demo</span>
                      <span>→</span>
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* The Math Card (Stacked vertically in the Left Column, cleanly to the left of the phone mockup) */}
            <TheMathCard />

            {/* Trust Proof */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 pt-1 font-dmsans">
              <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
              <span>Trusted by 7+ local restaurants.</span>
            </div>
          </div>

          {/* Right Column: The Phone Mockup (Distinct column, zero visual overlap) */}
          <div className="lg:col-span-5 w-full relative mt-4 lg:mt-0 flex justify-center items-center">
            <InteractivePhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
}

{/* Premium Card: The Math on a $50 Order */}
function TheMathCard({ className = '' }: { className?: string }) {
  return (
    <div 
      className={`w-full max-w-xl bg-[#0b121e]/95 border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-md font-dmsans text-left ${className}`}
      style={{ boxShadow: '0 15px 40px rgba(0,0,0,0.7), 0 0 20px rgba(16,185,129,0.15)' }}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <h4 className="font-playfair font-extrabold text-sm sm:text-base text-white tracking-tight">
          The Math on a $50 Order
        </h4>
        <span className="text-[10px] font-bold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
          30% DoorDash Cut
        </span>
      </div>

      {/* Visual comparison bar: $35 kept (70%) vs $15 lost (30%) */}
      <div 
        className="w-full h-2.5 rounded-full bg-slate-800/90 flex overflow-hidden p-0.5 gap-0.5 my-2.5"
        role="img"
        aria-label="DoorDash takes $15, you keep $35"
      >
        <div className="bg-[#10b981] h-full rounded-l-full shadow-sm" style={{ width: '70%' }} />
        <div className="bg-[#ef4444] h-full rounded-r-full shadow-sm" style={{ width: '30%' }} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-2.5">
        {/* Row 1 (Red): DoorDash takes: -$15.00 */}
        <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-red-950/40 border border-red-500/25 text-xs">
          <span className="text-red-300 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
            DoorDash takes:
          </span>
          <span className="font-playfair font-bold text-red-400 font-mono text-sm">
            -$15.00
          </span>
        </div>

        {/* Row 2 (Emerald Green): Ridge Creative takes: $0.00 */}
        <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-emerald-950/40 border border-emerald-500/35 text-xs">
          <span className="text-emerald-300 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            Ridge Creative takes:
          </span>
          <span className="font-playfair font-bold text-emerald-400 font-mono text-sm">
            $0.00
          </span>
        </div>
      </div>

      {/* Footer: Keep what you earn */}
      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
        <span className="text-emerald-400 font-bold flex items-center gap-1">
          ✓ Keep what you earn.
        </span>
        <span className="text-slate-400 font-mono text-[11px]">
          +$15/order saved directly
        </span>
      </div>
    </div>
  );
}
