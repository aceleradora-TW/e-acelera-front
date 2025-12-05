'use client'
import { createContext, useContext, useEffect, useState } from 'react';

interface AccessibilityContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  clearSettings: () => void;
  contrastEnabled: boolean;
  toggleContrast: () => void;
  readingMaskEnabled: boolean;
  toggleReadingMask: () => void;
  themeFontFamily?: string;
  changeFontFamily: (fontFamily?: string) => void;
  textSize: number;
  increaseTextSize: () => void;
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
  const [contrastEnabled, setContrastEnabled] = useState(false);
  const [readingMaskEnabled, setReadingMaskEnabled] = useState(false);
  const [themeFontFamily, setThemeFontFamily] = useState<string | undefined>(
    undefined
  );
  const [textSize, setTextSize] = useState(16);

  useEffect(() => {
    const storedContrast = localStorage.getItem('contrastEnabled');
    if (storedContrast === 'true') {
      setContrastEnabled(true);
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

  const toggleContrast = () => {
    setContrastEnabled((prev) => {
      const newValue = !prev;
      localStorage.setItem('contrastEnabled', String(newValue));
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

  const increaseTextSize = () => {
    setTextSize((prev) => (prev >= 24 ? 16 : prev + 2));
  };

  const clearSettings = () => {
    setContrastEnabled(false);
    setReadingMaskEnabled(false);
    setThemeFontFamily(undefined);
    setTextSize(16);
    localStorage.removeItem('contrastEnabled');
    localStorage.removeItem('readingMaskEnabled');
    localStorage.removeItem('themeFontFamily');
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
        themeFontFamily,
        changeFontFamily,
        textSize,
        increaseTextSize,
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
