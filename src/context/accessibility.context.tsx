'use client'
import { Palette, PaletteMode } from '@mui/material';
import { createContext, useContext, useEffect, useState } from 'react';

interface AccessibilityContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  clearSettings: () => void;
  themeMode: PaletteMode;
  toggleThemeMode: () => void;
  readingMaskEnabled: boolean;
  toggleReadingMask: () => void;
  themeFontFamily?: string;
  changeFontFamily: (fontFamily?: string) => void;
}

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

export const AccessibilityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<PaletteMode>('light');
  const [readingMaskEnabled, setReadingMaskEnabled] = useState(false);
  const [themeFontFamily, setThemeFontFamily] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const storedContrast = localStorage.getItem('themeMode') as PaletteMode;
    if (storedContrast) {
      setThemeMode(storedContrast);
    }
  }, []);

  useEffect(() => {
    const storedFont = localStorage.getItem('themeFontFamily');
    if (storedFont === 'OpenDyslexic') {
      setThemeFontFamily('OpenDyslexic');
    }
  }, []);

  useEffect(() => {
    const storedMask = localStorage.getItem('readingMaskEnabled');
    if (storedMask === 'true') {
      setReadingMaskEnabled(true);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const toggleThemeMode = () => {
    setThemeMode((prev) => {
      const newValue = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', newValue);
      return newValue;
    });
  };

  const toggleReadingMask = () => {
    setReadingMaskEnabled((prev) => {
      const newValue = !prev;
      localStorage.setItem('readingMaskEnabled', String(newValue));
      return newValue;
    });
  };

  const changeFontFamily = (fontFamily?: string) => {
    setThemeFontFamily((prev) => {
      const newFont = prev ? undefined : fontFamily;
      if (newFont) {
        localStorage.setItem('themeFontFamily', newFont);
      } else {
        localStorage.removeItem('themeFontFamily');
      }
      return newFont;
    });
  };

  const clearSettings = () => {
    setThemeMode('light');
    setReadingMaskEnabled(false);
    setThemeFontFamily(undefined);
    localStorage.removeItem('themeMode');
    localStorage.removeItem('readingMaskEnabled');
    localStorage.removeItem('themeFontFamily');
  };

  return (
    <AccessibilityContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        clearSettings,
        themeMode,
        toggleThemeMode,
        readingMaskEnabled,
        toggleReadingMask,
        themeFontFamily,
        changeFontFamily,
      }}
    >{children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context)
    {throw new Error(
      "useAccessibility must be used within AccessibilityProvider"
    );}
  return context;
};
