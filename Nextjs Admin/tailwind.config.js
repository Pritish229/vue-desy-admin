// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      // all built‑in DaisyUI themes
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      // your custom theme
      {
        customtheme: {
          primary: '#4f46e5',
          secondary: '#9333ea',
          accent: '#22d3ee',
          neutral: '#1f2937',
          'base-100': '#ffffff',
        },
      },
    ],
  },
}
