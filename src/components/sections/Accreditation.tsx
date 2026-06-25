import { BRAND, CREDENTIALS } from '../../data/content'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

export function Accreditation() {
  return (
    <section className="section accreditation" id="accreditation">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Registered & Compliant"
          title="A duly registered Philippine medical equipment business"
          description={`${BRAND.legalName} is registered with DTI and BIR, and holds an FDA establishment License to Operate as a medical device distributor — giving hospitals, clinics, and distributors confidence in every transaction.`}
        />

        <Reveal
          className="accreditation__grid"
          selector="[data-reveal]"
          stagger={0.1}
          y={36}
        >
          {CREDENTIALS.map((cred) => (
            <article className="cred-card" data-reveal key={cred.agency}>
              <div className="cred-card__top">
                <span className={`cred-seal cred-seal--${cred.badge}`}>
                  <img
                    className="cred-seal__logo"
                    src={cred.logo}
                    alt={`${cred.fullName} official logo`}
                    loading="lazy"
                    width={64}
                    height={64}
                  />
                </span>
                <span className="cred-card__verified">
                  <Icon name="verified" />
                  Verified
                </span>
              </div>
              <h3 className="cred-card__agency">{cred.fullName}</h3>
              <p className="cred-card__detail">{cred.detail}</p>
              <div className="cred-card__meta">
                <span className="cred-card__ref">
                  <Icon name="document" />
                  {cred.reference}
                </span>
                {cred.validity && (
                  <span className="cred-card__validity">{cred.validity}</span>
                )}
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal className="accreditation__note" y={24}>
          <Icon name="shield" />
          <span>
            Registered under <strong>{BRAND.legalName}</strong>, owned by{' '}
            {BRAND.owner}. Agency logos indicate business and establishment
            registration only — not product endorsement. Official certificates
            are available to qualified buyers upon request.
          </span>
        </Reveal>
      </div>
    </section>
  )
}
