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
  textSize: number;
  increaseTextSize: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contrastEnabled, setContrastEnabled] = useState(false);
  const [readingMaskEnabled, setReadingMaskEnabled] = useState(false);
  const [textSize, setTextSize] = useState(16); 
  
  const toggleContrast = () => setContrastEnabled(prev => !prev);
  const toggleReadingMask = () => {
    setReadingMaskEnabled((prev) => {
      const newValue = !prev;
      localStorage.setItem('readingMaskEnabled', String(newValue));
      return newValue;
    });
  };
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
 
  const increaseTextSize = () => {
    setTextSize (prev => (prev >= 24 ? 16 : prev + 2));
  };

  useEffect(() => {
     const storedMask = localStorage.getItem('readingMaskEnabled');
  if (storedMask === 'true') {
    setReadingMaskEnabled(true);
  }
}, []);


  const clearSettings = () => {
    setContrastEnabled(false);
    setReadingMaskEnabled(false);
    setTextSize(16);
    localStorage.clear();
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
      {children}
    </AccessibilityContext.Provider>
    
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) throw new Error('useAccessibility must be used within AccessibilityProvider');
  return context;
};