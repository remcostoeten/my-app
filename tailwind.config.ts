
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        // Darks (bg, cards etc)
        'dark-bg': 'var(--dark-bg)', // used in footer 
        'dark-section': 'var(--dark-section)', // used as sections (cards for example)
        'dark-section--lighter': 'var(--dark-section--lighter)', // used as sections (cards for example)
        'body-gradient': 'var(--body-gradient)', // used in footer

        brand: 'var(--primary)', // primary  hover etc
        // Custom theme specific colors
        'primary--darker': 'var(--primary--darker)', // primary  hover etc

        // Text colors
        muted: {
          muted: 'var(--muted)', // footer, paragraph - sub(?) text
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted)',
        },
        white: 'var(--white)',

        // Borders
        seperator: 'var(--seperator)',
        border: 'var(--border)',
        // seperator: 'var(--border)', // used in input fields

        // Vibrant colors
        error: 'var(--error)', // red
        success: 'var(--success)', // lime--green

        // Shadcn colors
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        // muted: {
        //   DEFAULT: 'hsl(var(--muted))',
        //   foreground: 'hsl(var(--muted-foreground))',
        // },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      height: {
        'marketing-header': 'var(--marketing-header-height)',
      },
      margin: {
        'marketing-header': 'var(--marketing-header-height)',
      },
      padding: {
        'marketing-plus-spacing': 'calc(var(--marketing-header-height) + 24px)',
        'marketing-header': 'var(--marketing-header-height)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
        'image-glow': {
          '0%': {
            opacity: '0',
            'animation-timing-function': 'cubic-bezier(0.74, 0.25, 0.76, 1)',
          },
          '10%': {
            opacity: '0.7',
            'animation-timing-function': 'cubic-bezier(0.12, 0.01, 0.08, 0.99)',
          },
          '100%': {
            opacity: '0.4',
          },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'none' },
        },
        shimmer: {
          '0%, 90%, 100%': {
            'background-position': 'calc(-100% - var(--shimmer-width)) 0',
          },
          '30%, 60%': {
            'background-position': 'calc(100% + var(--shimmer-width)) 0',
          },
        },

        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        'shimmer-btn': {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        "skeleton-shimmer": {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        "skeleton-shimmer": 'shimmer 2s infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        'image-glow': 'image-glow 4100ms 600ms ease-out forwards',
        'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
        'fade-up': 'fade-up 1000ms var(--animation-delay, 0ms) ease forwards',
        shimmer: 'shimmer 8s infinite',
        'shimmer-btn': 'shimmer-btn 2s linear infinite',
        marquee: 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      transitionTimingFunction: {
        'ease-in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
        'ease-in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        'ease-in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
        'ease-in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        'ease-in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'ease-in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
        'ease-out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ease-out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'ease-out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'ease-out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'ease-out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        'ease-in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        'ease-in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        'ease-in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
        'ease-in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
        'ease-in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
        'ease-in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
