const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const FACILITY_TYPES = [
  'hospital',
  'clinic',
  'wellness_center',
  'distributor',
  'individual',
  'other',
]

export function validateLead(req, res, next) {
  const body = req.body ?? {}
  const errors = []

  const fullName = String(body.fullName ?? '').trim()
  const organization = String(body.organization ?? '').trim()
  const email = String(body.email ?? '').trim()
  const phone = String(body.phone ?? '').trim()
  const facilityType = String(body.facilityType ?? '').trim()
  const packageInterest = String(body.packageInterest ?? '').trim()
  const message = String(body.message ?? '').trim()

  if (fullName.length < 2) errors.push('Full name is required.')
  if (!EMAIL_RE.test(email)) errors.push('A valid email is required.')
  if (phone.length < 6) errors.push('A valid phone number is required.')
  if (!FACILITY_TYPES.includes(facilityType))
    errors.push('Please select a valid facility type.')

  if (errors.length > 0) {
    return res.status(422).json({
      success: false,
      message: errors.join(' '),
    })
  }

  req.validatedLead = {
    fullName,
    organization,
    email,
    phone,
    facilityType,
    packageInterest,
    message,
  }
  next()
}
