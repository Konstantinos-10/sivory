'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AuroraBackground } from '@/components/AuroraBackground'
import { ProfessionalFooter } from '@/components/ProfessionalFooter'
import { ImageLightbox } from '@/components/ImageLightbox'
import { ProjectCarousel } from '@/components/ProjectCarousel'
import { notFound } from 'next/navigation'
import { useState } from 'react'

// Category data with their respective images
const categoryData: Record<string, {
  title: string
  description: string
  images: string[]
}> = {
  'awning-pergola': {
    title: 'Awning Pergola',
    description: 'Contemporary pergolas and awning systems that combine functionality with elegant design. Our premium installations provide perfect shade solutions while enhancing your outdoor living spaces.',
    images: [
      '/images/OutdoorDesign/Awning Pergola/tentopergolas_skiasis 1.png',
      '/images/OutdoorDesign/Awning Pergola/tentopergolas_skiasis 2.png',
      '/images/OutdoorDesign/Awning Pergola/tentopergolas_skiasis 3.png',
      '/images/OutdoorDesign/Awning Pergola/tentopergolas_skiasis 4.png',
      '/images/OutdoorDesign/Awning Pergola/tentopergolas_skiasis 5.png',
      '/images/OutdoorDesign/Awning Pergola/tentopergolas_skiasis 6.png',
    ]
  },
  'outdoor-wall-covering': {
    title: 'Outdoor Wall Covering',
    description: 'Premium wall coverings specifically designed for exterior spaces. Weather-resistant materials meet sophisticated aesthetics to transform your outdoor walls into stunning design statements.',
    images: [
      '/images/OutdoorDesign/Outdoor Wall Covering/tapetsaries eksoterikou xorou 1.png',
      '/images/OutdoorDesign/Outdoor Wall Covering/tapetsaries eksoterikou xorou 2.png',
      '/images/OutdoorDesign/Outdoor Wall Covering/tapetsaries eksoterikou xorou 3.png',
      '/images/OutdoorDesign/Outdoor Wall Covering/tapetsaries eksoterikou xorou 4.png',
    ]
  },
  'perforated-fabrics': {
    title: 'Perforated Fabrics',
    description: 'Innovative perforated fabric solutions that masterfully balance light control, ventilation, and privacy. Perfect for creating comfortable outdoor spaces with optimal sun protection.',
    images: [
      '/images/OutdoorDesign/Perforated Fabrics/Photos SIvory (1280 x 1920 px)/Diatrita Pania 1.png',
      '/images/OutdoorDesign/Perforated Fabrics/Photos SIvory (1280 x 1920 px)/Diatrita Pania 2.png',
      '/images/OutdoorDesign/Perforated Fabrics/Photos SIvory (1280 x 1920 px)/Diatrita Pania 3.png',
      '/images/OutdoorDesign/Perforated Fabrics/Photos SIvory (1280 x 1920 px)/Diatrita Pania 4.png',
      '/images/OutdoorDesign/Perforated Fabrics/Photos SIvory (1280 x 1920 px)/Diatrita Pania 5.png',
      '/images/OutdoorDesign/Perforated Fabrics/Photos SIvory (1280 x 1920 px)/Diatrita Pania 6.png',
      '/images/OutdoorDesign/Perforated Fabrics/Photos SIvory (1280 x 1920 px)/Diatrita Pania 7.png',
    ]
  },
  'umbrellas': {
    title: 'Umbrellas',
    description: 'Luxury outdoor umbrellas that blend superior functionality with sophisticated design. Premium materials and engineering ensure both style and durability for your outdoor spaces.',
    images: [
      '/images/OutdoorDesign/Umbrellas/omprelles_skiasis 1.png',
      '/images/OutdoorDesign/Umbrellas/omprelles_skiasis 2.png',
      '/images/OutdoorDesign/Umbrellas/omprelles_skiasis 3.png',
      '/images/OutdoorDesign/Umbrellas/omprelles_skiasis 4.png',
      '/images/OutdoorDesign/Umbrellas/omprelles_skiasis 5.png',
    ]
  },
  'vertical-awnings': {
    title: 'Vertical Awnings',
    description: 'Modern vertical awning systems designed for optimal sun protection and aesthetic appeal. Smart solutions that enhance privacy while maintaining your views and outdoor comfort.',
    images: [
      '/images/OutdoorDesign/Vertical Awnings/kathetes_pergoles 1.png',
      '/images/OutdoorDesign/Vertical Awnings/kathetes_pergoles 2.png',
      '/images/OutdoorDesign/Vertical Awnings/kathetes_pergoles 3.png',
      '/images/OutdoorDesign/Vertical Awnings/kathetes_pergoles 4.png',
    ]
  },
}

interface CategoryPageProps {
  params: {
    'category-slug': string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params['category-slug']
  const category = categoryData[categorySlug]

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  if (!category) {
    notFound()
  }

  const lightboxImages = category.images.map((image, index) => ({
    src: image,
    title: `${category.title} Project ${index + 1}`,
    category: 'Outdoor Design',
    description: 'Premium outdoor design installation showcasing craftsmanship and attention to detail'
  }))

  return (
    <AuroraBackground className="min-h-screen">
      {/* Compact Header with Breadcrumb */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative pt-28 md:pt-32 pb-12 z-10 w-full"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
          >
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/outdoor-design" className="hover:text-brand-gold transition-colors">
              Outdoor Design
            </Link>
            <span>/</span>
            <span className="text-white/90">{category.title}</span>
          </motion.nav>

          {/* Compact Title Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full mb-4"
              >
                <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-brand-gold text-xs font-semibold tracking-wider uppercase">
                  Outdoor Design
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 tracking-tight"
              >
                {category.title.split(' ')[0]} <span className="font-bold text-brand-gold">{category.title.split(' ').slice(1).join(' ')}</span>
              </motion.h1>

              {/* Short Description */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white/70 text-lg max-w-2xl"
              >
                {category.images.length} stunning installations showcasing craftsmanship and design excellence
              </motion.p>
            </div>

            {/* Optional: Quick Action */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex-shrink-0"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-brand-gold text-black font-semibold rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                >
                  Get a Quote
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Carousel - Starts Immediately */}
      <section className="pb-24 relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <ProjectCarousel
              images={category.images}
              categoryTitle={category.title}
              onImageClick={(index) => {
                setLightboxIndex(index)
                setLightboxOpen(true)
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-gold/10 via-black/40 to-brand-gold/5 backdrop-blur-sm rounded-3xl p-12 border border-brand-gold/20"
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Ready to Transform Your <span className="font-bold text-brand-gold">Outdoor Space?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Let's discuss your project and bring your outdoor design vision to life
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-brand-gold text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-brand-gold/50 text-lg"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Professional Footer */}
      <ProfessionalFooter pageType="outdoor" />

      {/* Image Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </AuroraBackground>
  )
}

