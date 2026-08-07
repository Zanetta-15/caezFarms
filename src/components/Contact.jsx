// Contact Component - Contact form using Web3Forms
// No backend or database required. Uses client-side fetch to submit.

import { useState } from 'react'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  website: '' // hidden honeypot field for spam protection
}

const initialErrors = {
  fullName: '',
  email: '',
  message: ''
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = { ...initialErrors }

  if (!values.fullName.trim()) {
    errors.fullName = 'Full Name is required.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email Address is required.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.'
  }

  return errors
}

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState(initialErrors)
  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value
    }))
    setErrors((current) => ({
      ...current,
      [name]: ''
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus(null)

    const validationErrors = validate(formData)
    const hasErrors = Object.values(validationErrors).some(Boolean)

    if (hasErrors) {
      setErrors(validationErrors)
      return
    }

    if (!accessKey) {
      setStatus({
        type: 'error',
        message:
          'Contact form is not configured. Please add VITE_WEB3FORMS_ACCESS_KEY to your .env file.'
      })
      return
    }

    setIsSubmitting(true)

    try {
      const submissionData = new FormData()
      submissionData.append('access_key', accessKey)
      submissionData.append(
        'subject',
        formData.subject.trim() || 'New message from CAEZ Farms contact form'
      )
      submissionData.append('fullName', formData.fullName)
      submissionData.append('email', formData.email)
      submissionData.append('phone', formData.phone)
      submissionData.append('message', formData.message)
      submissionData.append('website', formData.website)

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: submissionData
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        })
        setFormData(initialFormState)
      } else {
        setStatus({
          type: 'error',
          message:
            result.message ||
            'Sorry, something went wrong while sending your message.'
        })
      }
    } catch (error) {
      console.error('Web3Forms submission error:', error)
      setStatus({
        type: 'error',
        message:
          'Unable to send your message right now. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section light">
      <div className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-forest/10 bg-cream/90 p-8 shadow-soft">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-forestSoft">Contact</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-forestDark sm:text-5xl">
              Send us a message
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-forestDark/75">
              Have a question about premium agriculture, renewable energy,
              or partnering with CAEZ Farms? Use the form below.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-live="polite">
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="sr-only"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-forestDark">Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby="fullName-error"
                  placeholder="John Doe"
                  className="mt-3 w-full rounded-3xl border border-forest/10 bg-white px-5 py-4 text-base text-forestDark shadow-sm outline-none transition focus:border-forest focus:ring-4 focus:ring-forest/10"
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-2 text-sm text-rose-700">
                    {errors.fullName}
                  </p>
                )}
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-forestDark">Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby="email-error"
                  placeholder="john@example.com"
                  className="mt-3 w-full rounded-3xl border border-forest/10 bg-white px-5 py-4 text-base text-forestDark shadow-sm outline-none transition focus:border-forest focus:ring-4 focus:ring-forest/10"
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-rose-700">
                    {errors.email}
                  </p>
                )}
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-forestDark">Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+233 24 000 0000"
                  className="mt-3 w-full rounded-3xl border border-forest/10 bg-white px-5 py-4 text-base text-forestDark shadow-sm outline-none transition focus:border-forest focus:ring-4 focus:ring-forest/10"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-forestDark">Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Partnership inquiry"
                  className="mt-3 w-full rounded-3xl border border-forest/10 bg-white px-5 py-4 text-base text-forestDark shadow-sm outline-none transition focus:border-forest focus:ring-4 focus:ring-forest/10"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-semibold text-forestDark">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby="message-error"
                rows="6"
                placeholder="Tell us how we can help..."
                className="mt-3 w-full rounded-[1.75rem] border border-forest/10 bg-white px-5 py-4 text-base text-forestDark shadow-sm outline-none transition focus:border-forest focus:ring-4 focus:ring-forest/10"
              />
              {errors.message && (
                <p id="message-error" className="mt-2 text-sm text-rose-700">
                  {errors.message}
                </p>
              )}
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-forest px-8 py-4 text-sm font-semibold text-cream transition duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {status?.type === 'success' && (
              <div
                className="rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-900"
                role="status"
              >
                {status.message}
              </div>
            )}

            {status?.type === 'error' && (
              <div
                className="rounded-3xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-semibold text-rose-900"
                role="alert"
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
