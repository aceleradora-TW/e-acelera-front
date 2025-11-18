import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";

interface SectionContentProps extends BoxProps {
  children: ReactNode;
  variant?: "standard" | "faq" | "content-only";
}

//Componente wrapper para conteúdo de seções com padding consistente

export const SectionContent = ({
  children, variant = "standard",
  sx, ...props }: SectionContentProps) => {
  const paddingStyles = {
    standard: {
      xs: "10px 5% 40px 5%",
      md: "40px 10%",
    },
    faq: {
      xs: "40px 5%",
      md: "40px 10%",
    },
    "content-only": {
      xs: "0 5%",
      md: "0 10%",
    },
  };

  return (
    <Box
      sx={{
        padding: paddingStyles[variant],
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

