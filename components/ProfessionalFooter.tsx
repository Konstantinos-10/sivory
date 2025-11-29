'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

interface ProfessionalFooterProps {
  pageType: 'outdoor' | 'indoor' | 'home'
}

export const ProfessionalFooter = ({ pageType }: ProfessionalFooterProps) => {
  const { t } = useI18n();
  const isOutdoor = pageType === 'outdoor'
  const isHome = pageType === 'home'
  
  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/10 via-transparent to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-gray/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Main CTA Section - Hidden on home page since we have ContactFormSection */}
        {!isHome && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="py-24 relative"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-brand-gold/10 backdrop-blur-sm border border-brand-gold/20 rounded-full mb-8"
              >
                <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
                <span className="text-brand-gold text-sm font-medium tracking-wide uppercase">
                  {t('footer.readyToStart')}
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
                {t('footer.transform.title')}{' '}
                <span className="font-bold bg-gradient-to-r from-brand-gold via-brand-gold to-white bg-clip-text text-transparent">
                  {isOutdoor ? t('footer.transform.outdoor') : t('footer.transform.indoor')}
                </span>
              </h2>
              
              <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-8 w-32" />
              
              <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                {isOutdoor 
                  ? t('footer.outdoorDescription')
                  : t('footer.indoorDescription')
                }
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-flex items-center px-12 py-5 bg-gradient-to-r from-brand-gold via-brand-gold to-brand-gold/80 text-black font-bold rounded-full shadow-2xl hover:shadow-brand-gold/30 transition-all duration-300 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                    <span className="relative z-10 flex items-center gap-3">
                      {t('footer.getFreeQuote')}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </motion.button>
                </Link>

                <a href="tel:+35799640720">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-flex items-center px-12 py-5 border-2 border-brand-gold/60 text-white font-semibold rounded-full hover:bg-brand-gold hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/8 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {t('footer.callNow')}
                    </span>
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </motion.section>
        )}

        {/* Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-brand-gold/80 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Sivory Design</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                    {t('footer.companyDescription')}
                  </p>
                  
                  {/* Social Media Links */}
                  <div className="flex gap-4">
                    {/* Instagram */}
                    <motion.a
                      href="https://www.instagram.com/s.ivorydesigns/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 text-white/70 group-hover:text-brand-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </motion.a>

                    {/* Facebook - Placeholder (you can add link later) */}
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300 group opacity-50 cursor-not-allowed"
                      onClick={(e) => e.preventDefault()}
                    >
                      <svg className="w-5 h-5 text-white/70 group-hover:text-brand-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </motion.a>

                    {/* LinkedIn - Placeholder (you can add link later) */}
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300 group opacity-50 cursor-not-allowed"
                      onClick={(e) => e.preventDefault()}
                    >
                      <svg className="w-5 h-5 text-white/70 group-hover:text-brand-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Quick Links */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-6">{t('footer.quickLinks')}</h4>
                  <ul className="space-y-4">
                    {[
                      { name: t('nav.home'), href: '/' },
                      { name: t('nav.outdoorDesign'), href: '/outdoor-design' },
                      { name: t('nav.indoorDesign'), href: '/indoor-design' },
                      { name: t('nav.about'), href: '/about' },
                      { name: t('nav.contact'), href: '/contact' },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link 
                          href={link.href}
                          className="text-white/70 hover:text-brand-gold transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Contact Info */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-6">{t('footer.getInTouch')}</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 text-brand-gold">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">{t('footer.phone')}</p>
                        <a href="tel:+35799640720" className="text-white font-medium hover:text-brand-gold transition-colors">+357 99640720</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 text-brand-gold">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">{t('footer.email')}</p>
                        <p className="text-white font-medium">info@sivorydesign.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 text-brand-gold">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">{t('footer.location')}</p>
                        <p className="text-white font-medium">Your City, State</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="border-t border-white/10 py-8"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/60 text-sm">
                  {t('footer.copyright')}
                </p>
                <div className="flex gap-6 text-sm">
                  <Link href="/privacy-policy" className="text-white/60 hover:text-brand-gold transition-colors duration-300">
                    {t('footer.privacyPolicy')}
                  </Link>
                  <Link href="/terms-of-service" className="text-white/60 hover:text-brand-gold transition-colors duration-300">
                    {t('footer.termsOfService')}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
