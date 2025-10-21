'use client'
import { theme } from '@/app/config/themes';
import { highContrastTheme } from '@/app/config/themes/highContrast';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createContext, useContext, useEffect, useState } from 'react';

interface AccessibilityContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  clearSettings: () => void;
  contrastEnabled: boolean;
  toggleContrast: () => void;
  readingMaskEnabled: boolean;
  toggleReadingMask: () => void;
  textSize: number;
  increaseTextSize: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contrastEnabled, setContrastEnabled] = useState(false);
  const [readingMaskEnabled, setReadingMaskEnabled] = useState(false);
  const [textSize, setTextSize] = useState(16); 
  
  useEffect(() => {
    const storedContrast = localStorage.getItem('contrastEnabled');
    if (storedContrast === 'true') {
      setContrastEnabled(true);
    }
  }, []);

   const toggleContrast = () => {
    setContrastEnabled(prev => {
      const newValue = !prev
      localStorage.setItem('contrastEnabled', String(newValue))
      return newValue
    })
  }
  const toggleReadingMask = () => setReadingMaskEnabled(prev => !prev);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
 
  const increaseTextSize = () => {
    setTextSize (prev => (prev >= 24 ? 16 : prev + 2));
  };

  const clearSettings = () => {
    setContrastEnabled(false);
    setReadingMaskEnabled(false);
    setTextSize(16);
  };
  
  return (
    <AccessibilityContext.Provider
      value={{
      isMenuOpen,
      toggleMenu,
      clearSettings,
      contrastEnabled,
      toggleContrast,
      readingMaskEnabled,
      toggleReadingMask,
      textSize,
      increaseTextSize,
      }}
    >
       <ThemeProvider theme={contrastEnabled ? highContrastTheme : theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) throw new Error('useAccessibility must be used within AccessibilityProvider');
  return context;
};