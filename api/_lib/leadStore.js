import { randomUUID } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

const DATA_FILE = join(tmpdir(), 'ecowealth-leads.json')

async function readAll() {
  try {
    const raw = await readFile(DATA_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch (error) {
    if (error.code === 'ENOENT') return []
    throw error
  }
}

async function persist(leads) {
  await mkdir(tmpdir(), { recursive: true })
  await writeFile(DATA_FILE, JSON.stringify(leads, null, 2), 'utf-8')
}

export async function createLead(payload) {
  const leads = await readAll()
  const lead = {
    id: randomUUID(),
    referenceId: `EW-${Date.now().toString(36).toUpperCase()}`,
    ...payload,
    createdAt: new Date().toISOString(),
  }
  leads.push(lead)
  await persist(leads)
  return lead
}

export async function listLeads() {
  return readAll()
}
