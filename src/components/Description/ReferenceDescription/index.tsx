"use client";
import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { theme } from "@/components/config/theme";
import { ThemeConfig } from "@/components/config/theme";

interface ReferenceDescriptionProps {
  title: string;
  link: string;
}

export const ReferenceDescription: React.FC<ReferenceDescriptionProps> = ({ title, link }) => {
  return (
    <ThemeConfig>
      <Box sx={theme.customStyles.description}>
        <Box>
                <Link href={link}>{title}</Link>        
        </Box>
      </Box>
    </ThemeConfig>
  );
};
