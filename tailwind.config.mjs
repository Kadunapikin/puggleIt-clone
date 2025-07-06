// tailwind.config.mjs
import tailwindcssAnimate from 'tailwindcss-animate'; // Ensure you have installed tailwindcss-animate

/** @type {import('tailwindcss').Config} */
const config = {
  // IMPORTANT: Ensure these content paths match your project structure.
  // If you chose 'src/' directory, make sure './src/**/*.{js,ts,jsx,tsx,mdx}' is included.
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // <--- Add this line if you use a 'src' directory
  ],
  theme: {
    extend: {
      // CUSTOM CONTAINER CONFIGURATION FOR 1280px WIDTH
      container: {
        center: true, // Centers the container horizontally
        padding: '1rem', // Optional: Adds default padding around content inside the container
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px', // Set the max-width for xl and larger screens
          '2xl': '1280px', // Ensure it doesn't get wider on 2xl
        },
        // You can also use a fixed maxWidth directly for all screens if you don't want breakpoint specifics
        // However, using screens allows smaller widths on smaller devices.
        // If you strictly want 1280px for larger desktops only, the above `screens` config is good.
      },

      // FONT FAMILY DEFINITIONS (from previous steps)
      fontFamily: {
        'heading': ['var(--font-holtwood-one-sc)', 'sans-serif'],
        'body': ['var(--font-dm-sans)', 'sans-serif'],
        'sans': ['var(--font-dm-sans)', 'Arial', 'sans-serif'], // Sets default sans font
      },

      // LINE HEIGHT DEFINITIONS (from previous steps)
      lineHeight: {
        '137': '1.37', // 137%
        '196': '1.96', // 196%
        '210': '2.10', // 210%
      },

      // KEYFRAMES AND ANIMATIONS (from previous steps)
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
  plugins: [tailwindcssAnimate], // Ensure this plugin is present if you use animations
};

export default config;