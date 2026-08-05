// Hero Component - Large banner section with main call-to-action
// Displays hero image, headline, and action buttons

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import farmAerialImage from '../../images/farm-aerial-shot.jpeg'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 56, 32, 0.55), rgba(12, 56, 32, 0.55)), url(${farmAerialImage})`
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_28%)]" />
      <div className="absolute -left-16 top-16 h-48 w-48 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-yellow-200/20 blur-3xl" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-20 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/80 backdrop-blur-md">
            Growing Ghana’s Future
          </span>
          <h1 className="mt-8 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Growing Ghana’s future with sustainable innovation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            CAEZ Farms blends premium agriculture, renewable energy, and community impact across 200 acres of fertile farmland in Kwame Danso.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/about" className="inline-flex items-center justify-center rounded-full bg-cream px-8 py-3 text-sm font-semibold text-forest shadow-glow transition duration-300 hover:-translate-y-0.5">
              Explore Our Story
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/20">
              Partner With Us
            </Link>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {[
              { value: '200+', label: 'Acres under premium cultivation' },
              { value: '2025', label: 'Founded to innovate agriculture' },
              { value: '100%', label: 'Organic and regenerative practices' }
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl"
              >
                <p className="text-4xl font-semibold tracking-[-0.04em] text-white">{item.value}</p>
                <p className="mt-3 text-sm text-white/70">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
