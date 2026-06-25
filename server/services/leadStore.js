import { randomUUID } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_DIR = join(__dirname, '..', 'data')
const DATA_FILE = join(DATA_DIR, 'leads.json')

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
  await mkdir(DATA_DIR, { recursive: true })
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
