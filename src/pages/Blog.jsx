// Blog Page - Displays articles and updates about CAEZ Farms
// Shows blog posts with premium storytelling and insight

import { motion } from 'framer-motion'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Sustainable Farming: The Future of Agriculture in Ghana',
      author: 'CAEZ Farms Team',
      date: '2025-08-01',
      category: 'Sustainability',
      excerpt: 'Explore how sustainable farming practices are revolutionizing agriculture in Ghana and creating opportunities for farmers.'
    },
    {
      id: 2,
      title: 'Elite Hybrid Coconut: Premium Quality from CAEZ Farms',
      author: 'Agricultural Team',
      date: '2025-07-25',
      category: 'Products',
      excerpt: 'Learn about our premium hybrid coconut varieties and what makes them stand out in the market.'
    },
    {
      id: 3,
      title: 'Community Healthcare Initiative Reaches 500 Residents',
      author: 'Community Team',
      date: '2025-07-20',
      category: 'Community',
      excerpt: 'Our free healthcare outreach program has successfully screened over 500 community members for preventive health.'
    },
    {
      id: 4,
      title: 'Renewable Energy Powers CAEZ Farms Operations',
      author: 'Sustainability Team',
      date: '2025-07-15',
      category: 'Sustainability',
      excerpt: 'Discover how solar power and renewable energy are making CAEZ Farms a model for sustainable agriculture.'
    }
  ]

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

  return (
    <main className="page space-y-24">
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-forestSoft">Insights & Stories</p>
            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-forestDark sm:text-6xl">
              CAEZ Farms Blog
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-forestDark/75">
              Latest news, project updates, and premium storytelling from our farm in Kwame Danso.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, delay: index * 0.08 }}
                className="glass-card p-10"
              >
                <div className="flex items-center justify-between gap-4 text-sm uppercase tracking-[0.35em] text-forestSoft">
                  <span>{post.category}</span>
                  <span>{formatDate(post.date)}</span>
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-forestDark">{post.title}</h2>
                <p className="mt-4 text-base leading-8 text-forestDark/75">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forestDark transition hover:text-forest"
                >
                  Read More →
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
