'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { AuroraBackground } from '@/components/AuroraBackground'
import { ProfessionalFooter } from '@/components/ProfessionalFooter'
import { notFound } from 'next/navigation'

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

  if (!category) {
    notFound()
  }

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
              Indoor Design
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
              Premium <span className="font-bold bg-gradient-to-r from-brand-gold via-brand-gold to-white bg-clip-text text-transparent">{category.title}</span>
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
            <Link href="/indoor-design">
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
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group cursor-pointer"
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
                      Premium indoor design installation
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
    </AuroraBackground>
  )
}

