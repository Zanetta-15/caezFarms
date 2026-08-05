export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#0F5132',
        forestDark: '#0B2E1E',
        forestLight: '#255339',
        forestSoft: '#236241',
        ivory: '#FAF5EE',
        cream: '#F7F3EA',
        sand: '#E7DDCC',
        accent: '#B48A58',
        accentSoft: '#F8D7A3',
        muted: '#5D5A50',
        text: '#0F2F1F'
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Sora', 'Georgia', 'serif']
      },
      boxShadow: {
        glow: '0 24px 100px rgba(15, 81, 50, 0.18)',
        soft: '0 18px 48px rgba(15, 81, 50, 0.08)' 
      },
      backgroundImage: {
        'hero-spot': 'radial-gradient(circle at top left, rgba(255,255,255,0.48), transparent 24%), radial-gradient(circle at 80% 10%, rgba(180,138,88,0.18), transparent 18%)'
      }
    }
  },
  plugins: [],
}
