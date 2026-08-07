// Header Component - Main navigation bar for the website
// Displays logo, navigation links, and contact button

import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logoImage from '../../images/caezfarmlogo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/10 bg-cream/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-10">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-forest text-white shadow-soft">
            <img src={logoImage} alt="CAEZ Farms logo" className="h-10 w-10 object-contain" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-forestSoft">CAEZ Farms</p>
            <p className="text-lg font-semibold text-forestDark">Kwame Danso, Ghana</p>
          </div>
        </Link>

        <nav className={`hidden items-center gap-8 text-sm font-medium text-forestDark md:flex`}>
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/products', label: 'Farms' },
            { to: '/blog', label: 'Blog' },
            { to: '/community', label: 'Community' }
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `transition duration-300 ${isActive ? 'text-forest border-b-2 border-forest pb-1' : 'text-forestDark/80 hover:text-forest'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream shadow-soft transition duration-300 hover:-translate-y-0.5">
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-forestSoft/15 bg-white shadow-soft md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`block h-0.5 w-6 bg-forest transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-0.5 w-6 bg-forest transition duration-300 ${isMenuOpen ? 'opacity-0' : 'mt-2'}`} />
          <span className={`block h-0.5 w-6 bg-forest transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'mt-2'}`} />
        </button>
      </div>

      <div className={`overflow-hidden border-t border-forestSoft/10 bg-cream/95 transition-all duration-300 md:hidden ${isMenuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-2 px-6 py-4">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/products', label: 'Farms' },
            { to: '/blog', label: 'Blog' },
            { to: '/community', label: 'Community' }
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-forest text-cream' : 'text-forestDark/80 hover:bg-forest/5 hover:text-forest'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="mailto:eafful@caezfarms.com"
            className="block rounded-2xl bg-forest px-4 py-3 text-center text-sm font-semibold text-cream shadow-soft"
            onClick={closeMenu}
          >
            Contact Us
          </a>
        </div>
      </div>
    </motion.header>
  )
}
