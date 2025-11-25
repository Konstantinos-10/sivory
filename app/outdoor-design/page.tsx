'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AuroraBackground } from '@/components/AuroraBackground'
import { ProfessionalFooter } from '@/components/ProfessionalFooter'
import Image from 'next/image'

export default function OutdoorDesign() {
  const categories = [
    {
      id: 1,
      title: "Awning Pergola",
      slug: "awning-pergola",
      description: "Contemporary pergolas and awning systems for elegant outdoor shade solutions",
      image: "/images/OutdoorDesign/Awning Pergola/tentopergolas_skiasis 1.png",
      projectCount: 6
    },
    {
      id: 2,
      title: "Outdoor Wall Covering",
      slug: "outdoor-wall-covering",
      description: "Premium wall coverings designed for exterior spaces with style and durability",
      image: "/images/OutdoorDesign/Outdoor Wall Covering/tapetsaries eksoterikou xorou 1.png",
      projectCount: 4
    },
    {
      id: 3,
      title: "Perforated Fabrics",
      slug: "perforated-fabrics",
      description: "Innovative perforated fabric solutions for light control and privacy",
      image: "/images/OutdoorDesign/Perforated Fabrics/Photos SIvory (1280 x 1920 px)/Diatrita Pania 1.png",
      projectCount: 7
    },
    {
      id: 4,
      title: "Umbrellas",
      slug: "umbrellas",
      description: "Luxury outdoor umbrellas combining functionality with sophisticated design",
      image: "/images/OutdoorDesign/Umbrellas/omprelles_skiasis 1.png",
      projectCount: 5
    },
    {
      id: 5,
      title: "Vertical Awnings",
      slug: "vertical-awnings",
      description: "Modern vertical awning systems for optimal sun protection and aesthetics",
      image: "/images/OutdoorDesign/Vertical Awnings/kathetes_pergoles 1.png",
      projectCount: 4
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
              Outdoor Design Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
              Outdoor <span className="font-bold bg-gradient-to-r from-brand-gold via-brand-gold to-white bg-clip-text text-transparent">Excellence</span>
            </h1>
            
            {/* Decorative line */}
            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-12 w-32" />
            
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
              Transforming outdoor spaces with premium pergolas, shade solutions, and complete outdoor living experiences that redefine luxury.
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
              Outdoor <span className="font-bold text-brand-gold">Categories</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-8 w-24" />
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive range of outdoor design solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={category.id} href={`/outdoor-design/${category.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10 hover:border-brand-gold/40 transition-all duration-500 bg-black/20 backdrop-blur-sm">
                    <div className="relative w-full h-80">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                    
                    {/* Category Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-brand-gold text-xs font-semibold mb-2 tracking-wide uppercase">
                        {category.projectCount} Projects
                      </div>
                      <h3 className="text-xl md:text-2xl font-light mb-3 group-hover:text-brand-gold transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed text-sm">
                        {category.description}
                      </p>
                      
                      {/* View Projects Arrow */}
                      <div className="flex items-center gap-2 mt-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-semibold">View Projects</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/30 via-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Glass morphism overlay */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <ProfessionalFooter pageType="outdoor" />
    </AuroraBackground>
  )
}
