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
  borderPrimaryColor = "rgb(235, 101, 140)",
  borderSecondaryColor = "rgb(239, 174, 20)",
}

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

  borderColor: {
    start: themePalette.borderPrimaryColor,
    end: themePalette.borderSecondaryColor
  },
};
