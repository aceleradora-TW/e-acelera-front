import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { theme, themePalette } from "@/app/config/theme";
import ReactMarkdown from "react-markdown";

interface ContainerReferenceProps {
  text: string;
}

export const ContainerReference: React.FC<ContainerReferenceProps> = ({
  text,
}) => {
  const components = {
    p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography variant="body1" {...props} />
    ),
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
    <Box sx={{...theme.customStyles.description}}>
      <ReactMarkdown components={components}>{text}</ReactMarkdown>
    </Box>
  );
};
