/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { OfferSection } from './components/OfferSection';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToOffer = () => {
    const el = document.getElementById('offer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-emerald-500 selection:text-slate-950 flex flex-col font-inter">
      {/* Sticky Navigation Header */}
      <Header onClaimOffer={scrollToOffer} />

      {/* Main Landing Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Hero onClaimOffer={scrollToOffer} />
        </motion.div>

        {/* The Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProblemSection />
        </motion.div>

        {/* How It Works (3 Simple Steps) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <HowItWorks />
        </motion.div>

        {/* Founding Client Offer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <OfferSection />
        </motion.div>

        {/* Social Proof & About Yoseph */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SocialProof />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
