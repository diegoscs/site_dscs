/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        secondary: "var(--color-secondary)",
        "bg-light": "var(--color-bg-light)",
        "bg-dark": "var(--color-bg-dark)",
        "text-light": "var(--color-text-light)",
        "text-dark": "var(--color-text-dark)",
        "text-secondary": "var(--color-text-secondary)",
        "border-light": "var(--color-border-light)",
        "border-dark": "var(--color-border-dark)",
        "bg-secondary-light": "var(--color-bg-secondary-light)",
        "bg-secondary-dark": "var(--color-bg-secondary-dark)",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        heading: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--color-text-dark)",
            a: {
              color: "var(--color-primary)",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
