import cors from 'cors'
import express from 'express'
import leadRoutes from './routes/leadRoutes.js'

const app = express()
const PORT = process.env.API_PORT ?? 3001

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ success: true, status: 'ok' })
})

app.use('/api/leads', leadRoutes)

app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Not found.' })
})

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err)
  res.status(500).json({
    success: false,
    message: 'Something went wrong. Please try again later.',
  })
})

app.listen(PORT, () => {
  console.log(`Eco-Wealth API running on http://localhost:${PORT}`)
})
