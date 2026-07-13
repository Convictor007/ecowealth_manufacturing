import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL)

export async function createTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      reference_id VARCHAR(20) UNIQUE NOT NULL,
      full_name VARCHAR(255) NOT NULL,
      organization VARCHAR(255),
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      facility_type VARCHAR(50) NOT NULL,
      package_interest VARCHAR(255),
      message TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `
  await sql`CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email)`
  await sql`CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC)`
  await sql`CREATE INDEX IF NOT EXISTS idx_leads_reference_id ON leads(reference_id)`
}

export async function createLead(payload) {
  const referenceId = `EW-${Date.now().toString(36).toUpperCase()}`
  const [lead] = await sql`
    INSERT INTO leads (reference_id, full_name, organization, email, phone, facility_type, package_interest, message)
    VALUES (${referenceId}, ${payload.fullName}, ${payload.organization}, ${payload.email}, ${payload.phone}, ${payload.facilityType}, ${payload.packageInterest}, ${payload.message})
    RETURNING *
  `
  return { ...lead, referenceId: lead.reference_id }
}

export async function listLeads() {
  const leads = await sql`SELECT * FROM leads ORDER BY created_at DESC`
  return leads.map((lead) => ({ ...lead, referenceId: lead.reference_id }))
}
