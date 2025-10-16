type ExtendedCSSProperties = {
  [key: string]: React.CSSProperties | string | number
}

export interface Theme {
  button: ExtendedCSSProperties;
  description: ExtendedCSSProperties;
  linkActive: ExtendedCSSProperties;
  link: ExtendedCSSProperties;
  linkReference: ExtendedCSSProperties;
  logoType: ExtendedCSSProperties;
  logoTypeLogin: ExtendedCSSProperties;
  cardBody: ExtendedCSSProperties;
  cardContainer: ExtendedCSSProperties;
  cardButtonContainer: ExtendedCSSProperties;
  cardContent: ExtendedCSSProperties;
  cardButtonContent: ExtendedCSSProperties;
  cardMedia: ExtendedCSSProperties;
  cardTitle: ExtendedCSSProperties;
  containerLogin: ExtendedCSSProperties;
  boxLogoType: ExtendedCSSProperties;
  title: ExtendedCSSProperties;
  breadCrumb: ExtendedCSSProperties;
  centralizeContent: ExtendedCSSProperties;
  cardVideo: ExtendedCSSProperties;
  cardVideoLink: ExtendedCSSProperties;
  cardVideoNumber: ExtendedCSSProperties;
  cardVideoSelect: ExtendedCSSProperties;
  cardVideoDescription: ExtendedCSSProperties;
  advanceExercises: ExtendedCSSProperties;
  cardMediaImage: ExtendedCSSProperties;
  cardLoginBox: {
    width: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    height: string;
    boxShadow: string;
    padding: string;
  };
  h1Login: {
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
  body1Login: {
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    marginBottom: string;
  };
  Footer: {
    background: string;
    color: string;
    mt: number;
    height: string;
    boxShadow: string;
  };

  aboutSession: {
    width: string;
    display: string;
    alignItems: string;
    justifyContent: {
      sm: string;
      lg: string;
    };
    gap: number;
    height: string;
    minHeight: number;
    flexWrap: {
      xs: string;
      lg: string;
    };
    padding: number;
  };

  buttonHome: {
    maxWidth: number;
    border: number;
    borderRadius: number;
    borderColor: string;
    color: string;
    fontWeight: string;
    boxShadow: number;
  };

  sessionFormacao: (isLarge?: boolean) => {
    width: { xs: string; md: string };
    flexWrap: string;
    minHeight: number;
    display: string;
    justifyContent: string;
    alignItems: string;
    bgcolor: string;
    borderRadius: number;
    color: string;
    boxShadow: number;
    overflowWrap: string;
  };

  styleExclamation: ExtendedCSSProperties;
  styleModal: ExtendedCSSProperties;
}