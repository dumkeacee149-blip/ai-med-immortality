import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070A12",
        card: "#0B1022",
        line: "rgba(255,255,255,0.08)"
      }
    }
  },
  plugins: []
} satisfies Config;
