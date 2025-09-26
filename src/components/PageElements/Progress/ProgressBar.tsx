import React from "react";
import { useTheme } from "@mui/material/styles";

interface ProgressBarProps {
  percentage: number; 
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  const muiTheme = useTheme();
  const clamped = Math.min(Math.max(percentage, 0), 100);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: muiTheme.palette.mode === 'dark' ? '#E0E0E0' : '#aceef5',
        borderRadius: 8,
        height: 6,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${clamped}%`,
          backgroundColor: "#002c53", 
          height: "100%",
          transition: "width 0.3s ease",
        }}
      />
    </div>
    
  );
  
}
