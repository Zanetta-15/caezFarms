// Contact Component - Contact form and contact information
// Allows users to send messages to CAEZ Farms

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('')

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="section light">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-start">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-forestSoft">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-forestDark sm:text-5xl">
                Get in touch with CAEZ Farms
              </h2>
            </div>

            <div className="glass-card p-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-forestDark">Location</h3>
                <p className="mt-3 text-base leading-7 text-forestDark/75">Kwame Danso, Bono East Region, Ghana</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-forestDark">Email</h3>
                <p className="mt-3 text-base leading-7 text-forestDark/75">
                  <a href="mailto:info@caezfarms.com" className="text-forestDark underline">info@caezfarms.com</a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-forestDark">Business Hours</h3>
                <p className="mt-3 text-base leading-7 text-forestDark/75">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-base leading-7 text-forestDark/75">Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-forestDark">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="mt-3 w-full rounded-3xl border border-forest/10 bg-cream px-5 py-4 text-base text-forestDark shadow-sm outline-none transition focus:border-forest focus:ring-4 focus:ring-forest/10"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-forestDark">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="mt-3 w-full rounded-3xl border border-forest/10 bg-cream px-5 py-4 text-base text-forestDark shadow-sm outline-none transition focus:border-forest focus:ring-4 focus:ring-forest/10"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-forestDark">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Your subject"
                className="mt-3 w-full rounded-3xl border border-forest/10 bg-cream px-5 py-4 text-base text-forestDark shadow-sm outline-none transition focus:border-forest focus:ring-4 focus:ring-forest/10"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-forestDark">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                className="mt-3 w-full rounded-[1.5rem] border border-forest/10 bg-cream px-5 py-4 text-base text-forestDark shadow-sm outline-none transition focus:border-forest focus:ring-4 focus:ring-forest/10"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex w-full items-center justify-center rounded-full bg-forest px-8 py-4 text-sm font-semibold text-cream shadow-soft transition duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-900">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="rounded-3xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-semibold text-rose-900">
                ✕ Sorry, there was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
