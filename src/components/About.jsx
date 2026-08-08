// About Component - Section showcasing company information
// Displays mission, vision, and key company details

export default function About() {
  const facts = [
    { value: '200', label: 'Acres of fertile land' },
    { value: '2025', label: 'Year founded' },
    { value: '3', label: 'Primary crops' },
    { value: '100%', label: 'Organic & sustainable' }
  ]

  const details = [
    { title: 'Location', description: 'Kwame Danso, Bono East Region, Ghana' },
    { title: 'Founded By', description: 'Jen and Ed Afful — Ghanaian entrepreneurs based in the United States' },
    { title: 'Focus Areas', description: 'Elite hybrid coconut, commercial cashew, and mango production' }
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container">
        <div className="rounded-[2.5rem] border border-forest/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(247,243,234,0.95))] p-8 shadow-soft sm:p-10 lg:p-12">
          <div className="space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-forestSoft">Who We Are</p>
            <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-forestDark sm:text-4xl lg:text-5xl">
              Premium agriculture powered by purpose, innovation, and community.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="grid gap-6">
              <div className="rounded-[1.75rem] border border-forest/10 bg-white/95 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-forestDark">Our Mission</h3>
                <p className="mt-4 text-base leading-8 text-forestDark/75">
                  To produce premium agricultural products through sustainable farming practices while promoting food security, environmental stewardship, and economic growth that benefits both present and future generations.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-forest/10 bg-white/95 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-forestDark">Our Vision</h3>
                <p className="mt-4 text-base leading-8 text-forestDark/75">
                  To become one of Africa's leading sustainable agricultural enterprises, recognized for innovation, environmental responsibility, premium crop production, and meaningful community impact.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-forest/10 bg-forest/5 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-forestSoft">Key Facts</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {facts.map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-forest/10 bg-white/90 p-6 shadow-sm">
                    <p className="text-4xl font-semibold text-forestDark">{item.value}</p>
                    <p className="mt-3 text-sm uppercase tracking-[0.3em] text-forestSoft">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] border border-forest/10 bg-white/95 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-forestSoft">Why it matters</p>
                <p className="mt-3 text-base leading-7 text-forestDark/75">
                  We combine global standards with Ghanaian roots to create products that are resilient, refined, and responsibly produced.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {details.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-forest/10 bg-white/90 p-8 shadow-sm">
                <h4 className="text-xl font-semibold text-forestDark">{item.title}</h4>
                <p className="mt-4 text-base leading-7 text-forestDark/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
