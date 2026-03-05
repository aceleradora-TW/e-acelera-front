import { SxProps, Theme } from "@mui/material"

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
  theme: Theme
): SxProps<Theme> => ({
  border: "0.5px solid",
  backgroundColor: theme.palette.buttonFormColor?.blueBackground,
  color: theme.palette.buttonHover?.contrastText,
  "&:hover": {
    backgroundColor: "primary.dark",
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.buttonFormColor?.blueBackground,
    color: theme.palette.buttonHover?.contrastText,
    opacity: 0.4,
  },
})

export const textAreaStyles: SxProps<Theme> = {
  "& .MuiInputBase-root": {
    padding: "8px 12px !important",
  },
  "& .MuiInputBase-input": {
    padding: "0 !important",
  },
  "& .MuiInputBase-inputMultiline": {
    padding: "0 !important",
  },
}