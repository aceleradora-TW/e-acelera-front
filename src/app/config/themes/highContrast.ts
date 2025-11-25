import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { themePalette } from "./palette";

export const highContrastTheme = createTheme({
  typography, 

  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#121212",
    },
    text: {
      primary: "#E0E0E0",
      secondary: "#CCCCCC",
    },
    primary: {
      main: "#E0E0E0",
    },
    secondary: {
      main: "#f50057",
    },
    button: {
      main: "#444444",
      contrastText: "#E0E0E0",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#121212 !important",
          color: "#E0E0E0 !important",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          backgroundColor: "#E0E0E0",
        },
        thumb: {
          backgroundColor: "#fffafa",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#444444 !important",
          color: "#E0E0E0 !important",
          "&:hover": {
            backgroundColor: `${themePalette.button} !important`,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#E0E0E0 !important",
          borderBottomColor: "#E0E0E0 !important",
          textDecoration: "underline",
          "&:hover": {
            backgroundColor: "#555555 !important",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#222 !important",
          color: "#E0E0E0 !important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#E0E0E0 !important",
          borderRadius: "4px",
        },
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #E0E0E0 !important",
            borderRadius: "4px",
          },
          height: "40px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#E0E0E0 !important",
          "&.Mui-focused": {
            color: "#E0E0E0 !important",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E0E0E0",
            borderRadius: "5px",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#E0E0E0 !important",
        },
        h2: {
          color: "#E0E0E0 !important",
        },
        h3: {
          color: "#E0E0E0 !important",
        },
        body1: {
          color: "#E0E0E0 !important",
        },
        caption: {
          color: "#E0E0E0 !important",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#121212 !important",
        },
      },
    },
  },
  customStyles: {
    button: {
      backgroundColor: themePalette.baseBgColor,
      borderColor: themePalette.button,
      color: themePalette.button,
      fontSize: "1rem",
      lineHeight: 1.6,
      fontWeight: 500,
      letterSpacing: 0.4,
      textTransform: "uppercase",
      padding: "8px 16px",
      borderRadius: 2,
      border: "1px solid",
      "&:hover": {
        backgroundColor: themePalette.button,
        color: themePalette.baseBgColor,
        border: "1px solid transparent",
      },
    },

    buttonActive: {
      backgroundColor: `${themePalette.button} !important`,
      color: themePalette.baseBgColor,
      border: "1px transparent solid",
    },

    description: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0px 16px 16px 16px",
      boxShadow: "0em 0em 0.4em rgb(44 44 44 / 40% )",
      borderRadius: "6px",
      margin: 0,
    },

    linkActive: {
      borderBottom: "solid",
      color: themePalette.primaryTextColor,
      borderBottomWidth: "3px",
      borderBottomColor: themePalette.primaryTextColor,
      display: "block",
      textTransform: "none",
      fontSize: "18px",
      lineHeight: 1.7,
      fontWeight: 400,
      letterSpacing: 0.4,
      margin: "0 0.5rem",
      padding: "8px",
      "&:hover": {
        backgroundColor: "rgb(246, 250, 253)",
      },
      borderRadius: "0",
    },
    link: {
      color: themePalette.defaultTextColor,
      display: "block",
      textTransform: "none",
      fontSize: "18px",
      lineHeight: 1.7,
      fontWeight: 400,
      letterSpacing: 0.4,
      margin: "0 0.8rem",
      padding: "8px",
      "&:hover": {
        backgroundColor: "rgb(246, 250, 253)",
      },
      borderRadius: "0",
    },
    linkReference: {
      color: themePalette.defaultTextColor,
    },
    logoType: {
      fontSize: "1.2rem",
      mr: 2,
      fontWeight: 700,
      letterSpacing: "0.15px",
      lineHeight: 1.6,
      textDecoration: "none",
      color: themePalette.primaryTextColor,
    },
    logoTypeLogin: {
      fontSize: "2.125rem",
      fontWeight: 700,
      letterSpacing: "0.25px",
      lineHeight: 1.2,
      textDecoration: "none",
      color: themePalette.primaryTextColor,
    },
    cardBody: {
      color: themePalette.defaultTextColor,
      wordWrap: "break-word",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: themePalette.baseBgColor,
      maxWidth: "100%",
      height: "100%",
      borderWidth: 2,
    },
    cardButtonContainer: {
      backgroundColor: themePalette.baseBgColor,
      maxWidth: 316,
      borderWidth: 2,
      height: "100%",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    cardContent: {
      height: "250px",
    },
    cardButtonContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      height: "100%",
    },
    centralizeContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "1630px",
      margin: "0 auto",
    },
    cardMedia: {
      height: 152,
      marginBottom: 5.5,
    },
    cardTitle: {
      color: themePalette.primaryTextColor,
      wordWrap: "break-word",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    cardLoginBox: {
      width: {
        xs: "90%",
        sm: "60%",
        md: "45%",
        lg: "35%",
        xl: "30%",
      },
      height: "30%",
      boxShadow: "0 0 0.4em rgba(44, 44, 44, 0.4)",
      padding: "40px",
    },
    containerLogin: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "80px",
    },
    boxLogoType: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    h1Login: {
      fontSize: {
        xs: "32px",
        sm: "40px",
        md: "40px",
        lg: "44px",
        xl: "48px",
      },
    },
    body1Login: {
      fontSize: {
        xs: "18px",
        sm: "20px",
        md: "24px",
        lg: "24px",
        xl: "24px",
      },
      marginBottom: "15px",
    },
    title: {
      textAlign: "left",
      color: themePalette.primaryTextColor,
      margin: "20px 0",
    },
    breadCrumb: {
      textDecoration: "none",
      color: themePalette.primaryTextColor,
      marginTop: 1.2,
    },
    cardVideo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 2,
      boxShadow: "0em 0em 0.4em rgb(44 44 44 / 40%)",
      maxWidth: "100%",
      height: "100%",
      boxSizing: "border-box",
      borderRadius: "6px",
    },
    cardVideoLink: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    cardVideoNumber: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: 4,
    },
    cardVideoSelect: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: 7,
    },
    cardVideoDescription: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: 5,
      marginRight: 1.3,
    },
    advanceExercises: {
      color: themePalette.button,
      padding: "10px 20px",
    },
    cardMediaImage: {
      maxWidth: "100%",
      height: "auto",
      display: "block",
      objectFit: "cover",
    },
    styleExclamation: {
      height: "80px",
      width: "80px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    styleModal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "1px solid #002C53",
      borderRadius: "5px",
      boxShadow: 24,
      p: 4,
      textAlign: "center",
    },
    Footer: {
      background: themePalette.primaryTextColor,
      color: themePalette.baseBgColor,
      mt: 4,
      height: "30%",
      boxShadow: "0 0 0.6em rgba(44 44 44 / 75%)",
    },
    accessibilityMenu: {
      containerFab: {
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 1300,
        "&:hover .label": {
          opacity: 1,
          transform: "translateX(-15%)",
        },
      },
      labelFab: {
        position: "absolute",
        bottom: 16,
        top: "15%",
        right: 16,
        backgroundImage: `linear-gradient(270deg, ${themePalette.button}, ${themePalette.accentBlue})`,
        color: themePalette.baseBgColor,
        padding: "6px 12px",
        borderRadius: "100px 0px 0px 100px",
        height: 45,
        width: 210,
        whiteSpace: "nowrap",
        opacity: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        transform: "translateX(0)",
        transition: "all 0.3s ease",
        boxShadow: `0px 4px 12px ${themePalette.defaultTextColor
          .replace("rgb", "rgba")
          .replace(")", ", 0.3)")}`,
      },
      fabButton: {
        border: "4px transparent solid",
        backgroundOrigin: "border-box",
        backgroundClip: "border-box",
        boxShadow: `
            inset 0 0 0 4px white,
            0px 4px 12px ${themePalette.defaultTextColor
              .replace("rgb", "rgba")
              .replace(")", ", 0.3)")}
          `,
        backgroundImage: `linear-gradient(190deg, ${themePalette.button}, ${themePalette.accentBlue})`,
        width: 70,
        height: 70,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundImage: `linear-gradient(190deg, ${themePalette.button}, ${themePalette.button})`,
        },
        "&:active": {
          boxShadow: `
              inset 0 0 0 4px white,
              0px 4px 12px ${themePalette.defaultTextColor
                .replace("rgb", "rgba")
                .replace(")", ", 0.3)")}
            `,
        },
      },
      menuPaper: {
        position: "fixed",
        bottom: 90,
        width: 300,
        minHeight: 200,
        display: "flex",
        right: 16,
        padding: 0,
        borderRadius: 2,
        zIndex: 1300,
        overflow: "hidden",
        flexDirection: "column",
        background: "#121212",
      },

      menuHeader: {
        background: "#222",
        color: themePalette.baseBgColor,
        padding: "8px 10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 0,
      },

      closeButton: {
        color: themePalette.baseBgColor,
        width: 20,
        height: 20,
        minWidth: 20,
        minHeight: 20,
        padding: 1,
        borderRadius: "50%",
        backgroundColor: themePalette.button,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid white",
        "&:hover": {
          backgroundColor: themePalette.baseBgColor,
          color: themePalette.button,
          border: "1px transparent solid",
        },
      },

      buttonGrid: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        height: 90,
        padding: 4,
        lineHeight: 1,
        "&:hover": {
          backgroundColor: `${themePalette.button} !important`,
        },
      },

      footerContainer: {
        marginTop: "auto",
        display: "flex",
        flexDirection: "column",
      },

      footerLine: {
        backgroundImage: `linear-gradient(120deg, ${themePalette.accentPink}, ${themePalette.accentOrange})`,
        height: 4,
        width: "100%",
      },

      footerBox: {
        backgroundColor: "#222",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        height: 70,
      },

      textLevelContainer: {
        display: "center",
        justifycontent: "center",
        gap: 0.5,
        marginTop: 1,
      },

      textLevelIndicator: (
        themePalette: any,
        textSize: number,
        size: number
      ) => ({
        width: 22,
        height: 4,
        borderRadius: 0.6,
        backgroundColor:
          textSize >= size ? themePalette.baseBgColor : themePalette.button,
        transition: "background-color 0.3s ease",
        border:
          textSize < size
            ? `1px solid ${themePalette.baseBgColor}`
            : `1px solid ${themePalette.baseBgColor}`,
      }),

      formControl: {
        width: "100%",
        "& .MuiInputLabel-root": {
          color: "#000000",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#000000",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#000000",
          borderRadius: "5px",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            border: `1px solid #000000`,
          },
        "& .MuiOutlinedInput-root": {
          height: "40px",
        },
      },
    },

    impactSection: {
      background: themePalette.button,
      color: themePalette.baseBgColor,
      textAlign: "center",
    },
    banner: {
      container: {
        display: "flex",
      },
      contentBox: {
        position: "relative",
        zIndex: 2,
        color: themePalette.baseBgColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      imageBox: {
        flexGrow: 1,
        position: "relative",
        zIndex: 1,
        backgroundSize: "cover",
      },
    },
    testimonials: {
      background: themePalette.button,
      color: themePalette.baseBgColor,
    },
    sponsorsSection: {
      background: themePalette.button,
      color: themePalette.baseBgColor,
      textAlign: "center",
    },
    studysection: {
      container: {
        paddingBottom: 4,
      },
      box: {
        backgroundColor: "#222222",
        color: "#E0E0E0",
        p: 2,
        my:2,
        borderRadius: "4px",
        position: "relative",
      },
      icons: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 1.2,
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 2,
        mb: 1,
        borderRadius: 2,
        height: '100px',
        width: '100px',
        boxShadow: 'none',
        background: "transparent",
      },
      button: {
        padding: "6px 16px",
      }
    },

    accessibilityReadMask: (mouseY: number, maskHeight: number) => ({
      background: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: `linear-gradient(
                      to bottom,
                      rgba(0,0,0,0.5) ${mouseY - maskHeight / 2}px,
                      transparent ${mouseY - maskHeight / 2}px,
                      transparent ${mouseY + maskHeight / 2}px,
                      rgba(0,0,0,0.5) ${mouseY + maskHeight / 2}px
                    )`,
        pointerEvents: "none",
        zIndex: 9999,
      },
      topLine: {
        position: "fixed",
        top: `${mouseY - maskHeight / 2}px`,
        left: 0,
        width: "100vw",
        height: "3px",
        backgroundColor: themePalette.accentBlue,
        zIndex: 9999,
        pointerEvents: "none",
      },
      bottonLine: {
        position: "fixed",
        top: `${mouseY + maskHeight / 2}px`,
        left: 0,
        width: "100vw",
        height: "3px",
        backgroundColor: themePalette.accentBlue,
        zIndex: 9999,
        pointerEvents: "none",
      },
    }),
  },
});
