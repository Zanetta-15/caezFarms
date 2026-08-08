// About Page - Dedicated page for company information
// Provides more detailed information about CAEZ Farms

import { motion } from 'framer-motion'
import About from '../components/About'

export default function AboutPage() {
  const approachPoints = [
    ['Stewardship', 'We manage land and water with care so every harvest supports long-term resilience.'],
    ['Quality', 'Our premium crops are grown with precision, consistency, and a focus on excellence.'],
    ['Community', 'Local partnerships and outreach remain central to everything we build.']
  ]

  return (
    <main className="page space-y-16 sm:space-y-24">
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-forest/10 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-forestSoft shadow-soft">
              About CAEZ Farms
            </div>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-forestDark sm:text-6xl">
              Premium farming rooted in Ghanaian heritage and global innovation.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-forestDark/80">
              Founded in 2025 by Jen and Ed Afful, CAEZ Farms blends regenerative agriculture, premium crop production, and community-led impact across 200 acres in Kwame Danso.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {['Sustainable', 'Premium Crops', 'Community-led'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-forest/10 bg-white/80 px-4 py-2 text-sm font-medium text-forestDark shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
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
            className="glass-card overflow-hidden shadow-soft"
          >
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-forestSoft">Our Approach</p>
                <h2 className="mt-5 text-3xl font-semibold text-forestDark sm:text-4xl">
                  Building a future where agriculture, sustainability, and luxury converge.
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-forestDark/75">
                  At CAEZ Farms, every decision is guided by environmental stewardship, premium product quality, and meaningful community partnerships that deliver long-term value.
                </p>
                <p className="mt-6 max-w-3xl text-base leading-8 text-forestDark/75">
                  Sustainable energy is central to our model. We integrate solar farming into operations to improve energy efficiency, support reliable production, and reduce dependence on conventional power while protecting the environment.
                </p>
              </div>

              <div className="border-t border-forest/10 bg-forest/5 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-forestSoft">What guides us</p>
                <div className="mt-6 space-y-4">
                  {approachPoints.map(([title, description]) => (
                    <div key={title} className="rounded-[1.25rem] border border-forest/10 bg-white/90 p-5 shadow-sm">
                      <h3 className="text-lg font-semibold text-forestDark">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-forestDark/75">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
