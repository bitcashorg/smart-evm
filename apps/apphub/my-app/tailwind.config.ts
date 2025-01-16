const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')
const svgToDataUri = require('mini-svg-data-uri')
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '../../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        md: '2rem',
      },
      screens: {
        '2xl': '1600px',
      },
    },
    extend: {
      colors: {
        border: 'hsla(var(--border))',
        input: 'hsla(var(--input))',
        ring: 'hsla(var(--ring))',
        background: 'hsla(var(--background))',
        foreground: 'hsla(var(--foreground))',
        textInfoForeground: '#17154C',
        infoForeground: '#9395AF',
        cornflowerblue: {
          100: 'rgba(125, 129, 217, 0.2)',
          200: 'rgba(125, 129, 217, 0.2)',
        },
        primary: {
          DEFAULT: 'hsla(var(--primary))',
          foreground: 'hsla(var(--primary-foreground))',
          100: '#D2F7DF',
          200: '#1ED761',
          300: '#78E7A0',
          400: '#4BDF81',
          500: '#1ED761',
          600: '#18AC4E',
          700: '#12813A',
          800: '#0C5627',
          900: '#062B13',
        },
        secondary: {
          DEFAULT: 'hsla(var(--secondary))',
          foreground: 'hsla(var(--secondary-foreground))',
          100: '#535461',
          200: '#040216',
          300: '#080821',
          400: '#F5F5F5',
          500: '#5361FF',
          600: '#9A9EFC',
        },
        tertiary: {
          // TODO: upt to secondary the var(--accent) colour with HSLA values
          DEFAULT: 'hsla(var(--accent))',
          foreground: 'hsla(var(--accent-foreground))',
        },
        accent: {
          // TODO: use the var(--accent) colour here after updating HSLA values
          DEFAULT: '#845BBF',
          foreground: 'hsla(var(--accent-foreground))',
          400: '#FF51ED',
          500: '#845BBF',
          600: '#433974',
          700: '#E828AA',
        },
        destructive: {
          DEFAULT: 'hsla(var(--destructive))',
          foreground: 'hsla(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsla(var(--success))',
          foreground: 'hsla(var(--success-foreground))',
        },
        muted: {
          DEFAULT: 'hsla(var(--muted))',
          foreground: 'hsla(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsla(var(--popover))',
          foreground: 'hsla(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsla(var(--card))',
          foreground: 'hsla(var(--card-foreground))',
        },
        alert: {
          DEFAULT: 'hsla(var(--alert))',
        },
      },
      background: {
        cornflowerblue: {
          100: 'rgba(125, 129, 217, 0.5)',
          200: 'rgba(125, 129, 217, 0.43)',
        },
      },
      backgroundImage: {
        headerBlue:
          'linear-gradient(334deg, rgba(255, 255, 255, 0.00) 57.71%, rgba(255, 255, 255, 0.15) 245.65%), #0F113E;',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        cards: '12px',
        inputs: '8px',
        images: '30px',
        buttons: '5px',
        'inputs-shaped': '100px',
        'check-box': '4px',
      },
      fontFamily: {
        sans: ['Futura PT', ...fontFamily.sans],
        'futura-pt-bold': ['Futura PT Bold', 'sans-serif'],
        'futura-pt-demi': ['Futura PT Demi', 'sans-serif'],
        'lufga-bold': 'var(--font-lufga-bold)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
          '50%': {
            transform: 'translateX(50%) translateY(10%)',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(50%)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
      },
      fontSize: {
        'h1-lg': ['64px', { lineHeight: '72px' }],
        'h1-md': [
          '60px',
          { lineHeight: '72px' },
          { fontFamily: 'futura-pt-bold' },
        ],
        'h2-lg': ['64px', { lineHeight: '64px' }],
        'h2-md': ['48px', { lineHeight: '64px' }],
        'h3-lg': ['48px', { lineHeight: '48px' }],
        'h3-md': ['40px', { lineHeight: '48px' }],
        'sub-1-lg': ['36px', { lineHeight: '40px' }],
        'sub-1-md': ['28px', { lineHeight: '40px' }],
        'sub-2-lg': [
          '22px',
          { lineHeight: '28px' },
          { fontFamily: 'futura-pt-bold' },
        ],
        'sub-2-md': [
          '18px',
          { lineHeight: '28px' },
          { fontFamily: 'futura-pt-bold' },
        ],
        buttons: ['18px', { lineHeight: '28px' }],
        'b-1-sbold-md': [
          '18px',
          { lineHeight: '28px' },
          { fontFamily: 'futura-pt-bold' },
        ],
        'b-1-sbold-lg': ['18px', { lineHeight: '28px' }],
        'b-1-lg': [
          '18px',
          { lineHeight: '28px' },
          { fontFamily: 'futura-pt-heavy' },
        ],
        'b-1-md': ['18px', { lineHeight: '28px' }],
        'b-1-book': [
          '18px',
          { lineHeight: '28px' },
          { fontFamily: 'futura-pt-book' },
        ],
        'b-2-lg': [
          '16px',
          { lineHeight: '24px' },
          { fontFamily: 'futura-pt-heavy' },
        ],
        'b-2-md': [
          '16px',
          { lineHeight: '24px' },
          { fontFamily: 'futura-pt-medium' },
        ],
        'h-text': [
          '16px',
          { lineHeight: '18.75px' },
          { fontFamily: 'futura-pt-heavy' },
        ],
        'p-text': [
          '20px',
          { lineHeight: '23.44px' },
          { fontFamily: 'futura-pt-book' },
        ],
        'footer-text': [
          '18px',
          { lineHeight: '21px' },
          { fontFamily: 'futura-pt-book' },
        ],
        'lp-h1-lg': ['80px', { lineHeight: '100px' }],
        'lp-h1-md': ['48px', { lineHeight: '60px' }],
        'lp-h2-sub-lg': ['44px', { lineHeight: '77px' }],
        'lp-sub-text': ['33px', { lineHeight: '57.7px' }],
        'lp-sub-text-2': ['44px', { lineHeight: '55px' }],
        'lp-sub-text-3': ['20px', { lineHeight: '25px' }],
        'lp-text': ['18px', { lineHeight: '31.5px' }],
        'lp-text-2': ['16px', { lineHeight: '26.2px' }],
        'lp-text-3': ['34px', { lineHeight: '42.5px' }],
      },
      spacing: {
        'space-4': '4px',
        'space-6': '6px',
        'space-8': '8px',
        'space-10': '10px',
        'space-12': '12px',
        'space-15': '15px',
        'space-16': '16px',
        'space-17': '17px',
        'space-20': '20px',
        'space-24': '24px',
        'space-25': '25px',
        'space-30': '30px',
        'space-40': '40px',
        'space-45': '45px',
        'space-50': '50px',
        'space-70': '70px',
        'space-76': '76px',
        'space-80': '80px',
        'space-90': '90px',
        'space-110': '110px',
        'space-120': '120px',
        'space-127': '127px',
        'space-130': '130px',
        'space-146': '146px',
        'space-150': '150px',
        'space-157': '157px',
        'space-176': '176px',
        'space-198': '198px',
        'space-213': '213px',
        'space-250': '250px',
        'space-290': '290px',
        'space-300': '300px',
        'space-400': '400px',
        'space-424': '424.83px',
        'space-440': '440px',
        'space-465': '465px',
        'space-800': '800px',

        //  icons
        'icon-xs': '12px',
        'icon-sm': '16px',
        'icon-md': '24px',
        'icon-lg': '48px',
        'icon-xlg': '56px',

        //buttons
        'hug-w-sm': '70px',
        'hug-h-sm': '36px',
        'hug-w-md': '86px',
        'hug-h-md': '40px',
        'hug-w-lg': '94px',
        'hug-h-lg': '48px',
      },
      boxShadow: {
        f1: '4px 6px 20px 0px #78E7A033',
        f2: '4px 6px 13px 0px #DEE2E680',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    addVariablesForColors,
  ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  )

  addBase({
    ':root': newVars,
  })
}
