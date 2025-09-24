import { useContext } from "react";
import { AccessibilityContext } from "@/context/AccessibilityContext";

export const useAccessibilityContext = () => {
  const context = useContext(AccessibilityContext);
  if(!context) {
    throw new Error("useAccessibilityContext hook must be used within a GlobalContextProvider");
  }
  return context;
}