import React from "react";
import { Grid, Link, useTheme } from "@mui/material";
import { MarkdownRenderer } from "@/components/UI/markdown-renderer";

interface DescriptionReferenceProps {
  text: string;
}

export const DescriptionReference: React.FC<DescriptionReferenceProps> = ({
  text,
}) => {
  const theme = useTheme();
  const components = {
    a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
      <Link
        variant="caption"
        target="_blank"
        rel="noreferrer"
        sx={{
          color: theme.palette.textColor?.light,
          textDecorationColor: theme.palette.textColor?.light,
          display: "block",
        }}
        {...props}
      />
    ),
  };
  return (
    <Grid container alignItems="stretch" sx={{ ...theme.customStyles.description }}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <MarkdownRenderer components={components}>
      {text}  
      </MarkdownRenderer>  
      </Grid>
    </Grid>
  );
};
