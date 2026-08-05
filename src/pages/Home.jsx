// Home Page - Premium landing page for CAEZ Farms
// Uses Tailwind and motion to create cinematic brand storytelling

import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ImageCarousel from '../components/ImageCarousel'
import { Link } from 'react-router-dom'

const featureCards = [
  {
    title: 'Regenerative agriculture',
    description: 'Blending soil science, organic crops, and renewable systems to restore land and build premium food value.'
  },
  {
    title: 'Community prosperity',
    description: 'Local job creation, education partnerships, and health initiatives that lift Kwame Danso and the surrounding region.'
  },
  {
    title: 'Luxury crop quality',
    description: 'Elite hybrid coconut, cashew, and mango products cultivated with precision for higher market demand.'
  }
]

const impactStats = [
  { value: '200', label: 'Acres of fertile land' },
  { value: '120+', label: 'Local community partners' },
  { value: '15M', label: 'Liters of water saved annually' }
]

export default function Home() {
  return (
    <main className="space-y-32 pb-20">
      <Hero />

      <section className="relative overflow-hidden px-6 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-forest/15 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.38em] text-forestDark shadow-soft backdrop-blur-xl">
              About CAEZ Farms
            </div>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-forestDark sm:text-5xl">
              A premium agricultural legacy rooted in Ghanaian innovation and stewardship.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-forestDark/80 sm:text-xl">
              CAEZ Farms is cultivating a new chapter for Ghanaian agriculture — with luxury-quality crops, renewable energy, and regenerative practices that nourish people and planet.
            </p>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
              <div className="glass-card p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-forestSoft">Founded</p>
                <p className="mt-4 text-3xl font-semibold text-forestDark">2025</p>
                <p className="mt-3 text-sm text-forestDark/70">Established to build sustainable agricultural excellence in Kwame Danso.</p>
              </div>
              <div className="glass-card p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-forestSoft">Location</p>
                <p className="mt-4 text-3xl font-semibold text-forestDark">Kwame Danso</p>
                <p className="mt-3 text-sm text-forestDark/70">Bono East Region, Ghana — where innovation meets fertile land and local impact.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary">Our Story</Link>
              <Link to="/community" className="btn-outline">Community Impact</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-amber-200/20 blur-3xl" />
            <div className="glass-card overflow-hidden p-0 shadow-glow">
              <ImageCarousel />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_0.95fr] lg:items-end lg:gap-16">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-forest/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-forestDark">
                Sustainability & Innovation
              </span>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-forestDark sm:text-5xl">
                Luxury agriculture designed for people, planet, and prosperity.
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-forestDark/80">
                From water-efficient irrigation and solar energy to premium crop genetics, every part of CAEZ Farms is built for resilience and long-term value.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {featureCards.map((card) => (
                <motion.div
                  key={card.title}
                  whileHover={{ y: -6 }}
                  className="glass-card p-8"
                >
                  <p className="text-lg font-semibold text-forestDark">{card.title}</p>
                  <p className="mt-3 text-sm leading-7 text-forestDark/70">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_top,_rgba(15,81,50,0.08),transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.9),rgba(255,255,255,0.98))] px-6 sm:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-forest/10 bg-white/90 p-10 shadow-soft backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-3">
            {impactStats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="space-y-3"
              >
                <p className="text-5xl font-semibold tracking-[-0.04em] text-forestDark">{item.value}</p>
                <p className="text-sm uppercase tracking-[0.35em] text-forestSoft">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-forest/10 bg-forest/5 p-10 text-center shadow-soft">
          <p className="text-sm uppercase tracking-[0.35em] text-forestSoft">Luxury agriculture</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-forestDark sm:text-5xl">
            Crafting a premium future for Ghana’s food systems.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/products" className="btn-primary">Explore Products</Link>
            <Link to="/community" className="btn-outline">Community Impact</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
