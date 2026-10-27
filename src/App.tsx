/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { FreeMockupFunnel } from './components/FreeMockupFunnel';
import { PricingGrid } from './components/PricingGrid';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-emerald-500 selection:text-slate-950 flex flex-col font-dmsans">
      {/* Sticky Navigation Header with Claim Offer -> #pricing */}
      <Header onClaimOffer={scrollToPricing} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section with Interactive 3-Tab Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Hero onClaimOffer={scrollToPricing} />
        </motion.div>

        {/* Problem / Solution Section (4 Red X's vs 4 Green Checks + DoorDash Fee Chart) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProblemSolutionSection />
        </motion.div>

        {/* How It Works (3 Simple Steps) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <HowItWorks />
        </motion.div>

        {/* Light Contrast Section: 48h Free Mockup Lead Funnel (bg-stone-50) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <FreeMockupFunnel />
        </motion.div>

        {/* 3-Tier Pricing Grid (#pricing) with White Growth Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <PricingGrid />
        </motion.div>

        {/* Social Proof & About Yoseph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <SocialProof />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
