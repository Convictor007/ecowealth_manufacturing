import { createLead, listLeads } from './_lib/leadStore.js'
import { validateLeadBody } from './_lib/validateLead.js'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  try {
    if (req.method === 'GET') {
      const leads = await listLeads()
      return res.status(200).json({ success: true, count: leads.length, leads })
    }

    if (req.method === 'POST') {
      const result = validateLeadBody(req.body)
      if (!result.ok) {
        return res.status(422).json({
          success: false,
          message: result.errors.join(' '),
        })
      }

      const lead = await createLead(result.data)
      return res.status(201).json({
        success: true,
        message:
          'Thank you! Your request has been received. Our team will contact you shortly.',
        referenceId: lead.referenceId,
      })
    }

    return res.status(405).json({ success: false, message: 'Method not allowed.' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    })
  }
}
