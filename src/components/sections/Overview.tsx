import { MACHINE_IMAGE, SPECS } from '../../data/content'
import { ProgressiveImage } from '../ui/ProgressiveImage'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

export function Overview() {
  return (
    <section className="section overview" id="overview">
      <div className="container overview__grid">
        <Reveal className="overview__media" y={50}>
          <div className="overview__media-card">
            <ProgressiveImage
              src={MACHINE_IMAGE}
              alt="Modern Labatiba colon hydrotherapy machine"
              theme="dark"
            />
          </div>
          <div className="overview__media-tag">
            <strong>Closed System</strong>
            <span>Hygienic · Odourless · Safe</span>
          </div>
        </Reveal>

        <div className="overview__content">
          <SectionHeader
            eyebrow="Overview"
            title="A complete colon cleansing system, built for modern care"
            description="The Modern Labatiba Machine brings the Seven Rs of colon hydrotherapy into a single, elegant unit. Every package is delivered turnkey — tank, sterilization, hoses, treatment bed, installation, and operator training included."
          />
          <Reveal className="overview__specs" selector="[data-reveal]" stagger={0.08}>
            {SPECS.map((spec) => (
              <div className="overview__spec" data-reveal key={spec.label}>
                <span className="overview__spec-label">{spec.label}</span>
                <span className="overview__spec-value">{spec.value}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
