/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        gBanner: "url(../dist/img-home/bg3.svg)",
        oBanner: "url(../dist/img-home/what-we-offer-bg-scaled.jpg)",
      },
      colors: {
        purplee: "#6a103f",
        lpurplee: "#be2a76",
        gwhite: "#f5f5f5",
        graay: "#dddddd",
        light: "#ffffff",
      }
    },
  },
  plugins: [],
}

