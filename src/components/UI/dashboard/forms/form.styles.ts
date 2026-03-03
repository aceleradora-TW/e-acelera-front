import { SxProps, Theme } from "@mui/material"

export const containerStyles = (
  theme: Theme
): SxProps<Theme> => ({
  mt: 6,
  backgroundColor: theme.palette.buttonHover?.contrastText,
  borderRadius: "12px",
  p: 4,
  boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  gap: 3,
  maxWidth: "100%",
})

export const actionsBoxStyles: SxProps<Theme> = {
  display: "flex",
  gap: 2,
  justifyContent: { xs: "right", md: "right" },
}

export const cancelButtonStyles = (
  theme: Theme
): SxProps<Theme> => ({
  border: "0.5px solid red",
  color: theme.palette.buttonFormColor?.red,
  "&:hover": {
    backgroundColor: theme.palette.buttonFormColor?.red,
    color: theme.palette.buttonHover?.contrastText,
    borderColor: theme.palette.buttonFormColor?.red,
  },
})

export const submitButtonStyles = (
  theme: Theme,
  isValid: boolean
): SxProps<Theme> => ({
  border: "0.5px solid",
  backgroundColor: isValid
    ? theme.palette.buttonFormColor?.blueBackground
    : theme.palette.buttonFormColor?.lightGray,
  color: isValid
    ? theme.palette.buttonHover?.contrastText
    : theme.palette.buttonFormColor?.gray,
  "&:hover": {
    backgroundColor: isValid
      ? "primary.dark"
      : theme.palette.accent?.blue,
  },
})