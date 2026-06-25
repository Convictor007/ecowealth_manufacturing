import { BRAND, NAV_LINKS } from '../../data/content'
import { Logo } from '../ui/Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Logo className="footer__logo" size={52} />
          <div>
            <strong>{BRAND.name}</strong>
            <p>{BRAND.subtitle}</p>
          </div>
        </div>

        <nav className="footer__links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__contact">
          <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>{BRAND.phone}</a>
          <span>{BRAND.location}</span>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
        <p className="footer__disclaimer">
          The Modern Labatiba Machine is a complementary wellness device. Stated
          conditions reflect traditional use and are not a guarantee of cure.
          Always operate under qualified supervision and applicable regulations.
        </p>
      </div>
    </footer>
  )
}
