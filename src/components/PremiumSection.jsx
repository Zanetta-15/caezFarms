import { motion } from 'framer-motion'

export default function PremiumSection({ title, description, children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/80 p-8 shadow-soft backdrop-blur-xl ${className}`}
    >
      <div className="absolute inset-x-16 top-6 h-24 bg-gradient-to-r from-emerald-200/20 via-transparent to-yellow-200/0 blur-3xl" />
      <div className="relative z-10 max-w-4xl">
        <p className="text-sm uppercase tracking-[0.35em] text-forestSoft">{title}</p>
        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-forestDark sm:text-5xl">
          {description}
        </h2>
        <div className="mt-8 text-base text-muted sm:text-lg">{children}</div>
      </div>
    </motion.section>
  )
}
