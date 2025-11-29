"use client";

import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/AuroraBackground';
import { useI18n } from '@/lib/i18n';

export default function AboutPage() {
  const { t } = useI18n();
  
  return (
    <AuroraBackground className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="text-brand-gold text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-8">
            {t("about.ourStory")}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
            {t("about.title")} <span className="font-bold bg-gradient-to-r from-brand-gold via-brand-gold to-white bg-clip-text text-transparent">{t("about.titleHighlight")}</span>
          </h1>
          
          {/* Decorative line */}
          <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-12 w-32" />
          
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            {t("about.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 items-start mb-24"
        >
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-tight">
              {t("about.journey.title")} <span className="font-bold text-brand-gold">{t("about.journey.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {t("about.journey.paragraph1")}
            </p>
            <p className="text-lg text-white/70 mb-12 leading-relaxed">
              {t("about.journey.paragraph2")}
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="text-center p-8 bg-white/8 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-brand-gold/40 transition-all duration-500 group"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-brand-gold mb-3 group-hover:text-white transition-colors duration-300">15+</h3>
                <p className="text-white/70 font-medium text-lg group-hover:text-white/90 transition-colors duration-300">{t("about.stats.yearsExperience")}</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="text-center p-8 bg-white/8 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-brand-gold/40 transition-all duration-500 group"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-brand-gold mb-3 group-hover:text-white transition-colors duration-300">500+</h3>
                <p className="text-white/70 font-medium text-lg group-hover:text-white/90 transition-colors duration-300">{t("about.stats.projectsCompleted")}</p>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white/8 backdrop-blur-xl border border-brand-gold/20 rounded-3xl p-12 min-h-[500px] flex items-center justify-center relative overflow-hidden group"
          >
            {/* Quote background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-brand-gold/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            <div className="relative z-10 text-center">
              <div className="text-brand-gold/60 text-8xl mb-6 leading-none">"</div>
              <p className="text-white/90 text-xl md:text-2xl font-light italic leading-relaxed mb-8">
                {t("about.quote")}
              </p>
              <div className="text-brand-gold/60 text-8xl rotate-180 leading-none">"</div>
              <div className="mt-8">
                <p className="text-brand-gold font-semibold text-lg">{t("about.quoteAuthor")}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Mission & Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-tight">
            {t("about.values.title")} <span className="font-bold text-brand-gold">{t("about.values.titleHighlight")}</span>
          </h2>
          
          <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-16 w-24" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t("about.values.qualityCraftsmanship.title"),
                description: t("about.values.qualityCraftsmanship.description")
              },
              {
                title: t("about.values.innovation.title"),
                description: t("about.values.innovation.description")
              },
              {
                title: t("about.values.clientPartnership.title"),
                description: t("about.values.clientPartnership.description")
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-brand-gold/30 transition-all duration-500 group"
              >
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-brand-gold transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
