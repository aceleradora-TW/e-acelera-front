"use client";
import { Box, } from "@mui/material";
import { usePathname } from "next/navigation";

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        mx: pathname === "/" ? 0 : "auto", 
        my: 0,
        px: pathname === "/" ? 0 : 4,
        width: "100%",
        maxWidth: pathname === "/" ? undefined : "1536px", 
      }}
    >
      {children}
    </Box>
  );
}
