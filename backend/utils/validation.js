// ===================================
// VALIDATION UTILITIES
// ===================================
// Helper functions to validate form input and data

// Validate contact form data
export function validateContactForm(data) {
  // Initialize errors array
  const errors = []

  // Check if name is provided and has valid length
  if (!data.name || data.name.trim().length === 0) {
    errors.push('Name is required')
  } else if (data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long')
  } else if (data.name.trim().length > 100) {
    errors.push('Name must not exceed 100 characters')
  }

  // Check if email is provided and valid format
  if (!data.email || data.email.trim().length === 0) {
    errors.push('Email is required')
  } else if (!isValidEmail(data.email)) {
    errors.push('Email format is invalid')
  }

  // Check if subject is provided and has valid length
  if (!data.subject || data.subject.trim().length === 0) {
    errors.push('Subject is required')
  } else if (data.subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters long')
  } else if (data.subject.trim().length > 200) {
    errors.push('Subject must not exceed 200 characters')
  }

  // Check if message is provided and has valid length
  if (!data.message || data.message.trim().length === 0) {
    errors.push('Message is required')
  } else if (data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long')
  } else if (data.message.trim().length > 5000) {
    errors.push('Message must not exceed 5000 characters')
  }

  // Return validation result
  return {
    valid: errors.length === 0,
    errors: errors
  }
}

// Validate email format using regex
function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Sanitize input to prevent XSS attacks
export function sanitizeInput(input) {
  if (typeof input !== 'string') {
    return input
  }

  // Remove HTML tags and dangerous characters
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .trim()
}

// Validate phone number format (optional utility)
export function isValidPhoneNumber(phone) {
  // Simple validation for phone numbers
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/
  return phoneRegex.test(phone)
}
