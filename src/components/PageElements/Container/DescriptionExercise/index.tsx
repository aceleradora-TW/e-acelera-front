import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { theme, themePalette } from "@/app/config/theme";
import ReactMarkdown from "react-markdown";

interface DescriptionExerciseProps {
  text: string;
}

export const DescriptionExercise: React.FC<DescriptionExerciseProps> = ({ text }) => {
    const components = {
        p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
          <Typography variant="body1" {...props} />
        ),
        a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
          <Link
            variant="caption" target="_blank" rel="noreferrer"
            sx={{ color: themePalette.descriptionCard, textDecorationColor: themePalette.descriptionCard, display: "block" }}
            {...props} />
        )
        // a: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        //   <Link {...props} />
        // ) 
      };

      const typographyBreakLine = {
     
        pre: (props:React.HTMLAttributes<HTMLHeadingElement> ) => (
          <Box sx={{display: "flex", flexDirection: "column", flexWrap: "wrap"}}>
          <ReactMarkdown  {...props} >{text}
          </ReactMarkdown>
        </Box>
              
           )
      }


  return (
    <Box sx={{...theme.customStyles.description, flexDirection: "column", width: "100%"}}>
        <ReactMarkdown components={typographyBreakLine}>
                {text}
        </ReactMarkdown>
    </Box>
  );
};
