import { SxProps, Theme } from "@mui/material"

export const containerStyles = (theme: any) => ({
  ...theme.customStyles.FormPage.container,
  maxWidth: "100%",
})

export const actionsBoxStyles = (theme: any) => ({
  ...theme.customStyles.FormPage.actions,
})

export const cancelButtonStyles = (theme: Theme) => ({
  ml: 2,
  border: `1px solid ${theme.palette.error.main}`,
  color: `${theme.palette.error.main} !important`,
  backgroundColor: "transparent",

  "&:hover": {
    backgroundColor: `${theme.palette.error.main} !important`,
    borderColor: `${theme.palette.error.dark} !important`,
    color: `${theme.palette.error.contrastText} !important`,
  },
})

export const submitButtonStyles = (theme: Theme): SxProps<Theme> => ({
  ml: 2,
  border: `1px solid ${theme.palette.error.main}`,
  color: `${theme.palette.error.main} !important`,
  backgroundColor: "transparent",

  "&:hover": {
    borderColor: `${theme.palette.error.dark} !important`,
    backgroundColor: `${theme.palette.error.main} !important`,
    color: `${theme.palette.error.contrastText} !important`,
  },
})

export const editButtonStyles = (theme: Theme) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  backgroundColor: "transparent",

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.primary.dark,
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

export const textFieldStyles = (theme: Theme): SxProps<Theme> => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.background.paper
        : "transparent",

    "&:hover fieldset": {
      borderColor: "rgba(0,0,0,0.23)"
    },

    "&.Mui-focused fieldset": {
      borderColor: "rgba(0,0,0,0.23)"
    }
  }
})
