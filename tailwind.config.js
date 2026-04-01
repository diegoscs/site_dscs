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
        bg:           "var(--color-bg)",
        "bg-card":    "var(--color-bg-card)",
        border:       "var(--color-border)",
        "border-hover": "var(--color-border-hover)",
        text:         "var(--color-text)",
        muted:        "var(--color-text-muted)",
        subtle:       "var(--color-text-subtle)",
        primary:      "var(--color-primary)",
        accent:       "var(--color-accent)",
      },
      fontFamily: {
        sans:  ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
        mono:  ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
