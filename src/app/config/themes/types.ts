type ExtendedCSSProperties = {
  [key: string]: React.CSSProperties | string | number
}

export interface Theme {
  button: ExtendedCSSProperties
  description: ExtendedCSSProperties
  linkActive: ExtendedCSSProperties
  link: ExtendedCSSProperties
  linkReference: ExtendedCSSProperties
  logoType: ExtendedCSSProperties
  logoTypeLogin: ExtendedCSSProperties
  cardBody: ExtendedCSSProperties
  cardContainer: ExtendedCSSProperties
  cardButtonContainer: ExtendedCSSProperties
  cardContent: ExtendedCSSProperties
  cardButtonContent: ExtendedCSSProperties
  cardMedia: ExtendedCSSProperties
  cardTitle: ExtendedCSSProperties
  containerLogin: ExtendedCSSProperties
  boxLogoType: ExtendedCSSProperties
  title: ExtendedCSSProperties
  breadCrumb: ExtendedCSSProperties
  centralizeContent: ExtendedCSSProperties
  cardVideo: ExtendedCSSProperties
  cardVideoLink: ExtendedCSSProperties
  cardVideoNumber: ExtendedCSSProperties
  cardVideoSelect: ExtendedCSSProperties
  cardVideoDescription: ExtendedCSSProperties
  advanceExercises: ExtendedCSSProperties
  cardMediaImage: ExtendedCSSProperties
  cardLoginBox: {
    width: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    height: string
    boxShadow: string
    padding: string
  }
  h1Login: {
    fontSize: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
  }
  body1Login: {
    fontSize: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    marginBottom: string
  }
  styleExclamation: ExtendedCSSProperties
  styleModal : ExtendedCSSProperties
}
