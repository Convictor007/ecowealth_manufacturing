import { CONDITIONS } from '../../data/content'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

export function Conditions() {
  return (
    <section className="section conditions" id="conditions">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Effective For"
          title="Supporting wellness across many concerns"
          description="Traditionally used as a complementary therapy for a wide range of health and lifestyle concerns."
        />

        <Reveal
          className="conditions__grid"
          selector="[data-reveal]"
          stagger={0.05}
          y={26}
        >
          {CONDITIONS.map((condition) => (
            <div className="condition" data-reveal key={condition.name}>
              <span className="condition__check">
                <Icon name="check" />
              </span>
              <span>{condition.name}</span>
            </div>
          ))}
        </Reveal>

        <p className="conditions__note">
          * Complementary therapy. Results vary per individual and are not a
          substitute for professional medical advice.
        </p>
      </div>
    </section>
  )
}
