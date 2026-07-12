import { PACKAGES } from '../../data/content'
import { Icon } from '../ui/Icon'
import { ProgressiveImage } from '../ui/ProgressiveImage'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

export function Packages() {
  return (
    <section className="section packages" id="packages">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Investment Proposal"
          title="Choose the package that fits your facility"
          description="Every package is delivered complete — hardware, products, free installation, free treatment bed, and operator training included."
        />

        <Reveal
          className="packages__grid"
          selector="[data-reveal]"
          stagger={0.12}
          y={48}
        >
          {PACKAGES.map((pkg) => (
            <article
              className={`pkg ${pkg.featured ? 'pkg--featured' : ''}`}
              data-reveal
              key={pkg.id}
            >
              {pkg.featured && <span className="pkg__ribbon">Most Complete</span>}

              <div className="pkg__media">
                <ProgressiveImage
                  src={pkg.image}
                  alt={`${pkg.name} machine configuration`}
                  theme="dark"
                />
              </div>

              <div className="pkg__head">
                <div>
                  <h3 className="pkg__name">{pkg.name}</h3>
                  <p className="pkg__tagline">{pkg.tagline}</p>
                </div>
                <div className="pkg__price">
                  <span className="pkg__price-label">Proposal</span>
                  <strong>{pkg.price}</strong>
                </div>
              </div>

              {pkg.dimensions && (
                <div className="pkg__dimensions">
                  <span className="pkg__dim-label">Machine Size:</span>
                  <strong>{pkg.dimensions}</strong>
                </div>
              )}

              <div className="pkg__gallery">
                {pkg.gallery.map((item) => (
                  <figure className="pkg__gallery-item" key={item.label}>
                    <div className="pkg__gallery-media">
                      <ProgressiveImage
                        src={item.image}
                        alt={item.label}
                        theme="dark"
                      />
                    </div>
                    <figcaption>{item.label}</figcaption>
                  </figure>
                ))}
              </div>

              <ul className="pkg__list">
                {pkg.inclusions.map((item) => (
                  <li key={item.label}>
                    <span className="pkg__check">
                      <Icon name="check" />
                    </span>
                    <span>
                      {item.label}
                      {item.highlight && (
                        <strong className="pkg__hl"> {item.highlight}</strong>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <a className="btn btn--primary pkg__cta" href="#contact">
                Request this package
                <Icon name="arrow" />
              </a>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
