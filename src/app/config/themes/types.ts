type ExtendedCSSProperties = {
  [key: string]: React.CSSProperties | string | number;
};

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
  buttonActive: ExtendedCSSProperties;
  accessibilityMenu: {
    containerFab: ExtendedCSSProperties;
    fabButton: ExtendedCSSProperties;
    menuPaper: ExtendedCSSProperties;
    menuHeader: ExtendedCSSProperties;
    closeButton: ExtendedCSSProperties;
    buttonGrid: ExtendedCSSProperties;
    textLevelContainer: ExtendedCSSProperties;
    formControl: ExtendedCSSProperties;
    textLevelIndicator: (
      themePalette: any,
      currentSize: number,
      indicatorSize: number
    ) => ExtendedCSSProperties;
    footerContainer: ExtendedCSSProperties;
    footerLine: ExtendedCSSProperties;
    footerBox: ExtendedCSSProperties;
    labelFab: ExtendedCSSProperties;
  };
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

  accessibilityReadMask: (
    mouseY: number,
    maskHeight: number
  ) => {
    background: {
      position: string;
      top: number;
      left: number;
      width: string;
      height: string;
      background: string;
      pointerEvents: string;
      zIndex: number;
    };
    topLine: {
      position: string;
      top: string;
      left: number;
      width: string;
      height: string;
      backgroundColor: string;
      zIndex: number;
      pointerEvents: string;
    };
    bottonLine: {
      position: string;
      top: string;
      left: number;
      width: string;
      height: string;
      backgroundColor: string;
      zIndex: number;
      pointerEvents: string;
    };
  };

  Footer: {
    background: string;
    color: string;
    mt: number;
    height: string;
    boxShadow: string;
  };
  impactSection: ExtendedCSSProperties;
  styleExclamation: ExtendedCSSProperties;
  styleModal: ExtendedCSSProperties;
  banner: {
    container: ExtendedCSSProperties;
    contentBox: ExtendedCSSProperties;
    imageBox: ExtendedCSSProperties;
  };
  testimonials: ExtendedCSSProperties;
  sponsorsSection: ExtendedCSSProperties;
  studysection: {
    container: ExtendedCSSProperties;
    box: ExtendedCSSProperties;
    icons: ExtendedCSSProperties;
    card: ExtendedCSSProperties;
    button: ExtendedCSSProperties;
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

  cardAboutAgil: {
    width: { xs: string; md: number };
    minHeight: number;
    border: number;
    paddingY: number;
    paddingX: number;
    borderImage: string;
  };
  buttonAboutAgil:ExtendedCSSProperties;

  sessionListContainer: {
    width: string;
    height: number;
    display: string;
    justifyContent: string;
    alignItems: string;
    flexDirection: string;
    flexWrap: string;
    gap: number;
  };

  sessionFormacaoContainer: {
    width: { xs: number; sm: number };
    minHeight: number;
    height: string;
    display: string;
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
  };

  cardAboutAgilContainer: {
    width: string;
    display: string;
    justifyContent: string;
    flexWrap: string;
    gap: number;
  };
}
