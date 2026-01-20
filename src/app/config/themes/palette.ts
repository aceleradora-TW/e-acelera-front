import { PaletteMode, PaletteOptions } from "@mui/material";
import { blue } from "@mui/material/colors";

export enum themePalette {
  button = "rgb(11, 73, 122)",
  primaryTextColor = "rgb(0, 44, 83)",
  defaultTextColor = "rgb(44, 44, 44)",
  statusInProgress = "rgb(172, 238, 245)",
  statusCompleted = "rgb(158, 255, 133)",
  statusNotStarted = "rgb(222, 229, 216)",
  baseBgColor = "rgb(255, 255, 255)",
  loginHover = "rgb(154, 192, 201)",
  dropdownContentColor = "rgb(87, 87, 87)",
  accentOrange = "rgb(245, 175, 85)",
  accentPink = "rgb(235, 101, 140)",
  accentBlue = "rgb(61, 143, 216)",
  accentGradient = "linear-gradient(rgb(235, 101, 140), rgb(245, 175, 85))",
  bannerBgColor = "rgb(225, 233, 239)",
  bannerCreateColor = "rgb(187, 84, 114)",
  bannerCreateHover = "rgb(154, 69, 95)",
}

const commonColors = {
  accent: {
    blue: themePalette.accentBlue,
    pink: themePalette.accentPink,
    orange: themePalette.accentOrange,
    gradient: themePalette.accentGradient,
    lightBlue: themePalette.loginHover,
  },
  statusSelect: {
    main: themePalette.statusNotStarted,
    light: themePalette.statusCompleted,
    dark: themePalette.statusInProgress,
  },
  sameColor: {
    white: themePalette.baseBgColor,
    blue: themePalette.button,
    darkBlue: themePalette.primaryTextColor,
    gray: themePalette.dropdownContentColor,
  },
};


  export const palette = (mode: PaletteMode): PaletteOptions => ({
    mode,
    ...commonColors,
    ...(mode === 'light'
      ? {

        buttonHover: {
          main: themePalette.button,
          light: themePalette.button,
          dark: themePalette.button,
        },
        textColor: {
          main: themePalette.primaryTextColor,
          light: themePalette.defaultTextColor,
        },
        bgColor: {
          main: themePalette.baseBgColor,
          light: themePalette.primaryTextColor,
        },

        banner: {
          background: themePalette.bannerBgColor,
          createButton: {
            main: themePalette.bannerCreateColor,
            hover: themePalette.bannerCreateHover,
          },
        },
      }
      : {
        buttonHover: {
          main: themePalette.baseBgColor,
          light: themePalette.defaultTextColor,
          dark: themePalette.primaryTextColor,
        }, 
        textColor: {
          main: themePalette.bannerBgColor,
          light: themePalette.baseBgColor,
        },
        bgColor: {
          main: themePalette.defaultTextColor,
          light: themePalette.defaultTextColor,
        },
        banner: {
          background: "#121212",
          createButton: {
            main: "#444444",
            hover: "#E0E0E0",
          },
        },
      }),
  });


/*
export const palette = {
  statusSelect: {
    main: themePalette.statusNotStarted,
    light: themePalette.statusCompleted,
    dark: themePalette.statusInProgress,
  },
  buttonHover: {
    main: themePalette.button,
    light: themePalette.loginHover,
    contrastText: themePalette.baseBgColor,
  },
  textColor: {
    main: themePalette.primaryTextColor,
    light: themePalette.defaultTextColor,
  },
  bgColor: {
    main: themePalette.baseBgColor,
    light: themePalette.dropdownContentColor,
  },
  accent: {
    blue: themePalette.accentBlue,
    pink: themePalette.accentPink,
    orange: themePalette.accentOrange,
  },
  /*banner: { 
    background: themePalette.bannerBgColor, 
    createButton: { 
      main: themePalette.bannerCreateColor, 
      hover: themePalette.bannerCreateHover, 
    },
  },
};
*/