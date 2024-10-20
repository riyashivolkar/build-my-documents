/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "bg-scrolling": "bg-scrolling 0.92s linear infinite",
        "bg-scrolling-reverse": "bg-scrolling-reverse 0.92s linear infinite",
      },
      keyframes: {
        "bg-scrolling": {
          "0%": { backgroundPosition: "50px 50px" },
        },
        "bg-scrolling-reverse": {
          "100%": { backgroundPosition: "50px 50px" },
        },
      },
      backgroundImage: (theme) => ({
        "bg-pattern":
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC')",
      }),
      fontFamily: {
        exo: ["Exo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
