// ===================================
// CONTACT ROUTES
// ===================================
// Handles form submissions from the contact page

import express from 'express'
import { sendContactEmail } from '../utils/email.js'
import { validateContactForm } from '../utils/validation.js'

const router = express.Router()

// POST /api/contact - Handle contact form submission
router.post('/', async (req, res) => {
  try {
    // Extract form data from request body
    const { name, email, subject, message } = req.body

    // Validate form data
    const validation = validateContactForm({ name, email, subject, message })
    if (!validation.valid) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: validation.errors
      })
    }

    // Send email with contact form data
    const emailResult = await sendContactEmail({
      name,
      email,
      subject,
      message
    })

    // If email failed to send, return error
    if (!emailResult.success) {
      return res.status(500).json({
        status: 'error',
        message: 'Failed to send email. Please try again later.'
      })
    }

    // Success response
    res.status(200).json({
      status: 'success',
      message: 'Your message has been sent successfully. We will get back to you soon.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({
      status: 'error',
      message: 'An error occurred while processing your request.'
    })
  }
})

// GET /api/contact/health - Check if contact service is working
router.get('/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'Contact service is active'
  })
})

export default router
