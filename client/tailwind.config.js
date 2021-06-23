module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
              transform: 'rotate(-8deg)'
          },
          '50%': {
              transform: 'rotate(8deg)'
          },
        },
          'fade-in-down': {
              '0%': {
                  opacity: '0',
                  transform: 'translateY(-10px)'
              },
              '100%': {
                  opacity: '1',
                  transform: 'translateY(0)'
              },
          }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
          'fade-in-down': 'fade-in-down 5s ease-out',
      }
  },
},


  variants: {
    extend: { 
      width: ["responsive", "hover", "focus"],
      fontSize: ['hover', 'focus'],
    },
  },
  plugins: [],
}
