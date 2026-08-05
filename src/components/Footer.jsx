// Footer Component - Bottom section of the website
// Contains copyright, social links, and quick navigation

import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest py-16 text-white">
      <div className="mx-auto max-w-7xl space-y-12 px-6 sm:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/80">CAEZ Farms</p>
            <p className="text-lg font-semibold">Sustainable Agriculture, Premium Impact</p>
            <p className="max-w-sm text-sm text-emerald-100/80">
              200 acres of transformative agriculture in Kwame Danso, Bono East Region. Building trust, innovation, and African excellence.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/80">Explore</p>
            <div className="space-y-3 text-sm text-emerald-100/80">
              <Link to="/">Home</Link><br />
              <Link to="/about">About</Link><br />
              <Link to="/products">Farms</Link><br />
              <Link to="/community">Community</Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/80">Contact</p>
            <p className="text-sm text-emerald-100/80">Kwame Danso, Bono East Region, Ghana</p>
            <a className="block text-sm text-emerald-100/80 hover:text-white" href="mailto:info@caezfarms.com">info@caezfarms.com</a>
            <p className="text-sm text-emerald-100/80">Mon - Sat: 8:00 AM - 6:00 PM</p>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/80">Follow</p>
            <div className="grid gap-3 text-sm text-emerald-100/80">
              <a href="https://www.instagram.com/caezfarms?igsh=MTF1MjgyNmN4MmpmaA==" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-200/10 pt-8 text-center text-sm text-emerald-100/70">
          &copy; {currentYear} CAEZ Farms. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
