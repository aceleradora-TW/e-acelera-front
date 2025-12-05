"use client";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        mx: pathname === "/home" ? 0 : 4, 
      }}
    >
      {children}
    </Box>
  );
}