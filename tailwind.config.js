/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor:{
        skin: {
          base: 'var(--color-text-base)',
          'color-text-secondory': 'var(--color-text-secondory)',
          'color-text-gray': 'var(--color-text-gray)'
        }
      },

      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'button-accent': 'var(--color-button-accent)',
          'button-excellent': 'var(--color-button-excellent)',
          'background-gray': 'var(--color-background-gray)'
        }
      },
      
      borderColor: {
        skin:{
          'menu-border': 'var(--color-button-accent)'
        }
      }
    },
  },
  plugins: [],
}
