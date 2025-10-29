import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";

export const highContrastTheme = createTheme({
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
      main: '#f50057',
    },
    button: {
      main: '#444444',
      contrastText: '#E0E0E0',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#121212 !important',
          color: '#E0E0E0 !important',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          backgroundColor: '#E0E0E0',
        },
        thumb: {
          backgroundColor: '#fffafa',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#444444 !important',
          color: '#E0E0E0 !important',
          '&:hover': {
            backgroundColor: '#555555 !important',
        },
      },
    },
  },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#E0E0E0 !important',
          borderBottomColor: '#E0E0E0 !important',
          textDecoration: 'underline',
          '&:hover': {
          backgroundColor: '#555555 !important'}
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#222 !important',
          color: '#E0E0E0 !important',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#E0E0E0 !important',
          borderRadius: '4px'
        },
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #E0E0E0 !important',
            borderRadius: '4px',
          },
          height: '40px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#E0E0E0 !important',
          '&.Mui-focused': {
            color: '#E0E0E0 !important',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E0E0E0',
            borderRadius: '5px',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          ...typography.h1,
          color: '#E0E0E0 !important',
        },
        h2: {
          ...typography.h2,
          color: '#E0E0E0 !important',
        },
        h3: {
          ...typography.h3,
          color: '#E0E0E0 !important', 
        },
        body1: {
          ...typography.body1,
          color: '#E0E0E0 !important', 
        },
        caption: {
          ...typography.caption,
          color: '#E0E0E0 !important',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212 !important',
        },
      },
    },
    
  },
});