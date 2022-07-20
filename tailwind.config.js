const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: {
      DEFAULT: {
        css: {
          'scrollbar-thin': {
            '&::-webkit-scrollbar': {
              width: '5px',
            }
    
          },
          margin: '0 auto',
          padding: '0',
          'max-width': '100%',
          'text-decoration': 'none',
          'color': colors.gray['100'],
          img: {
            'margin-top' : '0',
            'margin-bottom' : '0',
          },
          a: {
            'text-decoration': 'none',
            'font-size': '14px',
            'line-height': '22px',
            'letter-spacing': '2px',
            'margin-top': 0,
            'margin-bottom': 0,
          },
          h1: {
            'font-weight': 900,
            'font-size': '80px',
            'line-height': '80px',
            'text-transform': 'uppercase',
            'margin-top': 0,
            'margin-bottom': 0,
          },
          h2: {
            'font-weight': 900,
            'font-size': '60px',
            'line-height': '60px',
            'text-transform': 'uppercase',
            'margin-top': 0,
            'margin-bottom': 0,
            'text-decoration': 'none',
            'border': 'none'
          },
          h3: {
            'font-weight': 900,
            'font-size': '45px',
            'line-height': '45px',
            'text-transform': 'uppercase',
            'margin-top': 0,
            'margin-bottom': 0,
          },
          h4: {
            'font-weight': 900,
            'font-size': '32px',
            'line-height': '32px',
            'text-transform': 'uppercase',
            'margin-top': 0,
            'margin-bottom': 0,
          },
          h5: {
            'font-weight': 900,
            'font-size': '20px',
            'line-height': '20px',
            'text-transform': 'uppercase',
            'margin-top': 0,
            'margin-bottom': 0,
          },
          span: {
            'line-height': 'auto',
          },
          h6: {
            'font-weight': 700,
            'font-size': '14px',
            'line-height': '14px',
            'text-transform': 'uppercase',
            'margin-top': 0,
            'margin-bottom': 0,
          },
          p: {
            'font-size': '14px',
            'line-height': '22px',
            'letter-spacing': '2px',
            'margin-top': 0,
            'margin-bottom': 0,
          },
          ul: {
            'padding': '0',
            'margin': '0'
          },
          'ul li': {
            padding: '0rem'
          },
          li: {
            'list-style': 'none',
            'padding-left': '0em'
          },
          div: {
            'line-height': '22px',
            'letter-spacing': '0px',
          }
        }
      }
    },
    extend: {
      fontFamily: {
        'dalek': ['dalek']
      },
      animation: {
        'brighten': 'brighten 7s ease-out infinite',
      },
      keyframes: {
        'brighten': {
          '0%': {
            filter: 'brightness(1)'
          },
          '100%': {
            filter: 'brightness(1.3)'
          }
        }
      },
      spacing: {
        'vsm': '10px',
        'vmd': '20px',
        'vlrg': '30px',
        'vxl': '60px'
      },
      width: {
        'page': '1140px'
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        'title': '300px',
        'h1': '80px',
        'h2': '60px',
        'h3': '45px',
        'h4': '32px',
        'h5': '20px',
        'h6': '14px',
        'standfirst': '30px',
        'body': '18px',
        'body-sm': '14px', 
        'body-xs': '12px',
        'xs': '8px'
      },
      letterSpacing: {
        'cta': '2px',
      },
      lineHeight: {
        'cta': '22px',
        'standfirst':'45px',
      },
      colors: {
        'garden': {
          100: '#6da341',
          200: '#598932'
        },
        'river': {
          100: '#4cb6d4',
        },
        'dark': {
          100: '#0d0d0d',
          200: '#11081F',
          300: '#211436',
          400: '#2F2F2F',
          500: '#3F3F3F',
        },
        'light': {
          100: '#fafafa',
          200: '#FAFBFF',
          250: '#EEF0F6',
          300: '#E9EBF3',
          400: '#D8DEE9',
          500: '#C7CFFF',
        },
      }
    },
  }
}