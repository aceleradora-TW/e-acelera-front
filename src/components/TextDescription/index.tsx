import React from "react";
import { Link, Typography} from "@mui/material";
import ReactMarkdown from "react-markdown";
import { themePalette } from "@/app/config/theme";

interface TextDescriptionProps {
  text: string;
}

const components = {
  p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography variant="body1" {...props} />
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <Link 
    variant="caption" target="_blank" rel="noreferrer" 
    sx={{color: themePalette.descriptionCard, textDecorationColor: themePalette.descriptionCard, display: "block"}}
     {...props} />
  )
  // a: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  //   <Link {...props} />
  // ) 
};

export const TextDescription: React.FC<TextDescriptionProps> = ({ text }) => {
  
  return (
      <ReactMarkdown components={components}>
        {text.replace(/\n\n/g, " ")}
      </ReactMarkdown>
  );
};
