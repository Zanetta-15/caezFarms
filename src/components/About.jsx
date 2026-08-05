// About Component - Section showcasing company information
// Displays mission, vision, and key company details

export default function About() {
  return (
    <section className="section">
      <div className="container space-y-16">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-forestSoft">Who We Are</p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-forestDark sm:text-5xl">
            Premium agriculture powered by purpose, innovation, and community.
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="grid gap-6">
            <div className="glass-card p-10">
              <h3 className="text-2xl font-semibold text-forestDark">Our Mission</h3>
              <p className="mt-4 text-base leading-8 text-forestDark/75">
                To produce premium agricultural products through sustainable farming practices while promoting food security, environmental stewardship, and economic growth that benefits both present and future generations.
              </p>
            </div>
            <div className="glass-card p-10">
              <h3 className="text-2xl font-semibold text-forestDark">Our Vision</h3>
              <p className="mt-4 text-base leading-8 text-forestDark/75">
                To become one of Africa's leading sustainable agricultural enterprises, recognized for innovation, environmental responsibility, premium crop production, and meaningful community impact.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="glass-card p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-forestSoft">Key Facts</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { value: '200', label: 'Acres of fertile land' },
                  { value: '2025', label: 'Year founded' },
                  { value: '3', label: 'Primary crops' },
                  { value: '100%', label: 'Organic & sustainable' }
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.75rem] bg-forest/5 p-6">
                    <p className="text-4xl font-semibold text-forestDark">{item.value}</p>
                    <p className="mt-3 text-sm uppercase tracking-[0.35em] text-forestSoft">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { title: 'Location', description: 'Kwame Danso, Bono East Region, Ghana' },
            { title: 'Founded By', description: 'Jen and Ed Afful — Ghanaian entrepreneurs based in the United States' },
            { title: 'Focus Areas', description: 'Elite hybrid coconut, commercial cashew, and mango production' }
          ].map((item) => (
            <div key={item.title} className="glass-card p-8">
              <h4 className="text-xl font-semibold text-forestDark">{item.title}</h4>
              <p className="mt-4 text-base leading-7 text-forestDark/75">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
