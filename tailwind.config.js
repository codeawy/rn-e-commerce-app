/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        facebook: "#1877F2",
        primary: {
          DEFAULT: "#1A1A1A",
          200: "#CCCCCC",
          300: "#B3B3B3"
        },
      },
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
