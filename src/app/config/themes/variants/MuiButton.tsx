import { Components, Theme } from "@mui/material";
import { themePalette } from "../palette";

export const MuiButton: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: {
      backgroundColor: themePalette.baseBgColor,
      borderColor: themePalette.button,
      color: themePalette.button,
      fontSize: "1rem",
      lineHeight: 1.6,
      fontWeight: 500,
      letterSpacing: "0.4px",
      textTransform: "uppercase",
      padding: "8px 16px",
      borderRadius: 2,
      border: "1px solid",
    },
  },

  variants: [
    {
      props: { variant: "home" },
      style: {
        padding: "5px 10px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.25)",
        borderRadius: 4,
        maxWidth: 300,
        fontWeight: 500,
        "&:hover": {
          color: "#FFFFFF",
          backgroundColor: themePalette.button,
          borderColor: themePalette.button,
        },
      },
    },
  ],
};
