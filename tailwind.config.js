/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        PoppinsExtraBold: ["Poppins-ExtraBold"],
        // TODO: Add PoppinsExtraBoldItalic
        PoppinsExtraBoldItalic: ["Poppins-ExtraBoldItalic"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
