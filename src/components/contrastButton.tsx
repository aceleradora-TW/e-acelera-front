'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import ContrastIcon from '@mui/icons-material/Contrast';
import { useEffect, useState, createContext, useContext } from 'react';
import { highContrastTheme } from '@/app/config/themes/highContrast';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@/app/config/themes';

const HighContrastContext = createContext({
  highContrast: false,
  toggleHighContrast: () => {},
});

export const HighContrastProvider = ({ children }: { children: React.ReactNode }) => {
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem('highContrast');
    if (storedPreference === 'true') {
      setHighContrast(true);
    }
  }, []);

  const toggleHighContrast = () => {
    const newHighContrast = !highContrast;
    setHighContrast(newHighContrast);
    localStorage.setItem('highContrast', String(newHighContrast));
  };

  return (
    <HighContrastContext.Provider value={{ highContrast, toggleHighContrast }}>
      <ThemeProvider theme={highContrast ? highContrastTheme : theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </HighContrastContext.Provider>
  );
};

export const useHighContrast = () => useContext(HighContrastContext);

export default function ContrastButton() {
  const { highContrast, toggleHighContrast } = useHighContrast();
  const theme = useTheme();

  return (
    <Button
      variant='outlined'
      onClick={toggleHighContrast}
      startIcon={<ContrastIcon />}
      sx={{
         ...theme.customStyles.button,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px,18px',
        borderRadius: '10px',
        fontSize: '0.60rem',
        boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
      }}
    >
      Contraste +
    </Button>
  );
}