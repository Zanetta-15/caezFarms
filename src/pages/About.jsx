// About Page - Dedicated page for company information
// Provides more detailed information about CAEZ Farms

import { motion } from 'framer-motion'
import About from '../components/About'

export default function AboutPage() {
  return (
    <main className="page space-y-24">
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-forestSoft">About CAEZ Farms</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-forestDark sm:text-6xl">
              Premium farming rooted in Ghanaian heritage and global innovation.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-forestDark/80">
              Founded in 2025 by Jen and Ed Afful, CAEZ Farms is a modern agricultural company combining sustainable farming with community-centered impact across 200 acres in Kwame Danso.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="glass-card p-10"
          >
            <p className="uppercase tracking-[0.35em] text-sm text-forestSoft">Our Approach</p>
            <h2 className="mt-5 text-4xl font-semibold text-forestDark sm:text-5xl">
              Building a future where agriculture, sustainability, and luxury converge.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-forestDark/75">
              At CAEZ Farms, every decision is guided by environmental stewardship, premium product quality, and meaningful community partnerships that deliver long-term value.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-forestDark/75">
              Sustainable energy is central to our model. CAEZ Farms integrates solar farming into operations to improve energy efficiency, support reliable production, and reduce dependence on conventional power while protecting the environment.
            </p>
          </motion.div>
        </div>
      </section>

      <About />

      <section className="section light">
        <div className="container">
          <h2 className="section-title">Our Commitment</h2>

          <div className="commitment-content lg:grid-cols-2">
            <div className="commitment-card">
              <h3 className="text-2xl font-semibold">Social Responsibility</h3>
              <p className="mt-4 text-base leading-8 text-[#2d2d2d]">
                Our commitment extends beyond farming. CAEZ Farms organizes community health and prevention outreach programs, including blood pressure and diabetes screenings, to promote well-being and strengthen local support systems.
              </p>
            </div>

            <div className="commitment-card">
              <h3 className="text-2xl font-semibold">Environmental Stewardship</h3>
              <p className="mt-4 text-base leading-8 text-[#2d2d2d]">
                Through renewable energy, water-efficient irrigation, and organic practices, CAEZ Farms protects natural resources while producing premium agricultural products for today and tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          
          <div className="values-grid lg:grid-cols-2">
            <div className="value-card text-forestDark">
              <h3 className="text-2xl font-semibold text-forestDark">Sustainability</h3>
              <p className="mt-4 text-base leading-8 text-forestDark/75">
                Environmental responsibility is at the heart of everything we do. We protect natural resources through renewable energy and water conservation for future generations.
              </p>
            </div>

            <div className="value-card text-forestDark">
              <h3 className="text-2xl font-semibold text-forestDark">Quality</h3>
              <p className="mt-4 text-base leading-8 text-forestDark/75">
                Premium agricultural products crafted with care and expertise. Our elite hybrid coconut, cashew, and mango production meets international standards.
              </p>
            </div>

            <div className="value-card text-forestDark">
              <h3 className="text-2xl font-semibold text-forestDark">Innovation</h3>
              <p className="mt-4 text-base leading-8 text-forestDark/75">
                Embracing modern farming techniques, advanced irrigation, and renewable energy to achieve excellence in agriculture while maintaining tradition.
              </p>
            </div>

            <div className="value-card text-forestDark">
              <h3 className="text-2xl font-semibold text-forestDark">Community</h3>
              <p className="mt-4 text-base leading-8 text-forestDark/75">
                Building strong partnerships and creating opportunities that improve lives and promote regional growth in Kwame Danso and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
