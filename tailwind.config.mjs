/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#019cad",
        accent: "#44bec6",
        foreground: "#4b4f58",
        "muted-foreground": "#69727d",
        secondary: "#e6e7e8",
        border: "#d8d8d8",
        background: "#ffffff",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        display: ["Inter", "sans-serif"],
      },
      maxWidth: {
        shell: "1200px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
