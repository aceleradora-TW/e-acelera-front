import React from "react";
import { Divider, Box, Typography, useMediaQuery } from "@mui/material";
import { theme } from "@/app/config/theme";
import ReactMarkdown from "react-markdown";
import { ThemeDescription } from "../ThemeDescription";

interface TopicDescriptionProps {
  text: string;
  video: boolean;
}

const boxStyle: object = {
  width: "49%"
}
interface MarkdownTextProps {
  markdownContent: string;
}
const components = {
  p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography variant="body1" {...props} />
  ),
};

export const TopicDescription: React.FC<TopicDescriptionProps> = ({ text, video}) => {
 
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('sm'));

  return (
      <Box >
        {!video && (<ThemeDescription text={text}/>)}
      </Box>
  );
};
