import { PaletteMode, PaletteOptions } from "@mui/material";

export enum themePalette {
  button = "rgb(11, 73, 122)",
  primaryTextColor = "rgb(0, 44, 83)",
  defaultTextColor = "rgb(44, 44, 44)",
  statusInProgress = "rgb(172, 238, 245)",
  statusCompleted = "rgb(158, 255, 133)",
  statusNotStarted = "rgb(222, 229, 216)",
  baseBgColor = "rgb(255, 255, 255)",
  dropdownContentColor = "rgb(87, 87, 87)",
  accentOrange = "rgb(245, 175, 85)",
  accentPink = "rgb(235, 101, 140)",
  accentBlue = "rgb(61, 143, 216)",
  bannerBgColor = "rgb(225, 233, 239)",
  bannerCreateColor = "rgb(187, 84, 114)",
  bannerCreateHover = "rgb(154, 69, 95)",
}

export enum refactorThemePalette {
  blueMedium = "rgb(11, 73, 122)",
  blueDark = "rgb(0, 44, 83)",
  black = "rgb(44, 44, 44)",
  blueLight = "rgb(172, 238, 245)",
  green = "rgb(40, 167, 69)",
  white = "rgb(255, 255, 255)",
  red = "rgb(220, 53, 69)",
  gray = "rgb(87, 87, 87)",
  grayLight = "rgb(179, 179, 179)",
  orange = "rgb(245, 175, 85)",
  pink = "rgb(235, 101, 140)",
  blueBright = "rgb(61, 143, 216)",
  whiteCool = "rgb(225, 233, 239)",
  pinkDark = "rgb(187, 84, 114)",
  pinkDeep = "rgb(154, 69, 95)",
}

export const palette = (mode: PaletteMode): PaletteOptions => ({
  mode,
  primary: {
    main:
      mode === "light"
        ? refactorThemePalette.blueMedium
        : refactorThemePalette.blueDark,
    light:
      mode === "light"
        ? refactorThemePalette.blueMedium
        : refactorThemePalette.white,
    dark:
      mode === "light"
        ? refactorThemePalette.blueMedium
        : refactorThemePalette.black,
  },

  secondary: {
    main: refactorThemePalette.blueMedium,
    light: refactorThemePalette.whiteCool,
    dark: refactorThemePalette.blueDark,
  },

  background: {
    default:
      mode === "light"
        ? refactorThemePalette.white
        : refactorThemePalette.black,
    paper:
      mode === "light"
        ? refactorThemePalette.blueDark
        : refactorThemePalette.black,
  },

  text: {
    primary:
      mode === "light"
        ? refactorThemePalette.blueDark
        : refactorThemePalette.white,
    secondary:
      mode === "light"
        ? refactorThemePalette.black
        : refactorThemePalette.white,
    disabled: refactorThemePalette.gray,
    white: refactorThemePalette.white,
    black: refactorThemePalette.black,
  },

  button: {
    default: {
      bg:
        mode === "light"
          ? refactorThemePalette.blueMedium
          : refactorThemePalette.white,
      hover: refactorThemePalette.blueBright,
      contrastText:
        mode === "light"
          ? refactorThemePalette.white
          : refactorThemePalette.blueDark,
    },
    create: {
      bg: refactorThemePalette.pinkDark,
      hover: refactorThemePalette.pinkDeep,
      contrastText: refactorThemePalette.white,
    },
    danger: {
      bg: refactorThemePalette.red,
      hover: refactorThemePalette.pinkDeep,
      contrastText: refactorThemePalette.white,
    },
    disabled: {
      bg: refactorThemePalette.gray,
      hover: refactorThemePalette.grayLight,
      contrastText: refactorThemePalette.black,
    },
  },

  status: {
    error: refactorThemePalette.red,
    success: refactorThemePalette.green,
    notStarted: refactorThemePalette.white,
    inProgress: refactorThemePalette.blueLight,
  },
  accent: {
    blue: refactorThemePalette.blueBright,
    pink: refactorThemePalette.pink,
    orange: refactorThemePalette.orange,
    lightBlue: refactorThemePalette.blueLight,
    gray: refactorThemePalette.gray,
  },
});

/*
REFATORAÇAO 1

const commonColors = {
  accent: {
    blue: themePalette.accentBlue,
    pink: themePalette.accentPink,
    orange: themePalette.accentOrange,
    lightBlue: themePalette.statusInProgress,
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
  ...(mode === "light"
    ? {
      buttonHover: {
        main: themePalette.button, //baseBgColor
        light: themePalette.button, //defaultTextColor
        dark: themePalette.button, //primaryTextColor
      },
      textColor: {
        main: themePalette.primaryTextColor,
        light: themePalette.defaultTextColor,
      },
      bgColor: {
        main: themePalette.baseBgColor, //defaultTextColor 
        light: themePalette.primaryTextColor, //defaultTextColor 
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
*/

/*

ORIGINALLLLLLLLLLL

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
