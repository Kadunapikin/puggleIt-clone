// tailwind.config.mjs
import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1280px',
        },
      },
      fontFamily: {
        'heading': ['var(--font-holtwood-one-sc)', 'sans-serif'],
        'body': ['var(--font-dm-sans)', 'sans-serif'],
        'sans': ['var(--font-dm-sans)', 'Arial', 'sans-serif'],
      },
      lineHeight: {
        '137': '1.37',
        '183': '1.83', // <--- IMPORTANT: NEW line height for 183%
        '196': '1.96',
        '210': '2.10',
      },
      letterSpacing: {
        '5p': '0.05em', // <--- IMPORTANT: NEW letter spacing for 5%
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;