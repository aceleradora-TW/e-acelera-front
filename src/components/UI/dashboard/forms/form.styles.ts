export const containerStyles = (theme: any) => ({
  ...theme.customStyles.FormPage.container,
  maxWidth: "100%",
})

export const actionsBoxStyles = (theme: any) => ({
  ...theme.customStyles.FormPage.actions,
})

export const cancelButtonStyles = (theme: any) => ({
  border: "0.5px solid red",
  color: theme.palette.buttonFormColor?.red,
  "&:hover": {
    backgroundColor: theme.palette.buttonFormColor?.red,
    color: theme.palette.buttonHover?.contrastText,
    borderColor: theme.palette.buttonFormColor?.red,
  },
})

export const submitButtonStyles = (
  theme: any,
  isValid: boolean
) => ({
  border: "0.5px solid",
  backgroundColor: isValid
    ? theme.palette.buttonFormColor?.blueBackground
    : theme.palette.buttonFormColor?.lightGray,
  color: isValid
    ? theme.palette.buttonHover?.contrastText
    : theme.palette.buttonFormColor?.gray,
  "&:hover": {
    backgroundColor: isValid
      ? theme.palette.primary.dark
      : theme.palette.accent?.blue,
  },
})