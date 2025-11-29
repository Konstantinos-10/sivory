"use client";

import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/AuroraBackground';
import { ProfessionalFooter } from '@/components/ProfessionalFooter';

export default function TermsOfServicePage() {
  return (
    <AuroraBackground className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-brand-gold text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-8">
            Legal
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
            Terms of <span className="font-bold bg-gradient-to-r from-brand-gold via-brand-gold to-white bg-clip-text text-transparent">Service</span>
          </h1>
          
          {/* Decorative line */}
          <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-8 w-32" />
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            Last updated: November 29, 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 space-y-8">
            
            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                1. <span className="font-bold text-brand-gold">Acceptance of Terms</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                By accessing and using Sivory Design's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                2. <span className="font-bold text-brand-gold">Services Description</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Sivory Design provides premium indoor and outdoor design services, including but not limited to:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 ml-6">
                <li>Custom pergola design and installation</li>
                <li>Indoor design solutions (blinds, curtains, wallpaper)</li>
                <li>Outdoor design solutions (awnings, umbrellas, wall coverings)</li>
                <li>Consultation and project management services</li>
              </ul>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                3. <span className="font-bold text-brand-gold">Project Agreement</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                All projects require:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 ml-6">
                <li>A signed contract outlining scope, timeline, and costs</li>
                <li>An initial deposit before work commences</li>
                <li>Final payment upon project completion</li>
                <li>Client approval at designated project milestones</li>
              </ul>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                4. <span className="font-bold text-brand-gold">Pricing and Payment</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                All prices are quoted in Euros unless otherwise stated. Payment terms:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 ml-6">
                <li>Quotes are valid for 30 days from the date of issue</li>
                <li>Deposit required: 50% of total project cost</li>
                <li>Final payment due upon completion and approval</li>
                <li>Late payments may incur additional charges</li>
                <li>Prices are subject to change based on material costs</li>
              </ul>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                5. <span className="font-bold text-brand-gold">Cancellation and Refunds</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Cancellation policy:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 ml-6">
                <li>Cancellations before work begins: Full refund minus 10% administrative fee</li>
                <li>Cancellations after work has started: No refund on deposit; client responsible for work completed</li>
                <li>Custom-ordered materials are non-refundable</li>
                <li>We reserve the right to cancel projects with full refund in extenuating circumstances</li>
              </ul>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                6. <span className="font-bold text-brand-gold">Warranties and Guarantees</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We stand behind our work:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 ml-6">
                <li>12-month warranty on workmanship</li>
                <li>Manufacturer warranties apply to materials and products</li>
                <li>Warranty does not cover damage from misuse or natural wear</li>
                <li>Regular maintenance is required to maintain warranty validity</li>
              </ul>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                7. <span className="font-bold text-brand-gold">Intellectual Property</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                All designs, plans, and creative work produced by Sivory Design remain our intellectual property until full payment is received. We reserve the right to use project photos for marketing purposes unless otherwise agreed in writing.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                8. <span className="font-bold text-brand-gold">Limitation of Liability</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                Sivory Design shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific project in question.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                9. <span className="font-bold text-brand-gold">Force Majeure</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                We are not responsible for delays or failures in performance resulting from acts beyond our reasonable control, including but not limited to natural disasters, war, terrorism, labor disputes, or government restrictions.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                10. <span className="font-bold text-brand-gold">Governing Law</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of Cyprus. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Cyprus.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                11. <span className="font-bold text-brand-gold">Changes to Terms</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of any changes.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                12. <span className="font-bold text-brand-gold">Contact Information</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-white/70">
                  <span className="text-brand-gold font-semibold">Email:</span> info@sivorydesign.com
                </p>
                <p className="text-white/70">
                  <span className="text-brand-gold font-semibold">Phone:</span> <a href="tel:+35799640720" className="hover:text-brand-gold transition-colors">+357 99640720</a>
                </p>
                <p className="text-white/70">
                  <span className="text-brand-gold font-semibold">Address:</span> Cyprus
                </p>
              </div>
            </section>

          </div>
        </motion.div>
      </div>

      {/* Professional Footer */}
      <ProfessionalFooter pageType="home" />
    </AuroraBackground>
  );
}

