/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { MessageSquare, LayoutTemplate, Rocket } from 'lucide-react';

export function HowItWorks() {
  useEffect(() => {
    const showcaseVideo = document.querySelector<HTMLVideoElement>('#video-showcase video');
    if (showcaseVideo) {
      const handleTimeUpdate = function(this: HTMLVideoElement) {
        // If the video is near the end, reset it to the start
        if (this.currentTime >= this.duration - 0.1) {
          this.currentTime = 0;
        }
      };
      showcaseVideo.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        showcaseVideo.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);
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
    <>
      <section id="how-it-works" className="py-16 sm:py-24 border-t border-slate-800/80 font-dmsans scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          {/* Kicker */}
          <div className="inline-flex items-center gap-2.5 mb-3">
            <div className="w-5 h-[2px] bg-[#10b981]" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#10b981]">
              YOUR DIRECT ORDERING WEBSITE
            </span>
          </div>

          {/* Section Headline */}
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12 text-balance">
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
                      <span className="font-playfair font-bold text-2xl text-slate-500 tabular-nums">
                        {item.step}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-playfair font-bold text-xl text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed font-dmsans">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Big CTA Button linking to https://the-plannerz-place.ridgewebstudio.com/ */}
          <div className="mt-12 flex justify-center">
            <a
              href="https://the-plannerz-place.ridgewebstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#10b981] hover:bg-[#0da371] text-[#080c14] font-bold text-base px-8 py-3.5 rounded-xl inline-flex items-center justify-center transition-all glow-emerald shadow-lg cursor-pointer active:scale-98"
            >
              See a Live Restaurant Demo
            </a>
          </div>

        </div>
      </section>

      {/* NEW: Video Showcase Section */}
      <section id="video-showcase" style={{ padding: '80px 24px', background: '#080c14', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(8,12,20,0) 70%)', zIndex: 0 }}></div>

        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Kicker */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{ width: '24px', height: '1px', background: '#10b981' }}></span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#10b981' }}>The 15-Second Walkthrough</span>
            <span style={{ width: '24px', height: '1px', background: '#10b981' }}></span>
          </div>

          {/* Headline */}
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#ffffff', marginBottom: '16px', lineHeight: 1.1 }}>See the Magic in 15 Seconds</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '18px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>Watch how a customer places an order and the kitchen ticket prints instantly. No DoorDash. No fees.</p>

          {/* Video Container */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#0f172a', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 0 60px rgba(16,185,129,0.15), 0 0 0 1px rgba(255,255,255,0.08)' }}>
            <video 
              src="https://res.cloudinary.com/yv51pkrh/video/upload/v1793629389/1102_1.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline 
              onLoadedMetadata={(e) => {
                e.currentTarget.currentTime = 0;
              }}
              onTimeUpdate={(e) => {
                const vid = e.currentTarget;
                if (vid.duration && vid.currentTime >= vid.duration - 0.1) {
                  vid.currentTime = 0;
                }
              }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              poster="https://i.ibb.co/4RCrTtgq/asset-1792214975663lqprujpso.jpg">
            </video>
          </div>

          {/* CTA below video */}
          <div style={{ marginTop: '40px' }}>
            <a href="#free-mockup" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#10b981', color: '#ffffff', fontFamily: "'DM Sans', sans-serif", fontSize: '16px', fontWeight: 700, padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(16,185,129,0.3)', transition: 'all 0.2s' }}>
              Get My Free Mockup →
            </a>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#64748b', marginTop: '16px' }}>This is the exact system your restaurant could have live in 48 hours.</p>
          </div>
        </div>
      </section>
    </>
  );
}
