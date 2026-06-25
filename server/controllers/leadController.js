import { createLead, listLeads } from '../services/leadStore.js'

export async function postLead(req, res, next) {
  try {
    const lead = await createLead(req.validatedLead)
    res.status(201).json({
      success: true,
      message:
        'Thank you! Your request has been received. Our team will contact you shortly.',
      referenceId: lead.referenceId,
    })
  } catch (error) {
    next(error)
  }
}

export async function getLeads(_req, res, next) {
  try {
    const leads = await listLeads()
    res.json({ success: true, count: leads.length, leads })
  } catch (error) {
    next(error)
  }
}
