interface SpacingValues {
  letterSpacing?: string;
  wordSpacing?: string;
}

export const createTypography = (
  multiplier: number,
  spacing: SpacingValues,
  lineHeight: number | string,
  fontFamily: string
) => ({
  allVariants: {
    fontFamily,
    lineHeight,
  },

  h1: {
    fontSize: `${2.5 * multiplier}rem`,
    letterSpacing: spacing.letterSpacing,
    lineHeight: "normal",
    "@media (min-width:0px)": { fontSize: `${1.5 * multiplier}rem` },
    "@media (min-width:600px)": { fontSize: `${2 * multiplier}rem` },
    "@media (min-width:900px)": { fontSize: `${2.5 * multiplier}rem` },
    "@media (min-width:1200px)": { fontSize: `${3 * multiplier}rem` },
    "@media (min-width:1536px)": { fontSize: `${3.5 * multiplier}rem` },
  },

  h2: {
    fontWeight: 500,
    letterSpacing: spacing.letterSpacing || "0.15px",
    wordSpacing: spacing.wordSpacing,
    "@media (min-width:0px)": { fontSize: `${1.5 * multiplier}rem` },
    "@media (min-width:600px)": { fontSize: `${1.8 * multiplier}rem` },
    "@media (min-width:900px)": { fontSize: `${2.2 * multiplier}rem` },
    "@media (min-width:1200px)": { fontSize: `${2.4 * multiplier}rem` },
    "@media (min-width:1536px)": { fontSize: `${2.4 * multiplier}rem` },
  },

  h3: {
    fontWeight: 500,
    letterSpacing: spacing.letterSpacing || "0.15px",
    wordSpacing: spacing.wordSpacing,
    "@media (min-width:0px)": { fontSize: `${1.2 * multiplier}rem` },
    "@media (min-width:600px)": { fontSize: `${1.4 * multiplier}rem` },
    "@media (min-width:900px)": { fontSize: `${1.5 * multiplier}rem` },
    "@media (min-width:1200px)": { fontSize: `${1.6 * multiplier}rem` },
    "@media (min-width:1536px)": { fontSize: `${1.6 * multiplier}rem` },
  },

  body1: {
    fontSize: `${1 * multiplier}rem`,
    lineHeight: 1.5,
    fontWeight: 400,
    letterSpacing: spacing.letterSpacing || 0.15,
    wordSpacing: spacing.wordSpacing,
  },
  
    body2: {
    fontSize: `${1 * multiplier}rem`,
    lineHeight: 1.5,
    fontWeight: 400,
    letterSpacing: spacing.letterSpacing || 0.15,
    wordSpacing: spacing.wordSpacing,
  },

  caption: {
    fontSize: `${1.4 * multiplier}rem`,
    fontWeight: 500,
    letterSpacing: spacing.letterSpacing || "0.15px",
    wordSpacing: spacing.wordSpacing,
  },
});

export const typography = {
  h1: {
    fontWeight: 500,
    letterSpacing: 0.15,
    lineHeight: "normal",
    "@media (min-width:0px)": {
      fontSize: "1.5rem",
    },
    "@media (min-width:600px)": {
      fontSize: "2rem",
    },
    "@media (min-width:900px)": {
      fontSize: "2.5rem",
    },
    "@media (min-width:1200px)": {
      fontSize: "3rem",
    },
    "@media (min-width:1536px)": {
      fontSize: "3.5rem",
    },
  },
  h2: {
    lineHeight: 1.6,
    fontWeight: 500,
    letterSpacing: 0.15,
    "@media (min-width:0px)": {
      fontSize: "1.5rem",
    },
    "@media (min-width:600px)": {
      fontSize: "1.8rem",
    },
    "@media (min-width:900px)": {
      fontSize: "2.2rem",
    },
    "@media (min-width:1200px)": {
      fontSize: "2.4rem",
    },
    "@media (min-width:1536px)": {
      fontSize: "2.4rem",
    },
  },
  h3: {
    lineHeight: 1.6,
    fontWeight: 500,
    letterSpacing: 0.15,
    "@media (min-width:0px)": {
      fontSize: "1.2rem",
    },
    "@media (min-width:600px)": {
      fontSize: "1.4rem",
    },
    "@media (min-width:900px)": {
      fontSize: "1.5rem",
    },
    "@media (min-width:1200px)": {
      fontSize: "1.6rem",
    },
    "@media (min-width:1536px)": {
      fontSize: "1.6rem",
    },
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.5,
    fontWeight: 400,
    letterSpacing: 0.15,
  },
  caption: {
    fontSize: "1.4rem",
    lineHeight: 1.6,
    fontWeight: 500,
    letterSpacing: 0.15,
  },
};
