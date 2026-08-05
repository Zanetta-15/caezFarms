import { motion } from 'framer-motion'

export default function NavButton({ children, to, className = '', ...props }) {
  return (
    <motion.a
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center rounded-full border border-white/20 bg-white/90 px-6 py-3 text-sm font-semibold text-forest shadow-soft backdrop-blur-xl transition duration-300 ease-out ${className}`}
      href={to}
      {...props}
    >
      {children}
    </motion.a>
  )
}
