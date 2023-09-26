/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('https://i.ibb.co/2tpp9r8/banner.jpg')",
        'logo': "url('https://i.ibb.co/tMQqy49/Logo.png')",
        
    }
    },
  },
  plugins: [require("daisyui")],
}

