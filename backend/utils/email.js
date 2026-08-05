// ===================================
// EMAIL UTILITIES
// ===================================
// Handles sending emails using Nodemailer

import nodemailer from 'nodemailer'

// Create a transporter for sending emails
// This example uses Gmail - replace with your email service
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

// Send contact form email
export async function sendContactEmail(formData) {
  try {
    // Email to be sent to the company
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    // Send confirmation email to the user
    const confirmationEmail = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'We received your message - CAEZ Farms',
      html: `
        <h2>Thank you for contacting CAEZ Farms!</h2>
        <p>Dear ${formData.name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>The CAEZ Farms Team</p>
      `
    }

    // Send confirmation email to user
    await transporter.sendMail(confirmationEmail)

    // Return success response
    return {
      success: true,
      message: 'Email sent successfully'
    }

  } catch (error) {
    // Log error and return failure response
    console.error('Email sending error:', error)
    return {
      success: false,
      message: 'Failed to send email',
      error: error.message
    }
  }
}

// Test email configuration
export async function testEmailConnection() {
  try {
    // Verify connection configuration
    await transporter.verify()
    console.log('✓ Email service is configured and ready')
    return true
  } catch (error) {
    console.error('✗ Email service error:', error.message)
    return false
  }
}
