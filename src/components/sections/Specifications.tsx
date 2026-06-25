import { COMPONENTS, SPEC_GROUPS } from '../../data/content'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

export function Specifications() {
  return (
    <section className="section specs" id="specs">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Specifications"
          title="Technical specifications & components"
          description="Engineered for safety, hygiene, and reliable daily operation in clinical and wellness settings."
        />

        <div className="specs__layout">
          <Reveal
            className="specs__groups"
            selector="[data-reveal]"
            stagger={0.08}
            y={32}
          >
            {SPEC_GROUPS.map((group) => (
              <div className="spec-group" data-reveal key={group.title}>
                <h3 className="spec-group__title">{group.title}</h3>
                <dl className="spec-group__list">
                  {group.items.map((item) => (
                    <div className="spec-row" key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </Reveal>

          <Reveal className="specs__components" y={32} delay={0.1}>
            <h3 className="specs__components-title">Core Components</h3>
            <p className="specs__components-sub">
              Every package ships complete and ready to install.
            </p>
            <ul className="specs__components-list">
              {COMPONENTS.map((comp) => (
                <li key={comp.name}>
                  <span className="specs__comp-icon">
                    <Icon name="check" />
                  </span>
                  <span>
                    <strong>{comp.name}</strong>
                    <small>{comp.detail}</small>
                  </span>
                </li>
              ))}
            </ul>
            <a className="btn btn--primary specs__cta" href="#contact">
              Request full spec sheet
              <Icon name="arrow" />
            </a>
          </Reveal>
        </div>

        <p className="specs__note">
          Specifications reflect standard configuration and may be refined per
          order. Contact us for the complete technical datasheet and
          certifications.
        </p>
      </div>
    </section>
  )
}
