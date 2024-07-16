import daisyui from "daisyui";
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          main: "#011627",
        },
        secondary: {
          main: "#2EC4B6",
        },
        blue: {
          main: "#20A4F3",
        },
        red: {
          main: "#FF3366",
        },
        white: {
          main: "#F6F7F8",
        },
        shade: {
          50: "#EFF1F2",
          100: "#D2D6DA",
          200: "#B8BEC3",
          300: "#A0A8AF",
          400: "#869099",
          500: "#707C86",
          600: "#566470",
          700: "#3E4E5B",
          800: "#253746",
          900: "#132C40",
          950: "#102434",
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["dark"],
  },
} satisfies Config;
