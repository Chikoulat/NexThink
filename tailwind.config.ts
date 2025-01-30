/** @type {import('tailwindcss').Config} */
const config: import('tailwindcss').Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
      },
      colors: {
        primary: '#31349f',
        secondary: '#1141a2',
        tertiary: '#e8e9df',
        'contact-blue': 'rgba(37, 125, 219, 1)',
        'light-blue': '#ADD8E6',
        'light-green': '#90EE90',
        'light-gray': '#D3D3D3',
        'dark-gray': '#222325',
        'dark-blue': '#1E90FF',
        'dark-green': '#008000',
        'dark-red': '#8B0000',
        'dark-yellow': '#FFD700',
        'dark-orange': '#FF8C00',
        'dark-pink': '#FF1493',
        'dark-purple': '#800080',
        'dark-cyan': '#008B8B',
        'dark-white': '#F5F5F5',
        'dark-silver': '#C0C0C0',
        'dark-gold': '#FFD700',
        'dark-light-blue': '#ADD8E6',
        'dark-light-green': '#90EE90',
        'dark-light-gray': '#D3D3D3',
        'dark-dark-gray': '#222325',
        'dark-dark-blue': '#1E90FF',
        'dark-dark-green': '#008000',
        'dark-dark-red': '#8B0000',
        'dark-dark-yellow': '#FFD700',
        'dark-dark-orange': '#FF8C00',
        'dark-dark-pink': '#FF1493',
        'dark-dark-purple': '#800080',
        'dark-dark-cyan': '#008B8B',
        'dark-dark-white': '#F5F5F5',
        'dark-dark-silver': '#C0C0C0',
        'dark-dark-gold': '#FFD700',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'light-blue-green':
          'radial-gradient(circle at center, rgba(173, 216, 230, 0.4) 0%, rgba(34, 35, 37, 0) 30%), ' +
          'radial-gradient(circle at center, rgba(144, 238, 144, 0.3) 0%, rgba(34, 35, 37, 0) 40%), ' +
          'radial-gradient(circle at center, rgba(173, 216, 230, 0.2) 0%, rgba(34, 35, 37, 0) 50%)',
        bgHome: "url('/background/bg-home.png')",
        bgAbout: "url('/background/bg-about.png')",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-left': 'fade-left 2s ease-out',
      }
    },
  },
  plugins: [],
};

export default config;
