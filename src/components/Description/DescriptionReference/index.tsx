import React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import { theme, themePalette } from "@/app/config/theme";
import ReactMarkdown from "react-markdown";

interface DescriptionReferenceProps {
  text: string;
}

export const DescriptionReference: React.FC<DescriptionReferenceProps> = ({
  text,
}) => {
  const components = {
    a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
      <Link
        variant="caption"
        target="_blank"
        rel="noreferrer"
        sx={{
          color: themePalette.descriptionCard,
          textDecorationColor: themePalette.descriptionCard,
          display: "block",
        }}
        {...props}
      />
    ),
  };
  return (
    <Grid container alignItems="stretch" sx={{...theme.customStyles.description}}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <ReactMarkdown components={components}>{text}</ReactMarkdown>
      </Grid>
    </Grid>
  );
};
