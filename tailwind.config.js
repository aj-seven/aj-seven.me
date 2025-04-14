const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // important!
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
      animation: {
        blink: "blink 1s step-start infinite",
        typing: "typing 0.8s steps(40, end)",
        moveDots: "moveDots 60s linear infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        moveDots: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-20px, -20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
