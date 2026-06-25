import { Router } from 'express'
import { getLeads, postLead } from '../controllers/leadController.js'
import { validateLead } from '../middleware/validateLead.js'

const router = Router()

router.post('/', validateLead, postLead)
router.get('/', getLeads)

export default router
