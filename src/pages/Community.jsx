// Community Page - Showcases CAEZ Farms' community engagement and social impact
// Highlights healthcare programs, employment, and local development initiatives

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BiGroup, BiLeaf, BiRocket } from 'react-icons/bi'
import teamImage1 from '../../images/Ed and farm team 1.jpeg'
import teamImage2 from '../../images/Ed and farm team 2.jpeg'
import teamImage3 from '../../images/Ed and team 3.jpeg'

export default function CommunityPage() {
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
            <h1>Investing in the Roots of Ghana</h1>
            <p className="max-w-3xl mx-auto text-lg text-forestDark/75">
              Agriculture beyond the farm gates — creating prosperity through local development, healthcare, and sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8"
            >
              <span className="inline-flex rounded-full border border-forest/15 bg-forest/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-forestDark">
                Our Legacy
              </span>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-forestDark sm:text-5xl">
                Investing in the roots of Ghana and the people who grow it.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-forestDark/75">
                Founded in 2025 by Jen and Ed Afful, CAEZ Farms represents the vision of Ghanaian entrepreneurs dedicated to sustainable growth and community improvement.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-forest/10 bg-white/85 px-4 py-2 text-sm font-semibold text-forestDark shadow-soft">
                  Employment Opportunities
                </span>
                <span className="rounded-full border border-forest/10 bg-white/85 px-4 py-2 text-sm font-semibold text-forestDark shadow-soft">
                  Healthcare Programs
                </span>
                <span className="rounded-full border border-forest/10 bg-white/85 px-4 py-2 text-sm font-semibold text-forestDark shadow-soft">
                  Local Development
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="overflow-hidden rounded-[2rem] border border-forest/10 bg-white/90 shadow-soft"
            >
              <img
                src={teamImage1}
                alt="CAEZ Farms team"
                className="h-[520px] w-full object-cover object-top sm:h-[620px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="space-y-4"
            >
              <h2 className="section-title">The Founders' Journey</h2>
              <p className="mx-auto max-w-3xl text-center text-forestDark/75">
                A path of sustainable entrepreneurship rooted in premium agriculture, community support, and a mission to build a lasting legacy for Ghana.
              </p>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
                className="grid gap-6"
              >
                <div className="glass-card p-8">
                  <span className="inline-flex rounded-full border border-forest/10 bg-forest/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-forestDark">
                    The Founders' Journey
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-forestDark">Bridging the Gap</h3>
                  <p className="mt-4 text-base leading-8 text-forestDark/75">
                    Jen and Ed Afful founded CAEZ Farms to bridge international innovation with local agricultural tradition, creating a premium model for sustainable farming.
                  </p>
                </div>

                <div className="glass-card p-8">
                  <span className="inline-flex rounded-full border border-forest/10 bg-forest/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-forestDark">
                    Community First
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-forestDark">Empowering Local Growth</h3>
                  <p className="mt-4 text-base leading-8 text-forestDark/75">
                    We create meaningful employment, support local economic development, and invest in initiatives that improve quality of life.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                className="grid gap-6"
              >
                <img
                  src={teamImage3}
                  alt="Bridging the gap"
                  className="h-[340px] w-full rounded-[2rem] object-cover object-top shadow-soft"
                />
                <img
                  src={teamImage2}
                  alt="Community partnership"
                  className="h-[340px] w-full rounded-[2rem] object-cover object-top shadow-soft"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="glass-card border-forest/10 bg-white/95 p-10 shadow-soft"
          >
            <h3 className="text-3xl font-semibold text-forestDark">Free Community Healthcare Programs</h3>
            <p className="mt-4 text-base leading-8 text-forestDark/75">
              CAEZ Farms organizes regular free healthcare outreach programs, including blood pressure and diabetes screenings, to promote preventive healthcare and improve community well-being.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="space-y-8"
          >
            <h2 className="section-title">Our Community Impact</h2>
            <p className="mx-auto max-w-3xl text-center text-forestDark/75">
              Meaningful initiatives designed to create prosperity, health, and opportunity for local residents.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Employment Opportunities',
                description: 'Creating meaningful jobs for local community members, supporting economic growth and sustainable livelihood.'
              },
              {
                title: 'Local Development',
                description: 'Supporting education, infrastructure, and community-led initiatives for long-term regional growth.'
              },
              {
                title: 'Healthcare Programs',
                description: 'Free outreach programs promoting preventive health for the surrounding area.'
              },
              {
                title: 'Sustainable Partnerships',
                description: 'Working with communities to ensure agriculture benefits both land and people.'
              }
            ].map((item) => (
              <div key={item.title} className="glass-card p-8">
                <h3 className="text-xl font-semibold text-forestDark">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-forestDark/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="space-y-10"
          >
            <h2 className="section-title">Our Core Values</h2>

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  icon: <BiGroup className="h-7 w-7 text-forestDark" />,
                  title: 'Community',
                  description: 'Building strong partnerships and creating opportunities for meaningful impact.'
                },
                {
                  icon: <BiLeaf className="h-7 w-7 text-forestDark" />,
                  title: 'Sustainability',
                  description: 'Protecting natural resources and biodiversity for present and future generations.'
                },
                {
                  icon: <BiRocket className="h-7 w-7 text-forestDark" />,
                  title: 'Innovation',
                  description: 'Combining modern farming techniques with local knowledge for sustainable growth.'
                }
              ].map((item) => (
                <div key={item.title} className="glass-card p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest/10">
                    {item.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-forestDark">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-forestDark/90">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section dark">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Ready to partner with the future of African agriculture?
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-white/80">
              Join us in creating sustainable prosperity for communities and long-term impact.
            </p>
            <div className="mx-auto flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-secondary">Become a Partner</Link>
              <Link to="/blog" className="btn-outline">Learn More Stories</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
