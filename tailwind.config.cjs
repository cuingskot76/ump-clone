/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.js",
    // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: (theme) => ({
      //   "hero-img": "url(../../assets/hero-main/hero-main.webp)",
      // }),
      backgroundImage: {
        "hero-img":
          "linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%), url(../../assets/hero-main/hero-main.webp)",
      },
    },
  },
  // variants: {
  //   display: ["group-hover"],
  // },
  // plugins: [require("flowbite/plugin")],
};
