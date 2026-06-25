import type { LeadPayload, LeadResponse } from '../types'
import { apiRequest } from './apiClient'

export function submitLead(payload: LeadPayload): Promise<LeadResponse> {
  return apiRequest<LeadResponse, LeadPayload>('/leads', {
    method: 'POST',
    body: payload,
  })
}
