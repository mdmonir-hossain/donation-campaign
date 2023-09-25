/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('https://i.ibb.co/nfC9478/banner-overlay.jpg')",
        'logo': "url('https://i.ibb.co/tMQqy49/Logo.png')",
        
    }
    },
  },
  plugins: [require("daisyui")],
}

