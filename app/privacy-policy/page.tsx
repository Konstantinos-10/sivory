"use client";

import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/AuroraBackground';
import { ProfessionalFooter } from '@/components/ProfessionalFooter';

export default function PrivacyPolicyPage() {
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
            Privacy <span className="font-bold bg-gradient-to-r from-brand-gold via-brand-gold to-white bg-clip-text text-transparent">Policy</span>
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
                1. <span className="font-bold text-brand-gold">Information We Collect</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 ml-6">
                <li>Name and contact information (email, phone number)</li>
                <li>Project details and preferences</li>
                <li>Communication history with our team</li>
                <li>Payment and billing information</li>
              </ul>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                2. <span className="font-bold text-brand-gold">How We Use Your Information</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 ml-6">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and complete your design projects</li>
                <li>Send you quotes, updates, and project information</li>
                <li>Respond to your comments and questions</li>
                <li>Communicate with you about products, services, and events</li>
              </ul>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                3. <span className="font-bold text-brand-gold">Information Sharing</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 ml-6">
                <li>With your consent</li>
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
              </ul>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                4. <span className="font-bold text-brand-gold">Data Security</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                5. <span className="font-bold text-brand-gold">Cookies and Tracking</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                We use cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookies through your browser settings.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                6. <span className="font-bold text-brand-gold">Your Rights</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 ml-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                7. <span className="font-bold text-brand-gold">Children's Privacy</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                Our services are not directed to children under 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                8. <span className="font-bold text-brand-gold">Changes to This Policy</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                9. <span className="font-bold text-brand-gold">Contact Us</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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

