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
  'blinds': {
    title: 'Blinds',
    description: 'Premium window blinds that combine functionality with elegant design. Our carefully curated collection offers perfect light control and privacy while adding a touch of sophistication to any interior space. Each installation is tailored to your specific needs and aesthetic preferences.',
    images: [
      '/images/IndoorDesign/Blinds/33.png',
      '/images/IndoorDesign/Blinds/34.png',
      '/images/IndoorDesign/Blinds/35.png',
    ]
  },
  'curtains': {
    title: 'Curtains',
    description: 'Luxurious curtain solutions that add warmth, texture, and sophistication to any room. From contemporary minimalist designs to classic elegant drapes, our curtain collection transforms windows into stunning focal points while providing optimal light control and privacy.',
    images: [
      '/images/IndoorDesign/curtains/30.png',
      '/images/IndoorDesign/curtains/31.png',
      '/images/IndoorDesign/curtains/32.png',
    ]
  },
  'wallpaper': {
    title: 'Wallpaper',
    description: 'Designer wallpapers that transform ordinary walls into extraordinary statements. Our collection features premium materials, intricate patterns, and stunning textures that add depth, character, and personality to your interior spaces. Each design is carefully selected to create lasting impressions.',
    images: [
      '/images/IndoorDesign/wallpaper/27.png',
      '/images/IndoorDesign/wallpaper/28.png',
      '/images/IndoorDesign/wallpaper/29.png',
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
    category: 'Indoor Design',
    description: 'Premium indoor design installation showcasing craftsmanship and attention to detail'
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
            <Link href="/indoor-design" className="hover:text-brand-gold transition-colors">
              Indoor Design
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
                  Indoor Design
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 tracking-tight"
              >
                Premium <span className="font-bold text-brand-gold">{category.title}</span>
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
              Ready to Transform Your <span className="font-bold text-brand-gold">Interior Space?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Let's discuss your project and bring your indoor design vision to life
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
      <ProfessionalFooter pageType="indoor" />

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

