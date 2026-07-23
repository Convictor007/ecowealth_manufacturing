import { Resend } from 'resend'

const TO_EMAIL = 'tingetsuka2@gmail.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    throw new Error('RESEND_API_KEY is not configured.')
  }
  return new Resend(key)
}

function buildLeadEmail(lead) {
  const facilityLabels = {
    hospital: 'Hospital',
    clinic: 'Clinic',
    wellness_center: 'Wellness Center',
    distributor: 'Distributor',
    individual: 'Individual Investor',
    other: 'Other',
  }

  return {
    from: `Eco-Wealth Website <${FROM_EMAIL}>`,
    to: TO_EMAIL,
    subject: `New Proposal Request — ${lead.fullName} (${lead.referenceId})`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#f3f7f2;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f7f2;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0c3b22,#14663a);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:-0.5px;">New Proposal Request</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">Modern Labatiba Machine — Eco-Wealth Medical Equipment</p>
            </td>
          </tr>

          <!-- Reference Badge -->
          <tr>
            <td style="padding:24px 40px 0;text-align:center;">
              <span style="display:inline-block;background:#e7efe6;color:#14663a;font-size:13px;font-weight:600;padding:6px 16px;border-radius:20px;letter-spacing:0.5px;">
                REF: ${lead.referenceId}
              </span>
            </td>
          </tr>

          <!-- Client Info -->
          <tr>
            <td style="padding:24px 40px 0;">
              <h2 style="margin:0 0 16px;color:#0c3b22;font-size:18px;border-bottom:2px solid #e7efe6;padding-bottom:12px;">
                Client Information
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;color:#5c6b62;font-size:13px;width:140px;vertical-align:top;">Full Name</td>
                  <td style="padding:8px 0;color:#0e1a14;font-size:14px;font-weight:600;">${lead.fullName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#5c6b62;font-size:13px;vertical-align:top;">Organization</td>
                  <td style="padding:8px 0;color:#0e1a14;font-size:14px;font-weight:600;">${lead.organization || '—'}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#5c6b62;font-size:13px;vertical-align:top;">Email</td>
                  <td style="padding:8px 0;color:#0e1a14;font-size:14px;">
                    <a href="mailto:${lead.email}" style="color:#14663a;text-decoration:none;">${lead.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#5c6b62;font-size:13px;vertical-align:top;">Phone</td>
                  <td style="padding:8px 0;color:#0e1a14;font-size:14px;">
                    <a href="tel:${lead.phone?.replace(/\s/g, '')}" style="color:#14663a;text-decoration:none;">${lead.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#5c6b62;font-size:13px;vertical-align:top;">Facility Type</td>
                  <td style="padding:8px 0;color:#0e1a14;font-size:14px;font-weight:600;">${facilityLabels[lead.facilityType] || lead.facilityType}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#5c6b62;font-size:13px;vertical-align:top;">Package Interest</td>
                  <td style="padding:8px 0;color:#0e1a14;font-size:14px;font-weight:600;">${lead.packageInterest || '—'}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          ${lead.message ? `
          <tr>
            <td style="padding:20px 40px 0;">
              <h2 style="margin:0 0 12px;color:#0c3b22;font-size:18px;border-bottom:2px solid #e7efe6;padding-bottom:12px;">
                Message
              </h2>
              <p style="margin:0;color:#0e1a14;font-size:14px;line-height:1.6;background:#f3f7f2;padding:16px;border-radius:12px;">
                ${lead.message}
              </p>
            </td>
          </tr>
          ` : ''}

          <!-- CTA -->
          <tr>
            <td style="padding:32px 40px;text-align:center;">
              <a href="mailto:${lead.email}?subject=RE: Your Eco-Wealth Proposal Request (${lead.referenceId})" 
                 style="display:inline-block;background:linear-gradient(135deg,#2e9e5b,#14663a);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:10px;font-size:14px;font-weight:600;letter-spacing:0.3px;">
                Reply to ${lead.fullName.split(' ')[0]}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f3f7f2;padding:20px 40px;text-align:center;border-top:1px solid #e7efe6;">
              <p style="margin:0;color:#5c6b62;font-size:12px;">
                Eco-Wealth Medical Equipment Manufacturing · Iriga City, Camarines Sur<br>
                This lead was submitted via the website contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
  }
}

export async function sendLeadNotification(lead) {
  try {
    // Normalize snake_case from DB to camelCase for template
    const normalized = {
      fullName: lead.fullName ?? lead.full_name,
      referenceId: lead.referenceId ?? lead.reference_id,
      organization: lead.organization,
      email: lead.email,
      phone: lead.phone,
      facilityType: lead.facilityType ?? lead.facility_type,
      packageInterest: lead.packageInterest ?? lead.package_interest,
      message: lead.message,
    }
    await getResend().emails.send(buildLeadEmail(normalized))
    return true
  } catch (error) {
    console.error('Failed to send lead notification email:', error)
    return false
  }
}
