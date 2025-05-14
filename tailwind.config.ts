import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        // Valorant specific colors
        "valorant-red": "#ff4655",
        "valorant-blue": "#0f1923",
        "valorant-green": "#00FF84",
        "valorant-dark": "#1A1F2C",
        "valorant-gray": "#8A898C",
        "valorant-light-gray": "#C8C8C9",
        "primary-blue": "#99F9EA",
        "primary-blue-10": "rgba(153,249,234,0.1)",
        "valorant-orange": "#E67E22",


        // Monochromatic Backgrounds
        "background-60": "rgba(8,18,18,0.6)",

        // Darker accents
        "dark-blue": "#161D22",
        "dark-gray": "#32383D",
        "mid-gray": "#6D6E6E",
        "light-gray": "#96999E",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        valorant: ["Inter", "sans-serif"],
        oxanium: ["Oxanium", "sans-serif"],
      },
      fontSize: {
        "10": ["10px", { lineHeight: "13px", fontWeight: "400" }],
        "12": ["12px", { lineHeight: "15px", fontWeight: "400" }],
        "14": ["14px", { lineHeight: "18px", fontWeight: "400" }],
        "14sb": ["14px", { lineHeight: "18px", fontWeight: "600" }],
        "16": ["16px", { lineHeight: "20px", fontWeight: "400" }],
        "16sb": ["16px", { lineHeight: "20px", fontWeight: "600" }],
        "20sb": ["20px", { lineHeight: "25px", fontWeight: "600" }],
        "24sb": ["24px", { lineHeight: "34px", fontWeight: "600" }],
      },
      fontWeight: {
        regular: "400",
        semibold: "600",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;