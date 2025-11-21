import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";

interface SectionWrapperProps extends BoxProps {
  children: ReactNode;
  py?: number | { xs?: number; md?: number };
}

//Componente wrapper para seções com espaçamento vertical padronizado

export const SectionWrapper = ({
  children,
  py = { xs: 4, md: 4 },
  sx,
  ...props
}: SectionWrapperProps) => (
    <Box
      sx={{ py, ...sx, }}
      {...props}
    >
      {children}
    </Box>
  );

