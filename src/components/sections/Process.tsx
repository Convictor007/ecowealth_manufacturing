import { SEVEN_RS } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

export function Process() {
  return (
    <section className="section process" id="process">
      <div className="process__glow" aria-hidden="true" />
      <div className="container">
        <SectionHeader
          eyebrow="The Process"
          title="The Seven Rs of Colon Hydrotherapy"
          description="A guided, gentle journey that defines every Modern Labatiba session."
        />

        <Reveal
          className="process__grid"
          selector="[data-reveal]"
          stagger={0.08}
          y={36}
        >
          {SEVEN_RS.map((step) => (
            <article className="process__card" data-reveal key={step.index}>
              <span className="process__index">{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
