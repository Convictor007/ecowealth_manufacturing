import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { BRAND, MACHINE_IMAGE } from '../../data/content'
import { ProgressiveImage } from '../ui/ProgressiveImage'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function Hero() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.9 })
      tl.from('[data-hero-line]', {
        yPercent: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out',
      })
        .from(
          '[data-hero-fade]',
          { y: 24, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
          '-=0.5',
        )
        .from(
          '[data-hero-machine]',
          { scale: 0.85, opacity: 0, duration: 1.2, ease: 'power3.out' },
          '-=0.9',
        )
        .from(
          '[data-hero-badge]',
          { scale: 0, opacity: 0, duration: 0.6, ease: 'back.out(1.7)' },
          '-=0.6',
        )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow" data-hero-fade>
            <span className="dot" /> Investment Proposal · {BRAND.location}
          </p>
          <h1 className="hero__title">
            <span className="line">
              <span data-hero-line>Modern Labatiba</span>
            </span>
            <span className="line">
              <span data-hero-line>Colon Hydrotherapy</span>
            </span>
            <span className="line line--accent">
              <span data-hero-line>Machine</span>
            </span>
          </h1>
          <p className="hero__lead" data-hero-fade>
            A modern, 100% natural colon cleansing system — engineered for
            hospitals, clinics, and wellness centers. Turnkey, hygienic, and
            ready to generate returns from day one.
          </p>
          <div className="hero__actions" data-hero-fade>
            <a className="btn btn--primary" href="#contact">
              Request a Proposal
            </a>
            <a className="btn btn--ghost" href="#packages">
              View Packages
            </a>
          </div>
          <ul className="hero__stats" data-hero-fade>
            <li>
              <strong>100%</strong>
              <span>Natural therapy</span>
            </li>
            <li>
              <strong>7 Rs</strong>
              <span>Of colon hydrotherapy</span>
            </li>
            <li>
              <strong>UV</strong>
              <span>Sterilized & closed</span>
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__machine" data-hero-machine>
            <ProgressiveImage
              src={MACHINE_IMAGE}
              alt="Modern Labatiba colon hydrotherapy machine"
              theme="dark"
              loading="eager"
            />
          </div>
          <div className="hero__badge" data-hero-badge>
            <strong>100%</strong>
            <span>Natural</span>
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#overview" aria-label="Scroll to overview">
        <span />
      </a>
    </section>
  )
}
