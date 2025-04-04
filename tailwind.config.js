/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   safelist: [
     "shadow-[0_0_12px_#e879f9]",
     "bg-purple-600",
     "bg-pink-500",
     "bg-blue-500",
     "text-cyan-300",
     "blur-3xl",
     "opacity-20"
   ],
   theme: {
     extend: {},
   },
   plugins: [],
 };