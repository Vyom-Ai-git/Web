import { useEffect, useState } from 'react'

export function useReducedMotion(): boolean {
  const [shouldReduceMotion, setShouldReduceMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
    return false
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)')
    const listener = (event: MediaQueryListEvent) => {
      setShouldReduceMotion(event.matches)
    }

    mediaQueryList.addEventListener('change', listener)
    setShouldReduceMotion(mediaQueryList.matches)

    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [])

  return shouldReduceMotion
}
