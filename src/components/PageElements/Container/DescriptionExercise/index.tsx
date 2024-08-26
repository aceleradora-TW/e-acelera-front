import React, { useState } from "react";
import { Box, Link, Typography, Snackbar, Alert } from "@mui/material";
import { theme, themePalette } from "@/app/config/theme";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface DescriptionExerciseProps {
  text: string;
}

export const DescriptionExercise: React.FC<DescriptionExerciseProps> = ({
  text,
}) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const components = {
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <Typography variant="body1" gutterBottom {...props} />
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
      const codeString = String(children).replace(/\n$/, "");
      return !inline && match ? (
        <Box
          component="div"
          onClick={() => handleCopy(codeString)}
          sx={{
            position: "relative",
            cursor: "pointer",
          }}
        >
          <SyntaxHighlighter
            style={materialDark}
            language={match[1]}
            PreTag="div"
            {...props}
          >
            {codeString}
          </SyntaxHighlighter>
          <Box
            sx={{
              position: "absolute",
              top: "24px",
              right: "16px",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleCopy(codeString);
            }}
          >
            <ContentCopyIcon sx={{ color: "white" }} />
          </Box>
        </Box>
      ) : (
        <Typography
          component="span"
          sx={{
            fontFamily: "monospace",
            backgroundColor: "#f5f5f5",
            padding: "2px 4px",
            borderRadius: "4px",
          }}
        >
          {children}
        </Typography>
      );
    },
  };

  return (
    <Box
      sx={{
        ...theme.customStyles.description,
        flexDirection: "column",
        width: "100%",
      }}
    >
      <ReactMarkdown components={components}>{text}</ReactMarkdown>
      <Snackbar
        open={copySuccess}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={2000}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Código copiado para a área de transferência!
        </Alert>
      </Snackbar>
    </Box>
  );
};