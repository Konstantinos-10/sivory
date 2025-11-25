'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'gr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('sivory-language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'gr')) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('sivory-language', lang)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

// Translations
const translations = {
  en: {
    nav: {
      home: 'Home',
      indoorDesign: 'Indoor Design',
      outdoorDesign: 'Outdoor Design',
      about: 'About',
      contact: 'Contact'
    },
    home: {
      hero: {
        subtitle: 'pergolas crafted',
        title: 'to perfection',
        description: 'Transform your outdoor space with bespoke pergolas designed with precision, built with passion, and crafted to stand the test of time.',
        exploreWork: 'Explore Our Work'
      },
      outdoorCard: {
        title: 'Outdoor Design',
        description: 'Premium pergolas, shade solutions, and complete outdoor living experiences'
      },
      indoorCard: {
        title: 'Indoor Design',
        description: 'Sophisticated indoor environments with custom architectural elements'
      },
      portfolio: {
        title: 'Crafted',
        titleBold: 'Excellence',
        subtitle: 'Every pergola tells a story of precision and passion'
      }
    },
    outdoor: {
      hero: {
        badge: 'Outdoor Design Portfolio',
        title: 'Outdoor',
        titleBold: 'Excellence',
        description: 'Transforming outdoor spaces with premium pergolas, shade solutions, and complete outdoor living experiences that redefine luxury.'
      },
      categories: {
        title: 'Outdoor',
        titleBold: 'Categories',
        subtitle: 'Explore our comprehensive range of outdoor design solutions'
      },
      awningPergola: {
        title: 'Awning Pergola',
        description: 'Contemporary pergolas and awning systems for elegant outdoor shade solutions'
      },
      outdoorWallCovering: {
        title: 'Outdoor Wall Covering',
        description: 'Premium wall coverings designed for exterior spaces with style and durability'
      },
      perforatedFabrics: {
        title: 'Perforated Fabrics',
        description: 'Innovative perforated fabric solutions for light control and privacy'
      },
      umbrellas: {
        title: 'Umbrellas',
        description: 'Luxury outdoor umbrellas combining functionality with sophisticated design'
      },
      verticalAwnings: {
        title: 'Vertical Awnings',
        description: 'Modern vertical awning systems for optimal sun protection and aesthetics'
      }
    },
    indoor: {
      hero: {
        badge: 'Indoor Design Portfolio',
        title: 'Interior',
        titleBold: 'Excellence',
        description: 'Creating sophisticated indoor environments with custom pergola structures and architectural elements that transform spaces into works of art.'
      },
      categories: {
        title: 'Indoor',
        titleBold: 'Categories',
        subtitle: 'Explore our comprehensive range of indoor design solutions'
      },
      blinds: {
        title: 'Blinds',
        description: 'Premium window blinds that combine functionality with elegant design for perfect light control and privacy'
      },
      curtains: {
        title: 'Curtains',
        description: 'Luxurious curtain solutions that add sophistication and warmth to any interior space'
      },
      wallpaper: {
        title: 'Wallpaper',
        description: 'Designer wallpapers that transform walls into stunning focal points with texture and style'
      }
    },
    common: {
      backToHome: 'Back to Home',
      backToCategories: 'Back to Categories',
      exploreCategory: 'Explore Category',
      projects: 'Projects',
      ourProjects: 'Our Projects',
      stunningInstallations: 'stunning installations',
      getInTouch: 'Get in Touch',
      transformSpace: 'Ready to Transform Your Space?',
      outdoorTransform: 'Ready to Transform Your Outdoor Space?',
      indoorTransform: 'Ready to Transform Your Interior Space?',
      discussProject: "Let's discuss your project and bring your outdoor design vision to life",
      discussIndoorProject: "Let's discuss your project and bring your indoor design vision to life",
      premiumInstallation: 'Premium design installation showcasing craftsmanship and attention to detail',
      project: 'Project'
    },
    services: {
      badge: 'Our Services',
      title: 'Crafting Excellence in',
      titleBold: 'Every Detail',
      description: 'From initial concept to final installation, we provide comprehensive pergola solutions that transform outdoor spaces into luxurious retreats.'
    }
  },
  gr: {
    nav: {
      home: 'Αρχική',
      indoorDesign: 'Εσωτερικός Σχεδιασμός',
      outdoorDesign: 'Εξωτερικός Σχεδιασμός',
      about: 'Σχετικά',
      contact: 'Επικοινωνία'
    },
    home: {
      hero: {
        subtitle: 'πέργκολες κατασκευασμένες',
        title: 'προς την τελειότητα',
        description: 'Μεταμορφώστε τον εξωτερικό σας χώρο με κατά παραγγελία πέργκολες σχεδιασμένες με ακρίβεια, κατασκευασμένες με πάθος και φτιαγμένες για να αντέξουν στη δοκιμασία του χρόνου.',
        exploreWork: 'Εξερευνήστε τη Δουλειά μας'
      },
      outdoorCard: {
        title: 'Εξωτερικός Σχεδιασμός',
        description: 'Premium πέργκολες, λύσεις σκίασης και ολοκληρωμένες εμπειρίες εξωτερικού χώρου'
      },
      indoorCard: {
        title: 'Εσωτερικός Σχεδιασμός',
        description: 'Εξελιγμένα εσωτερικά περιβάλλοντα με προσαρμοσμένα αρχιτεκτονικά στοιχεία'
      },
      portfolio: {
        title: 'Δημιουργημένη',
        titleBold: 'Αριστεία',
        subtitle: 'Κάθε πέργκολα διηγείται μια ιστορία ακρίβειας και πάθους'
      }
    },
    outdoor: {
      hero: {
        badge: 'Χαρτοφυλάκιο Εξωτερικού Σχεδιασμού',
        title: 'Εξωτερική',
        titleBold: 'Αριστεία',
        description: 'Μετατρέποντας εξωτερικούς χώρους με premium πέργκολες, λύσεις σκίασης και ολοκληρωμένες εμπειρίες εξωτερικού χώρου που επαναπροσδιορίζουν την πολυτέλεια.'
      },
      categories: {
        title: 'Εξωτερικές',
        titleBold: 'Κατηγορίες',
        subtitle: 'Εξερευνήστε την ολοκληρωμένη γκάμα λύσεων εξωτερικού σχεδιασμού'
      },
      awningPergola: {
        title: 'Πέργκολα με Τέντα',
        description: 'Σύγχρονες πέργκολες και συστήματα τέντας για κομψές λύσεις σκίασης εξωτερικού χώρου'
      },
      outdoorWallCovering: {
        title: 'Επένδυση Εξωτερικού Τοίχου',
        description: 'Premium επενδύσεις τοίχων σχεδιασμένες για εξωτερικούς χώρους με στυλ και ανθεκτικότητα'
      },
      perforatedFabrics: {
        title: 'Διάτρητα Υφάσματα',
        description: 'Καινοτόμες λύσεις διάτρητων υφασμάτων για έλεγχο φωτός και ιδιωτικότητα'
      },
      umbrellas: {
        title: 'Ομπρέλες',
        description: 'Πολυτελείς εξωτερικές ομπρέλες που συνδυάζουν λειτουργικότητα με εξελιγμένο σχεδιασμό'
      },
      verticalAwnings: {
        title: 'Κάθετες Τέντες',
        description: 'Μοντέρνα συστήματα κάθετων τεντών για βέλτιστη προστασία από τον ήλιο και αισθητική'
      }
    },
    indoor: {
      hero: {
        badge: 'Χαρτοφυλάκιο Εσωτερικού Σχεδιασμού',
        title: 'Εσωτερική',
        titleBold: 'Αριστεία',
        description: 'Δημιουργώντας εξελιγμένα εσωτερικά περιβάλλοντα με προσαρμοσμένες κατασκευές πέργκολας και αρχιτεκτονικά στοιχεία που μετατρέπουν χώρους σε έργα τέχνης.'
      },
      categories: {
        title: 'Εσωτερικές',
        titleBold: 'Κατηγορίες',
        subtitle: 'Εξερευνήστε την ολοκληρωμένη γκάμα λύσεων εσωτερικού σχεδιασμού'
      },
      blinds: {
        title: 'Ρολά',
        description: 'Premium ρολά παραθύρων που συνδυάζουν λειτουργικότητα με κομψό σχεδιασμό για τέλειο έλεγχο φωτός και ιδιωτικότητα'
      },
      curtains: {
        title: 'Κουρτίνες',
        description: 'Πολυτελείς λύσεις κουρτινών που προσθέτουν εξέλιξη και ζεστασιά σε κάθε εσωτερικό χώρο'
      },
      wallpaper: {
        title: 'Ταπετσαρία',
        description: 'Ταπετσαρίες σχεδιαστών που μετατρέπουν τοίχους σε εκπληκτικά σημεία εστίασης με υφή και στυλ'
      }
    },
    common: {
      backToHome: 'Επιστροφή στην Αρχική',
      backToCategories: 'Επιστροφή στις Κατηγορίες',
      exploreCategory: 'Εξερεύνηση Κατηγορίας',
      projects: 'Έργα',
      ourProjects: 'Τα Έργα μας',
      stunningInstallations: 'εκπληκτικές εγκαταστάσεις',
      getInTouch: 'Επικοινωνήστε',
      transformSpace: 'Έτοιμοι να Μεταμορφώσετε τον Χώρο σας;',
      outdoorTransform: 'Έτοιμοι να Μεταμορφώσετε τον Εξωτερικό σας Χώρο;',
      indoorTransform: 'Έτοιμοι να Μεταμορφώσετε τον Εσωτερικό σας Χώρο;',
      discussProject: 'Ας συζητήσουμε το έργο σας και να δώσουμε ζωή στο όραμα εξωτερικού σχεδιασμού σας',
      discussIndoorProject: 'Ας συζητήσουμε το έργο σας και να δώσουμε ζωή στο όραμα εσωτερικού σχεδιασμού σας',
      premiumInstallation: 'Premium εγκατάσταση σχεδιασμού που αναδεικνύει την τεχνοτροπία και την προσοχή στη λεπτομέρεια',
      project: 'Έργο'
    },
    services: {
      badge: 'Οι Υπηρεσίες μας',
      title: 'Δημιουργώντας Αριστεία σε',
      titleBold: 'Κάθε Λεπτομέρεια',
      description: 'Από την αρχική ιδέα έως την τελική εγκατάσταση, παρέχουμε ολοκληρωμένες λύσεις πέργκολας που μετατρέπουν εξωτερικούς χώρους σε πολυτελή καταφύγια.'
    }
  }
}

