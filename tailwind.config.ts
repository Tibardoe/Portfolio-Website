import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "648px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#D7D7D7",
        buttonBg: "#C4C4C4",
      },
    },
  },
  plugins: [],
} satisfies Config;
