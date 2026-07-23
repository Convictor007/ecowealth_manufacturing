import { neon } from '@neondatabase/serverless'

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) {
    throw new Error(
      'DATABASE_URL is not configured. Set it in the Vercel project environment variables.',
    )
  }
  return neon(url)
}

function mapLead(row) {
  return {
    id: row.id,
    referenceId: row.reference_id,
    fullName: row.full_name,
    organization: row.organization,
    email: row.email,
    phone: row.phone,
    facilityType: row.facility_type,
    packageInterest: row.package_interest,
    message: row.message,
    createdAt: row.created_at,
  }
}

export async function createTable() {
  const sql = getSql()
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
  const sql = getSql()
  const referenceId = `EW-${Date.now().toString(36).toUpperCase()}`
  const [lead] = await sql`
    INSERT INTO leads (
      reference_id,
      full_name,
      organization,
      email,
      phone,
      facility_type,
      package_interest,
      message
    )
    VALUES (
      ${referenceId},
      ${payload.fullName},
      ${payload.organization},
      ${payload.email},
      ${payload.phone},
      ${payload.facilityType},
      ${payload.packageInterest},
      ${payload.message}
    )
    RETURNING *
  `
  return mapLead(lead)
}

export async function listLeads() {
  const sql = getSql()
  const leads = await sql`SELECT * FROM leads ORDER BY created_at DESC`
  return leads.map(mapLead)
}
