import { useEffect, useRef } from 'react'

export function useParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    function handleScroll() {
      const el = ref.current
      if (!el) return
      const s = window.scrollY
      if (s < window.innerHeight) {
        el.style.transform = `translateY(${s * 0.3}px)`
        el.style.opacity = String(1 - (s / window.innerHeight) * 0.8)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return ref
}
