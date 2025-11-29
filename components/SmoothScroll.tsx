'use client'

import { ReactLenis } from 'lenis/react'
import { ReactNode, useEffect, useState } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // Disable on tablets and mobile
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // On mobile, return children without Lenis wrapper (native scroll)
  if (isMobile) {
    return <>{children}</>
  }

  // On desktop, use smooth scroll
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}

