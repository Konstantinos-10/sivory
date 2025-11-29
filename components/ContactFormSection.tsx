"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useI18n } from '@/lib/i18n';

const ContactFormSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useI18n();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: 'outdoor'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call later)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          projectType: 'outdoor'
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="contact-form"
      ref={ref} 
      className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-gold/10 opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-gold/10 backdrop-blur-sm border border-brand-gold/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
              <span className="text-brand-gold text-sm font-medium tracking-wide uppercase">
                {t('contact.badge')}
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
              {t('contact.title')}{' '}
              <span className="font-bold bg-gradient-to-r from-brand-gold via-brand-gold to-white bg-clip-text text-transparent">
                {t('contact.titleHighlight')}
              </span>
            </h2>
            
            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-8 w-32" />
            
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              {t('contact.description')}
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="max-w-3xl mx-auto"
          >
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
              {/* Glowing corners */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/90 font-medium mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-gold/50 focus:bg-white/15 transition-all duration-300"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/90 font-medium mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-gold/50 focus:bg-white/15 transition-all duration-300"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                {/* Phone and Project Type Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white/90 font-medium mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-gold/50 focus:bg-white/15 transition-all duration-300"
                      placeholder={t('contact.form.phonePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-white/90 font-medium mb-2">
                      {t('contact.form.projectType')}
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-brand-gold/50 focus:bg-white/15 transition-all duration-300 cursor-pointer"
                    >
                      <option value="outdoor" className="bg-gray-900">{t('contact.form.outdoor')}</option>
                      <option value="indoor" className="bg-gray-900">{t('contact.form.indoor')}</option>
                      <option value="both" className="bg-gray-900">{t('contact.form.both')}</option>
                      <option value="consultation" className="bg-gray-900">{t('contact.form.consultation')}</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white/90 font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-gold/50 focus:bg-white/15 transition-all duration-300 resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-5 rounded-xl font-bold text-lg transition-all duration-300 relative overflow-hidden group ${
                    submitStatus === 'success'
                      ? 'bg-green-600 text-white'
                      : isSubmitting
                      ? 'bg-brand-gold/50 text-white/50 cursor-not-allowed'
                      : 'bg-gradient-to-r from-brand-gold via-brand-gold to-brand-gold/80 text-black hover:shadow-2xl hover:shadow-brand-gold/30'
                  }`}
                >
                  {/* Button shimmer effect */}
                  {!isSubmitting && submitStatus !== 'success' && (
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  )}

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('contact.form.sending')}
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {t('contact.form.success')}
                      </>
                    ) : (
                      <>
                        {t('contact.form.submit')}
                        <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Privacy Note */}
                <p className="text-white/50 text-sm text-center mt-4">
                  {t('contact.form.privacy')}
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {/* Phone */}
            <motion.a
              href="tel:+35799640720"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-gold/40 transition-all duration-300 text-center cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-gold/10 rounded-full mb-4 group-hover:bg-brand-gold/20 transition-colors">
                <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">{t('footer.phone')}</h3>
              <p className="text-white/70 text-sm">+357 99640720</p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@sivorydesign.com"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-gold/40 transition-all duration-300 text-center cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-gold/10 rounded-full mb-4 group-hover:bg-brand-gold/20 transition-colors">
                <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">{t('footer.email')}</h3>
              <p className="text-white/70 text-sm">info@sivorydesign.com</p>
            </motion.a>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-gold/40 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-gold/10 rounded-full mb-4 group-hover:bg-brand-gold/20 transition-colors">
                <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">{t('footer.location')}</h3>
              <p className="text-white/70 text-sm">Athens, Greece</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;

