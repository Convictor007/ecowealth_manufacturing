import { useEffect, useState } from 'react'
import { BRAND, NAV_LINKS } from '../../data/content'
import { Logo } from '../ui/Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
          <Logo className="nav__logo" size={50} />
          <span className="nav__brand-text">
            <span className="nav__brand-name">{BRAND.name}</span>
            <small>{BRAND.product}</small>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav__cta nav__cta--mobile" href="#contact" onClick={() => setOpen(false)}>
            Request Proposal
          </a>
        </nav>

        <a className="nav__cta nav__cta--desktop" href="#contact">
          Request Proposal
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
