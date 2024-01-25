/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: { stagger: "enterUp .6s both" },
      keyframes: {
        enterUp: {
          "0%": { opacity: 0, transform: "translateY(15px)" },
          "100%": { opacity: 1, transform: "none" },
        },
      },
      transitionProperty: {
        height: "height",
      },
      backgroundImage: {
        reimagined: "url('assets/reimagined.png')",
      },
    },
  },
  plugins: [],
};
