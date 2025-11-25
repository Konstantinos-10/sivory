'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AuroraBackground } from '@/components/AuroraBackground'
import { ProfessionalFooter } from '@/components/ProfessionalFooter'
import Image from 'next/image'

export default function IndoorDesign() {
  const categories = [
    {
      id: 1,
      title: "Blinds",
      slug: "blinds",
      description: "Premium window blinds that combine functionality with elegant design for perfect light control and privacy",
      image: "/images/IndoorDesign/Blinds/33.png",
      projectCount: 3
    },
    {
      id: 2,
      title: "Curtains",
      slug: "curtains",
      description: "Luxurious curtain solutions that add sophistication and warmth to any interior space",
      image: "/images/IndoorDesign/curtains/30.png",
      projectCount: 3
    },
    {
      id: 3,
      title: "Wallpaper",
      slug: "wallpaper",
      description: "Designer wallpapers that transform walls into stunning focal points with texture and style",
      image: "/images/IndoorDesign/wallpaper/27.png",
      projectCount: 3
    }
  ]

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
              Indoor Design Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
              Interior <span className="font-bold bg-gradient-to-r from-brand-gold via-brand-gold to-white bg-clip-text text-transparent">Excellence</span>
            </h1>
            
            {/* Decorative line */}
            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-12 w-32" />
            
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
              Creating sophisticated indoor environments with custom pergola structures and architectural elements that transform spaces into works of art.
            </p>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center mb-16"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 border-2 border-brand-gold/60 text-white font-semibold rounded-full hover:bg-brand-gold hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/8 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Grid */}
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
              Indoor <span className="font-bold text-brand-gold">Categories</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-8 w-24" />
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive range of indoor design solutions
            </p>
          </motion.div>
          
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
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 px-4 py-2 bg-black/60 backdrop-blur-md border border-brand-gold/30 rounded-full">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                          <span className="text-brand-gold text-xs font-bold tracking-wider uppercase">
                            {category.projectCount} Projects
                          </span>
                        </div>
                      </div>

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
                          Explore Category
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
