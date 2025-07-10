/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Lufga-Regular', 'sans-serif'],
        'urbanist': ['Urbanist', 'sans-serif'],
      },
       keyframes: {
        doodle: {
          '0%, 100%': { opacity: 0, transform: 'scale(0.5)' },
          '50%': { opacity: 1, transform: 'scale(1)' },
        }
      },
      animation: {
        'doodle-animation': 'doodle 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}