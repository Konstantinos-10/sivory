'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { useState, useRef, useEffect } from 'react'

export function LanguageToggle({ scrollStage = 0 }: { scrollStage?: number }) {
  const { locale, setLocale } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇬🇧' },
    { code: 'el' as const, name: 'Ελληνικά', flag: '🇬🇷' },
  ]

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative flex items-center gap-2 px-4 py-2 rounded-full",
          "bg-white/5 backdrop-blur-sm border border-white/10",
          "hover:bg-white/10 hover:border-brand-gold/30",
          "transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-brand-gold/50",
          "text-white hover:text-brand-gold",
          scrollStage >= 2 && "border-brand-gold/20"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: scrollStage >= 3 ? 0.9 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-gold/10 to-transparent opacity-0"
          animate={{
            opacity: isOpen ? 0.3 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
        
        <span className="relative z-10 text-lg">{currentLanguage.flag}</span>
        <span className="relative z-10 text-sm font-medium hidden sm:inline-block">
          {currentLanguage.code.toUpperCase()}
        </span>
        
        {/* Dropdown arrow */}
        <motion.svg
          className="relative z-10 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute right-0 top-full mt-2 z-50 min-w-[160px]"
            >
              <div className="bg-black/95 backdrop-blur-xl border border-brand-gold/20 rounded-2xl shadow-2xl overflow-hidden">
                {languages.map((language, index) => (
                  <motion.button
                    key={language.code}
                    onClick={() => {
                      setLocale(language.code)
                      setIsOpen(false)
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-left",
                      "hover:bg-white/5 transition-colors duration-200",
                      "text-white hover:text-brand-gold",
                      locale === language.code && "bg-brand-gold/10 text-brand-gold"
                    )}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-xl">{language.flag}</span>
                    <span className="text-sm font-medium">{language.name}</span>
                    {locale === language.code && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto w-2 h-2 rounded-full bg-brand-gold"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

