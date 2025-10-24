"use client";
import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { useAccessibility } from "@/context/accessibility.context";

export default function AccessibilityReadingMask() {
  const { readingMaskEnabled } = useAccessibility();
  const [mouseY, setMouseY] = useState(0);

  const theme = useTheme();
    const maskHeight = 120;
  
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => setMouseY(e.clientY);
  
      if (readingMaskEnabled) {
        window.addEventListener("mousemove", handleMouseMove);
      } else {
        window.removeEventListener("mousemove", handleMouseMove);
      }
  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, [readingMaskEnabled]);

  return (
    <>
      {readingMaskEnabled && (
        <>
          <Box sx={theme.customStyles.accessibilityReadMask(mouseY, maskHeight).background} />
          <Box sx={theme.customStyles.accessibilityReadMask(mouseY, maskHeight).topLine} />
          <Box sx={theme.customStyles.accessibilityReadMask(mouseY, maskHeight).bottonLine}/>
        </>
      )}
    </>
  );
}
