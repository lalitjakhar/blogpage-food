/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-container": {
          paddingLeft: "90px",
          paddingRight: "90px",
          maxWidth: "1470px",
          marginLeft: "auto",
          marginRight: "auto",
        },
        "@media (max-width: 1024px)": {
          ".custom-container": {
            paddingLeft: "70px",
            paddingRight: "70px",
          },
        },
        "@media (max-width: 768px)": {
          ".custom-container": {
            paddingLeft: "40px",
            paddingRight: "40px",
          },
        },
        "@media (max-width: 500px)": {
          ".custom-container": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1.5rem",
          },
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
