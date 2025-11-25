'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { AuroraBackground } from '@/components/AuroraBackground'
import { ProfessionalFooter } from '@/components/ProfessionalFooter'
import { ImageLightbox } from '@/components/ImageLightbox'
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
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-32 pb-20 md:pt-40 md:pb-24 z-10 w-full"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="text-brand-gold text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-8">
              Outdoor Design
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
              {category.title.split(' ')[0]} <span className="font-bold bg-gradient-to-r from-brand-gold via-brand-gold to-white bg-clip-text text-transparent">{category.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            {/* Decorative line */}
            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-12 w-32" />
            
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
              {category.description}
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Link href="/outdoor-design">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 border-2 border-brand-gold/60 text-white font-semibold rounded-full hover:bg-brand-gold hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/8 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Categories
              </motion.button>
            </Link>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-white/5 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Gallery */}
      <section className="py-24 relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
              Our <span className="font-bold text-brand-gold">Projects</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-8 w-24" />
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              {category.images.length} stunning {category.title.toLowerCase()} installations
            </p>
          </motion.div>
          
          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => {
                  setLightboxIndex(index)
                  setLightboxOpen(true)
                }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10 hover:border-brand-gold/40 transition-all duration-500 bg-black/20 backdrop-blur-sm">
                  <div className="relative w-full h-96">
                    <Image
                      src={image}
                      alt={`${category.title} project ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Project Number */}
                  <div className="absolute top-4 right-4 bg-brand-gold/90 backdrop-blur-sm text-black font-bold text-sm px-4 py-2 rounded-full">
                    #{index + 1}
                  </div>
                  
                  {/* Hover Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-light mb-2">
                      {category.title} <span className="font-bold text-brand-gold">Project</span>
                    </h3>
                    <p className="text-white/80 text-sm">
                      Premium outdoor design installation
                    </p>
                  </div>

                  {/* Glass morphism overlay */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
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

