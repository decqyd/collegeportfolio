/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        wavybackground: "url('/coolbackground3.png')",
        mebackground: "url(/mebackground2.png)",
        edubackground: "url(/edubackground.png)",
        workbg: "url(/workbg.png)",
        hobbiesbg: "url(/hobbiesbg.png)",
        leftwave: "url('/background2.svg')",
      },
      screens: {
        xs: "240px",
        ms: "800px",
        msm: "900px",
        mdlg: "1000px",
      },
      colors: {
        coolblack: "#030404",
      },
    },
  },
  plugins: [],
};
