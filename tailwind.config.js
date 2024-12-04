/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',     // Indigo 600
        secondary: '#10B981',   // Emerald 500
        accent: '#F59E0B',      // Amber 500
        background: '#F9FAFB',  // Gray 50
        text: '#111827',        // Gray 900
      },
    },
  },
  plugins: [],
};
