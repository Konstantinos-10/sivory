'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import enMessages from '@/messages/en.json'
import elMessages from '@/messages/el.json'

type Locale = 'en' | 'el'
type Messages = typeof enMessages

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  messages: Messages
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const messagesMap = {
  en: enMessages,
  el: elMessages,
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get saved locale from localStorage or default to 'en'
    const savedLocale = localStorage.getItem('locale') as Locale | null
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'el')) {
      setLocaleState(savedLocale)
    }
    setMounted(true)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (mounted) {
      localStorage.setItem('locale', newLocale)
    }
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = messagesMap[locale]
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        console.warn(`Translation key "${key}" not found for locale "${locale}"`)
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  // Always provide the context, even before mounted to prevent errors
  // The locale will update once mounted and localStorage is read
  return (
    <I18nContext.Provider value={{ locale, setLocale, t, messages: messagesMap[locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

