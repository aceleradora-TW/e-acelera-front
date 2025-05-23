import { themePalette } from "./palette";
import { Theme } from "./types";

export const customStyles: Theme = {
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
    border: 1
  },
  description: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 16px 16px 16px",
    boxShadow: "0em 0em 0.4em rgb(44 44 44 / 40% )",
    borderRadius: "6px",
    margin: 0
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
      backgroundColor: "rgb(246, 250, 253)"
    },
    borderRadius: "0"
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
      backgroundColor: "rgb(246, 250, 253)"
    },
    borderRadius: "0"
  },
  linkReference: {
    color: themePalette.defaultTextColor
  },
  logoType: {
    fontSize: "1.2rem",
    mr: 2,
    fontWeight: 700,
    letterSpacing: "0.15px",
    lineHeight: 1.6,
    textDecoration: "none",
    color: themePalette.primaryTextColor
  },
  logoTypeLogin: {
    fontSize: "2.125rem",
    fontWeight: 700,
    letterSpacing: "0.25px",
    lineHeight: 1.2,
    textDecoration: "none",
    color: themePalette.primaryTextColor
  },
  cardBody: {
    color: themePalette.defaultTextColor,
    wordWrap: "break-word",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: themePalette.baseBgColor,
    maxWidth: "100%",
    height: "100%",
    borderWidth: 2
  },
  cardButtonContainer: {
    backgroundColor: themePalette.baseBgColor,
    maxWidth: 316,
    borderWidth: 2,
    height: "100%",
    "&:hover": {
      transform: "scale(1.1)"
    }
  },
  cardContent: {
    height: "250px"
  },
  cardButtonContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "100%"
  },
  centralizeContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1630px",
    margin: "0 auto"
  },
  cardMedia: {
    height: 152,
    marginBottom: 5.5
  },
  cardTitle: {
    color: themePalette.primaryTextColor,
    wordWrap: "break-word",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  cardLoginBox: {
    width: {
      xs: "90%",
      sm: "60%",
      md: "45%",
      lg: "35%",
      xl: "30%"
    },
    height: "30%",
    boxShadow: "0 0 0.4em rgba(44, 44, 44, 0.4)",
    padding: "40px"
  },
  containerLogin: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "80px"
  },
  boxLogoType: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },
  h1Login: {
    fontSize: {
      xs: "32px",
      sm: "40px",
      md: "40px",
      lg: "44px",
      xl: "48px"
    }
  },
  body1Login: {
    fontSize: {
      xs: "18px",
      sm: "20px",
      md: "24px",
      lg: "24px",
      xl: "24px",
    },
    marginBottom: "15px"
  },
  title: {
    textAlign: "left",
    color: themePalette.primaryTextColor,
    margin: "20px 0"
  },
  breadCrumb: {
    textDecoration: "none",
    color: themePalette.primaryTextColor,
    marginTop: 1.2
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
    borderRadius: "6px"
  },
  cardVideoLink: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  cardVideoNumber: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 4
  },
  cardVideoSelect: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 7
  },
  cardVideoDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 5,
    marginRight: 1.3
  },
  advanceExercises: {
    color: themePalette.button,
    padding: "10px 20px"
  },
  cardMediaImage: {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover"
  },
  styleExclamation: {
    height: "80px",
    width: "80px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
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
    textAlign: "center"
  }
}