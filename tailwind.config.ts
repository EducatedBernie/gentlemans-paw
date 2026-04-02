import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "inverse-primary": "#b4cdb8",
        "surface": "#fcf9f3",
        "on-tertiary-container": "#939292",
        "tertiary": "#161717",
        "on-tertiary-fixed": "#1b1c1c",
        "on-surface-variant": "#434843",
        "tertiary-container": "#2b2b2b",
        "outline-variant": "#c3c8c1",
        "surface-tint": "#4d6453",
        "secondary-container": "#fed488",
        "on-secondary-container": "#785a1a",
        "on-surface": "#1c1c18",
        "primary-fixed": "#d0e9d4",
        "secondary": "#775a19",
        "on-primary": "#ffffff",
        "surface-variant": "#e5e2dc",
        "surface-container-low": "#f6f3ed",
        "surface-container": "#f0eee8",
        "surface-container-high": "#ebe8e2",
        "surface-container-highest": "#e5e2dc",
        "on-primary-container": "#819986",
        "outline": "#737973",
        "on-secondary": "#ffffff",
        "primary-container": "#1b3022",
        "primary": "#061b0e",
        "secondary-fixed": "#ffdea5",
        "secondary-fixed-dim": "#e9c176",
        "on-tertiary": "#ffffff",
        "error": "#ba1a1a",
      },
      fontFamily: {
        headline: ["Noto Serif", "serif"],
        body: ["Manrope", "sans-serif"],
        label: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
