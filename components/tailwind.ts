import { create } from "twrnc";
import type { Config } from "tailwindcss";

const config = {
  content: [],
  theme: {
    screens: {
      xs: "0px",
      sm: "375px",
      md: "400px",
      lg: "680px",
    },
    fontWeight: {},
    fontFamily: {},
    fontSize: {
      xxs: ["12px", "16px"],
      xs: ["14px", "20px"],
      base: ["16px", "24px"],
      md: ["18px", "28px"],
      lg: ["20px", "26px"],
      xl: ["24px", "34px"],
      "2xl": ["30px", "40px"],
      "3xl": ["36px", "42px"],
      "4xl": ["40px", "46px"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      base: {
        white: "#FFFFFF",
        black: "#000000",
      },
      black: {
        50: "#E8E8E8",
        100: "#B6B6B6",
        200: "#939393",
        300: "#626262",
        400: "#434343",
        500: "#141414",
        600: "#121212",
      },
      gray: {
        50: "#F0F1F3",
        100: "#D0D3D9",
        200: "#B9BDC7",
        300: "#989FAD",
        400: "#858D9D",
        500: "#667085",
        600: "#5D6679",
        700: "#48505E",
        800: "#383E49",
        900: "#2B2F38",
      },
      blue: {
        50: "#ECF8FF",
        100: "#C4EAFF",
        200: "#A8E0FF",
        300: "#80D1FF",
        400: "#67C9FF",
        500: "#41BBFF",
        600: "#3BAAE8",
        700: "#2E85B5",
        800: "#24678C",
        900: "#1B4F6B",
      },
      red: {
        20: "#2F1A1D",
        500: "#DA5353",
        600: "#E96F6F",
      },
    },
  },
  plugins: [],
} satisfies Config;

const tw = create(config);

export default tw;
