import { AUDIENCES } from '../../data/content'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

export function Audience() {
  return (
    <section className="section audience" id="audience">
      <div className="container">
        <SectionHeader
          eyebrow="Who It's For"
          title="Built for stakeholders across healthcare & wellness"
          description="From large hospitals to growing clinics and distribution partners — the Modern Labatiba Machine adds a new, profitable service line."
        />

        <Reveal
          className="audience__grid"
          selector="[data-reveal]"
          stagger={0.1}
          y={36}
        >
          {AUDIENCES.map((item) => (
            <article className="audience__card" data-reveal key={item.title}>
              <span className="audience__icon">
                <Icon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className="audience__trust" y={30}>
          <span className="audience__trust-item">
            <Icon name="shield" /> Closed, UV-sterilized system
          </span>
          <span className="audience__trust-item">
            <Icon name="check" /> Free installation & training
          </span>
          <span className="audience__trust-item">
            <Icon name="leaf" /> 100% natural therapy
          </span>
        </Reveal>
      </div>
    </section>
  )
}
