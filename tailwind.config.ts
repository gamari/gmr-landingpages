import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "company1": {
          "primary": "#1e40af",
          "secondary": "#bfdbfe",
          "info": "#e5e7eb",
        },
        "company2": {
          "primary": "rgb(23,37,84)",
          "secondary": "rgb(56,189,248)"
        }
      }
    },
  },
  plugins: [],
}
export default config
