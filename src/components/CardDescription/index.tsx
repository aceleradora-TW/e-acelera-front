import React from "react";
import { Typography} from "@mui/material";
import ReactMarkdown from "react-markdown";

interface fullDescriptionProps {
  text: string;
}

const components = {
  p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography variant="body1" {...props} />
  ),
};

export const CardDescription: React.FC<fullDescriptionProps> = ({ text }) => {
  
  return (
    <ReactMarkdown components={components}>
      {text.replace(/\n\n/g, " ")}
    </ReactMarkdown>
  );
};
