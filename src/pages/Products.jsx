// Products Page - Dedicated page showcasing CAEZ Farms' crop portfolio
// Features elite hybrid coconut, cashew, and mango production

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BiBoltCircle, BiDroplet, BiLeaf } from 'react-icons/bi'
import coconutSprout1 from '../../images/coconut sprout 1.jpeg'
import coconutSprout2 from '../../images/coconut sprout 2.jpeg'

export default function Products() {
  return (
    <main className="page space-y-24">
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="space-y-6"
          >
            <h1>200 Acres of Sustainable Excellence</h1>
            <p className="max-w-3xl mx-auto text-lg text-forestDark/75">
              Located in the heart of Ghana, CAEZ Farms is dedicated to premium organic farming and pioneering agricultural practices.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="space-y-8"
            >
              <span className="inline-flex rounded-full border border-forest/15 bg-forest/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-forestDark">
                Kwame Danso, Bono East Region
              </span>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-forestDark sm:text-5xl">
                200 Acres of Sustainable Excellence
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="glass-card p-8">
                  <p className="text-4xl font-semibold text-forestDark">200</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.35em] text-forestSoft">Acres</p>
                </div>
                <div className="glass-card p-8">
                  <p className="text-4xl font-semibold text-forestDark">100%</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.35em] text-forestSoft">Organic</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="overflow-hidden rounded-[2rem] border border-forest/10 bg-white/90 shadow-soft"
            >
              <img
                src={coconutSprout1}
                alt="Coconut sprout cultivation"
                className="h-[520px] w-full object-cover sm:h-[620px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="section-title">Elite Cultivation Portfolio</h2>
            <p className="mx-auto max-w-3xl text-base leading-8 text-forestDark/75">
              Specializing in premium crops engineered for superior yield and sustainability.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="grid gap-6"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-forest/10 shadow-soft">
                <span className="absolute left-6 top-6 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.35em] text-forestDark shadow-soft">
                  Primary Focus
                </span>
                <img
                  src={coconutSprout2}
                  alt="Elite Hybrid Coconut"
                  className="h-[480px] w-full object-cover sm:h-[520px]"
                />
              </div>
              <div className="glass-card p-8">
                <h3 className="text-3xl font-semibold text-forestDark">Elite Hybrid Coconut</h3>
                <p className="mt-4 text-base leading-8 text-forestDark/75">
                  Our specialized hybrid coconut cultivation delivers superior quality products for the discerning market.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-forest/5 px-4 py-2 text-sm font-semibold text-forestDark">Premium Genetics</span>
                  <span className="rounded-full bg-forest/5 px-4 py-2 text-sm font-semibold text-forestDark">Organic Stewardship</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
              className="space-y-6"
            >
              <div className="glass-card p-8">
                <h3 className="text-3xl font-semibold text-forestDark">Cashew & Mango Production</h3>
                <p className="mt-4 text-base leading-8 text-forestDark/75">
                  We are expanding our commercial footprint with strategic production of high-grade cashews and mangos.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-forest/5 px-4 py-2 text-sm font-semibold text-forestDark">High Yield</span>
                  <span className="rounded-full bg-forest/5 px-4 py-2 text-sm font-semibold text-forestDark">Premium Quality</span>
                </div>
                <Link to="/contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5">
                  Request Information
                </Link>
              </div>

              <div className="glass-card p-8 bg-forest text-white">
                <h4 className="text-2xl font-semibold">Operational Excellence</h4>
                <p className="mt-4 text-base leading-8 text-white/80">
                  CAEZ Farms is powered by renewable energy systems and efficient farming methods that protect land and strengthen production.
                </p>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="font-semibold">Renewable Energy</p>
                    <p className="mt-2 text-sm text-white/80">Solar-powered operations for smarter farming.</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="font-semibold">Water Conservation</p>
                    <p className="mt-2 text-sm text-white/80">Advanced irrigation systems for higher efficiency.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="space-y-8 text-center">
            <h2 className="section-title">Sustainable Innovation</h2>
            <p className="mx-auto max-w-3xl text-base leading-8 text-forestDark/75">
              Modern farming systems, renewable power, and responsible stewardship create a premium model for agriculture.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { icon: <BiBoltCircle className="h-7 w-7 text-forestDark" />, title: 'Renewable Energy', description: 'Our operations are powered by sustainable energy to reduce environmental impact.' },
              { icon: <BiDroplet className="h-7 w-7 text-forestDark" />, title: 'Advanced Irrigation', description: 'Water-efficient systems designed for reliability and yield.' },
              { icon: <BiLeaf className="h-7 w-7 text-forestDark" />, title: 'Environmental Stewardship', description: 'Protecting natural resources and biodiversity for future generations.' }
            ].map((item) => (
              <div key={item.title} className="glass-card p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-forest/10">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-forestDark">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-forestDark/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Invest in Premium African Agriculture
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-white/80">
              Partner with CAEZ Farms for sustainable growth and quality crops.
            </p>
            <div className="mx-auto flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-secondary">Become a Partner</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
