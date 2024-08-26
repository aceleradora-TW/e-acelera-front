import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { theme, themePalette } from "@/app/config/theme";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={materialDark} // Aqui você pode escolher o tema de syntax highlight
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <Typography
          component="span"
          sx={{ fontFamily: "monospace", backgroundColor: "#f5f5f5", padding: "2px 4px", borderRadius: "4px" }}
        >
          {children}
        </Typography>
      );
    },
  };

  return (
    <Box sx={{ ...theme.customStyles.description, flexDirection: "column", width: "100%" }}>
      <ReactMarkdown components={components}>
        {text}
      </ReactMarkdown>
    </Box>
  );
};