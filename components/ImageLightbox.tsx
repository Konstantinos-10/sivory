'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface ImageData {
  src: string
  title: string
  category?: string
  description?: string
}

interface ImageLightboxProps {
  images: ImageData[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export const ImageLightbox = ({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNavigate 
}: ImageLightboxProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const currentImage = images[currentIndex]

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') handlePrevious()
      if (e.key === 'ArrowRight') handleNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, currentIndex])

  useEffect(() => {
    setImageLoaded(false)
  }, [currentIndex])

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen || !currentImage) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        onClick={handleBackdropClick}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
          
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 group"
          >
            <svg 
              className="w-6 h-6 text-white group-hover:text-black transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Image Counter */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-4 left-4 md:top-8 md:left-8 z-20 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span className="text-white font-semibold text-sm">
              {currentIndex + 1} / {images.length}
            </span>
          </motion.div>

          {/* Main Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-7xl h-full max-h-[70vh] flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={currentImage.src}
                alt={currentImage.title}
                fill
                className="object-contain"
                onLoad={() => setImageLoaded(true)}
                priority
              />
              
              {/* Loading Spinner */}
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-brand-gold/30 border-t-brand-gold rounded-full animate-spin" />
                </div>
              )}
            </div>
          </motion.div>

          {/* Image Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-center max-w-3xl"
          >
            {currentImage.category && (
              <div className="text-brand-gold text-sm font-semibold mb-2 tracking-wide uppercase">
                {currentImage.category}
              </div>
            )}
            <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
              {currentImage.title}
            </h3>
            {currentImage.description && (
              <p className="text-white/70 text-base leading-relaxed">
                {currentImage.description}
              </p>
            )}
          </motion.div>

          {/* Navigation Arrows */}
          {currentIndex > 0 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={handlePrevious}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 group"
            >
              <svg 
                className="w-6 h-6 text-white group-hover:text-black transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          )}

          {currentIndex < images.length - 1 && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 group"
            >
              <svg 
                className="w-6 h-6 text-white group-hover:text-black transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          )}

          {/* Mobile Swipe Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span className="text-white/60 text-xs font-medium">Swipe to navigate</span>
              <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

