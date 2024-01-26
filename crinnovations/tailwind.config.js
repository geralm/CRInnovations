/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: '#__next', // To override MUI styles we need to use !important (#root for create-react-app, #__next for Next.js)
  corePlugins: { // Evita que se generen los estilos que dejan el html limpio (sin márgenes, padding, etc)
    //esto para posteriormente usar los estilos de material ui (css baseline en el layout)
    // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).

    preflight: false,
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
