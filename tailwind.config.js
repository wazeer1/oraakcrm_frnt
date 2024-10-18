/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          background: '#f8fafc',
          background_dark: '#f1ebeb',
          surface: '#ffffff',
          text: '#3f4e62',
          primary: '#3b82f6',
          secondary: '#10b981',
          accent: '#fbbf24',
          muted: '#9ca3af',
          border: '#e5e7eb',
          button: {
            default: '#3b82f6',
            text: '#ffffff',
            hover: '#2563eb',
            active: '#1d4ed8',
          },
        },

        // Dark theme colors
        dark: {
          background: '#1a202c',
          background_dark: '#2d3748',
          surface: '#2d3748',
          text: '#e2e8f0',
          primary: '#60a5fa',
          secondary: '#34d399',
          accent: '#fcd34d',
          muted: '#a0aec0',
          border: '#4a5568',
          button: {
            default: '#60a5fa',
            text: '#1a202c',
            hover: '#3b82f6',
            active: '#2563eb',
          },
        },
      },
      // Extend typography
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.light.text'),
            a: {
              color: theme('colors.light.primary'),
              '&:hover': {
                color: theme('colors.light.secondary'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.dark.text'),
            a: {
              color: theme('colors.dark.primary'),
              '&:hover': {
                color: theme('colors.dark.secondary'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [],
}

