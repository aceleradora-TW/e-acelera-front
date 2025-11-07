"use client";
import { createContext, useContext, useState } from "react";

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

  const toggleContrast = () => setContrastEnabled((prev) => !prev);
  const toggleReadingMask = () => setReadingMaskEnabled((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const changeFontFamily = (fontFamily?: string) => {
    setThemeFontFamily((prev) => (prev ? undefined : fontFamily));
  };

  const clearSettings = () => {
    setContrastEnabled(false);
    setReadingMaskEnabled(false);
    setThemeFontFamily(undefined);
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
      }}
    >
      {children}
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
