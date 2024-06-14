import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/componentes/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
          color: {
            "buttonText": "#031D3C",
            "title": " #002C53",
            "buttonBg": "#5FA0ED",
            "descriptionCard": "#02C2C2C",
            "descriptionText": "#000000",
            "statusInProgress": "#FFDE6B",
            "statusConcluded": "#9EFF85",
            "statusPending": "#DFDFDF", 
            "mainBg": "#F5F5F5",
            "cardBg": "#FFFFFF",
          },
      },
    },
  },
  plugins: [],
};
export default config;
