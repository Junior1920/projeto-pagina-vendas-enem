/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070F",
          900: "#080D1B",
          800: "#0C1428",
          700: "#111B35",
          600: "#182647",
        },
        mist: {
          400: "#7C89A6",
          300: "#9AA6BE",
          100: "#E7ECF6",
        },
        signal: {
          DEFAULT: "#2FD8B8",
          dim: "#1FA98D",
          soft: "#183A35",
        },
        cobalt: {
          DEFAULT: "#3E63DD",
          soft: "#16224A",
        },
        warn: {
          DEFAULT: "#F2A65A",
        },
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "38rem",
      },
      boxShadow: {
        panel: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.55)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
