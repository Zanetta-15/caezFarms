// Contact Page - Dedicated page for contact form and information
// Provides multiple ways for users to get in touch

import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <main className="page space-y-24">
      <section className="page-header">
        <div className="container">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-forestSoft">Connect With Us</p>
            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-forestDark sm:text-6xl">
              Contact CAEZ Farms
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-forestDark/75">
              We’d love to hear from you. Reach out for partnership inquiries, product information, or impact collaborations.
            </p>
          </div>
        </div>
      </section>

      <Contact />

      <section className="section light">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="section-title">Find Us</h2>
            <p className="mx-auto max-w-3xl text-base leading-8 text-forestDark/75">
              Visit our location in Kwame Danso or open the farm directly in Google Maps for turn-by-turn directions.
            </p>
          </div>

          <div className="glass-card overflow-hidden border border-forest/10 bg-white/90 p-0 shadow-soft">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-[2rem]">
              <iframe
                title="Kwame Danso location"
                src="https://maps.google.com/maps?q=Kwame%20Danso%2C%20Bono%20East%20Region%2C%20Ghana&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            <div className="border-t border-forest/10 bg-cream/80 px-8 py-6 text-center">
              <a
                href="https://maps.app.goo.gl/MZ93J73KxgMLj6X67"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-forest bg-white px-6 py-3 text-sm font-semibold text-forestDark transition duration-300 hover:bg-forest/5"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
