"use client";
import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { theme } from "@/components/config/theme";
import { ThemeConfig } from "@/components/config/theme";

interface ReferenceDescriptionProps {
    referencias:{
  titles: string[];
  links: string[];
}
}
export const ReferenceDescription: React.FC<ReferenceDescriptionProps> = ({
  referencias
}) => {
  return (
    <ThemeConfig>
      <Box sx={theme.customStyles.description}>
        <Box>
          {referencias.titles.map((title, index) => (
              <Typography variant="body1" key={index}>
                {`${title}: `}          
                <Link href={referencias.links[index]}>{referencias.links[index]}</Link>
              </Typography>        
          ))}
        </Box>
      </Box>
    </ThemeConfig>
  );
};
