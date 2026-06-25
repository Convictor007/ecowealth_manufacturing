import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

interface RevealOptions {
  y?: number
  delay?: number
  duration?: number
  stagger?: number
  selector?: string
}

/**
 * Reveals the element (or its [data-reveal] children) on scroll.
 * Falls back to fully visible content when reduced motion is requested.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {},
) {
  const ref = useRef<T>(null)
  const { y = 40, delay = 0, duration = 0.9, stagger = 0.12, selector } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) return

    const targets = selector
      ? Array.from(el.querySelectorAll<HTMLElement>(selector))
      : [el]
    if (targets.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [y, delay, duration, stagger, selector])

  return ref
}
