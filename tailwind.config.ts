/** @type {import('tailwindcss').Config} */
import { withUt } from 'uploadthing/tw';

module.exports = withUt({
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        one: {
          1: '#ffeecc',
          2: '#f8e7c1dd',
          3: '#f8e7c1f4',
          4: '#f8e7c1aa',
          5: '#fff9e0',
          6: '#ddd1bb',
          7: '#fae9c3'
        },
        two: {
          1: '#635858',
          2: '#433838'
        },
        three: {
          1: '#b28ce5',
          2: '#b28ce5dd',
          3: '#cdb6f8',
          4: '#e0cfff'
        },
        four: {
          1: '#ffffff',
          2: '#ffffffbb',
          3: '#ffffff4c',
          4: '#ffffff6c',
          5: '#000000aa'
        },
        five: {
          1: '#FF646E',
          2: '#FF646Ebb'
        },
        six: {
          1: '#f19586',
          2: '#f19586dd',
          3: "#d35c4a",
          4: '#ffffd2',
          5: '#fffdd8'
        },
        projects: {
          1: '#fcee89',
          2: '#f19586',
          3: '#d7ecc7',
          4: '#bdbeff',
          5: '#ffc17e'
        },
        seven: {
          1: '#5C92B3',
          2: '#5C92B3cc',
          3: '#5C92B3f5',
          4: '#FFDA34'
        },
        school: {
          1: "#F0D96A",
          2: "#F0D96Add",
          3: "#ffdd3c",
          4: "#ffea61",
          5: "#fff192",
          6: "#ffffb7"
        },
        garden: {
          1: "#c2d8b2",
          2: "#c2d8b2dd"
        },
        workshop: {
          1: "#BDBEFF",
          2: "#BDBEFFdd"
        },
        primary: {
          500: '#624CF5',
          50: ' #F6F8FD',
          DEFAULT: '#624CF5',
          foreground: 'hsl(var(--primary-foreground))',
        },
        coral: {
          500: '#15BF59',
        },
        grey: {
          600: '#545454', // Subdued - color name in figma
          500: '#757575',
          400: '#AFAFAF', // Disabled - color name in figma
          50: '#F6F6F6', // White Grey - color name in figma
        },
        konf: {
          1: "#bd4831",
          2: "#e5d4be"
        },
        black: '#000000',
        white: '#FFFFFF',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
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
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      backgroundImage: {
        'hero-img': "url('/assets/images/img1.png')",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
});