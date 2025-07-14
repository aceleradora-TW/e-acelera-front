import React from "react";

interface ProgressBarProps {
  percentage: number; 
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  const clamped = Math.min(Math.max(percentage, 0), 100);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#aceef5",
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
