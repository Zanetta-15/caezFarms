// ===================================
// CAEZ FARMS BACKEND - MAIN SERVER
// ===================================
// This is the main Express server file that handles all API requests

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from './routes/contact.js'
import apiRoutes from './routes/api.js'

// Load environment variables from .env file
dotenv.config()

// Create Express application
const app = express()

// ===================================
// MIDDLEWARE
// ===================================

// Enable CORS - allows frontend to make requests to this backend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

// Parse JSON request bodies
app.use(express.json())

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }))

// ===================================
// ROUTES
// ===================================

// Health check endpoint - simple endpoint to verify server is running
app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'CAEZ Farms backend is running',
    timestamp: new Date().toISOString()
  })
})

// Contact form routes
app.use('/api/contact', contactRoutes)

// General API routes
app.use('/api', apiRoutes)

// 404 handler - when no route matches
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found',
    path: req.path
  })
})

// Error handler middleware - catches errors from routes
app.use((err, req, res, next) => {
  console.error('Error:', err)
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal server error',
    timestamp: new Date().toISOString()
  })
})

// ===================================
// START SERVER
// ===================================

const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV || 'development'

app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════╗
  ║   CAEZ FARMS BACKEND SERVER        ║
  ║   Environment: ${NODE_ENV.padEnd(24)}║
  ║   Port: ${PORT.toString().padEnd(28)}║
  ║   Ready for API requests           ║
  ╚════════════════════════════════════╝
  `)
})
