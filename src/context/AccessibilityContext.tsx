"use client"
import { createContext, ReactNode, useState } from "react";

type FontSize = "normal" | "large" | "extra-large";
type TextSpacing = "normal" | "medium" | "large";
type LineHeight = "normal" | "medium" | "large";
type FontMode = "default" | "dyslexic";

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  textSpacing: TextSpacing;
  setTextSpacing: (spacing: TextSpacing) => void;
  lineHeight: LineHeight;
  setLineHeight: (height: LineHeight) => void;
  fontMode: FontMode;
  setFontMode: (mode: FontMode) => void;
}

export const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>("normal");
  const [textSpacing, setTextSpacing] = useState<TextSpacing>("normal");
  const [lineHeight, setLineHeight] = useState<LineHeight>("normal");
  const [fontMode, setFontMode] = useState<FontMode>("default");

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        textSpacing,
        setTextSpacing,
        lineHeight,
        setLineHeight,
        fontMode,
        setFontMode,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}