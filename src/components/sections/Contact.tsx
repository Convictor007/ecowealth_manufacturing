import { useState, type FormEvent } from 'react'
import { BRAND, FACILITY_OPTIONS, PACKAGES } from '../../data/content'
import { submitLead } from '../../services/leadService'
import type { FacilityType, LeadPayload } from '../../types'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'

type Status = 'idle' | 'loading' | 'success' | 'error'

const initialForm: LeadPayload = {
  fullName: '',
  organization: '',
  facilityType: 'hospital',
  email: '',
  phone: '',
  packageInterest: PACKAGES[1].name,
  message: '',
}

export function Contact() {
  const [form, setForm] = useState<LeadPayload>(initialForm)
  const [status, setStatus] = useState<Status>('idle')
  const [feedback, setFeedback] = useState('')

  const update = (field: keyof LeadPayload, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setFeedback('')
    try {
      const res = await submitLead(form)
      setStatus('success')
      setFeedback(
        res.referenceId
          ? `${res.message} Reference: ${res.referenceId}`
          : res.message,
      )
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setFeedback(
        err instanceof Error
          ? err.message
          : 'Unable to send your request. Please try again.',
      )
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <Reveal className="contact__intro" y={40}>
          <p className="section-header__eyebrow">
            <span className="dot" /> Get Started
          </p>
          <h2 className="contact__title">
            Request your Modern Labatiba proposal
          </h2>
          <p className="contact__lead">
            Tell us about your facility and we’ll prepare a tailored proposal,
            including pricing, inclusions, installation, and operator training.
          </p>

          <ul className="contact__details">
            <li>
              <span className="contact__detail-icon">
                <Icon name="mail" />
              </span>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </li>
            <li>
              <span className="contact__detail-icon">
                <Icon name="phone" />
              </span>
              <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>{BRAND.phone}</a>
            </li>
            <li>
              <span className="contact__detail-icon">
                <Icon name="pin" />
              </span>
              <span>{BRAND.fullAddress}</span>
            </li>
          </ul>
        </Reveal>

        <Reveal className="contact__form-wrap" y={40} delay={0.1}>
          <form className="contact__form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                type="text"
                value={form.fullName}
                onChange={(e) => update('fullName', e.target.value)}
                placeholder="Juan Dela Cruz"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="organization">Organization</label>
              <input
                id="organization"
                type="text"
                value={form.organization}
                onChange={(e) => update('organization', e.target.value)}
                placeholder="Facility / company name"
              />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="facilityType">Facility type</label>
                <select
                  id="facilityType"
                  value={form.facilityType}
                  onChange={(e) =>
                    update('facilityType', e.target.value as FacilityType)
                  }
                >
                  {FACILITY_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="packageInterest">Package of interest</label>
                <select
                  id="packageInterest"
                  value={form.packageInterest}
                  onChange={(e) => update('packageInterest', e.target.value)}
                >
                  {PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.name}>
                      {pkg.name} — {pkg.price}
                    </option>
                  ))}
                  <option value="Undecided">Not sure yet</option>
                </select>
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="you@facility.com"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="+63 900 000 0000"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Message (optional)</label>
              <textarea
                id="message"
                rows={3}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="Tell us about your facility and goals…"
              />
            </div>

            <button
              type="submit"
              className="btn btn--primary contact__submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending…' : 'Send Request'}
              {status !== 'loading' && <Icon name="arrow" />}
            </button>

            {feedback && (
              <p
                className={`contact__feedback contact__feedback--${
                  status === 'success' ? 'ok' : 'err'
                }`}
                role="status"
              >
                {feedback}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
