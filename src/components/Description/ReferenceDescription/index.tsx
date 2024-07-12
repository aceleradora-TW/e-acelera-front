"use client";
import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { theme } from "@/components/config/theme";
import { ThemeConfig } from "@/components/config/theme";

interface ReferenceDescriptionProps {
  links: string[];
}

export const ReferenceDescription: React.FC<ReferenceDescriptionProps> = ({
  links
}) => {
  return (
    <ThemeConfig>
      <Box sx={theme.customStyles.description}>
        <Box>
          {links.map((links, index) => (
              <Typography variant="body1" key={index}>
                {links}          
                <Link href={links[index]}></Link>
              </Typography>        
          ))}
        </Box>
      </Box>
    </ThemeConfig>
  );
};
