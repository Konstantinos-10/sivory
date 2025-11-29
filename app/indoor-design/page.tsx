'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AuroraBackground } from '@/components/AuroraBackground'
import { ProfessionalFooter } from '@/components/ProfessionalFooter'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

export default function IndoorDesign() {
  const { t } = useI18n();
  const categories = [
    {
      id: 1,
      title: t('indoorDesign.categories.blinds.title'),
      slug: "blinds",
      description: t('indoorDesign.categories.blinds.description'),
      image: "/images/IndoorDesign/Blinds/33.png",
      projectCount: 3
    },
    {
      id: 2,
      title: t('indoorDesign.categories.curtains.title'),
      slug: "curtains",
      description: t('indoorDesign.categories.curtains.description'),
      image: "/images/IndoorDesign/curtains/30.png",
      projectCount: 3
    },
    {
      id: 3,
      title: t('indoorDesign.categories.wallpaper.title'),
      slug: "wallpaper",
      description: t('indoorDesign.categories.wallpaper.description'),
      image: "/images/IndoorDesign/wallpaper/27.png",
      projectCount: 3
    }
  ]

  return (
    <AuroraBackground className="min-h-screen">
      {/* Compact Page Header */}
      <section className="relative pt-32 md:pt-36 pb-12 md:pb-16 z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
              {t('indoorDesign.categories.title')} <span className="font-bold text-brand-gold">{t('indoorDesign.categories.titleHighlight')}</span>
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-6 w-24" />
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              {t('indoorDesign.categories.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="pb-24 relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={category.id} href={`/indoor-design/${category.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer h-full"
                >
                  {/* Premium Card Container */}
                  <div className="relative overflow-hidden rounded-2xl h-full flex flex-col bg-gradient-to-br from-gray-900/90 to-black/95 border border-white/10 shadow-xl group-hover:border-brand-gold/50 transition-all duration-500">
                    
                    {/* Image Section */}
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Dark gradient overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/90" />

                      {/* Premium shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1 p-6 flex flex-col">
                      {/* Category Title */}
                      <h3 className="text-2xl font-light text-white mb-3 tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                        {category.title}
                      </h3>
                      
                      {/* Decorative line */}
                      <div className="w-12 h-px bg-gradient-to-r from-brand-gold to-transparent mb-4 group-hover:w-24 transition-all duration-500" />
                      
                      {/* Description */}
                      <p className="text-white/70 leading-relaxed text-sm mb-6 flex-1">
                        {category.description}
                      </p>
                      
                      {/* CTA Button */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-brand-gold text-sm font-semibold tracking-wide uppercase group-hover:text-white transition-colors duration-300">
                          {t('indoorDesign.exploreCategory')}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-300">
                          <svg 
                            className="w-5 h-5 text-brand-gold group-hover:text-black group-hover:translate-x-1 transition-all duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Subtle hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/5 via-transparent to-transparent" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <ProfessionalFooter pageType="indoor" />
    </AuroraBackground>
  )
}
