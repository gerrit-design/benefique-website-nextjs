import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        benefique: {
          navy: '#1B365D',
          orange: '#F97316',
          gray: '#F8FAFC',
        }
      }
    },
  },
  plugins: [],
}

export default config
