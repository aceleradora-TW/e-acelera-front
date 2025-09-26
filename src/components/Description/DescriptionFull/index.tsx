import React, { useState } from "react";
import { Alert, Box, Grid, Link, Snackbar, Typography, useTheme } from "@mui/material";
import { theme } from "@/app/config/themes";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { ARRAY_SPECIAL_CHARS } from "@/utils/constants";

interface DescriptionFullProps {
  text: string;
}

export const DescriptionFull: React.FC<DescriptionFullProps> = ({
  text,
}) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const muiTheme = useTheme();

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const components = {
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <Typography variant="body1" sx={{ marginTop: 2 }} {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
      <ul  {...props} />
    ),
    a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
      <Link
        variant="body1"
        target="_blank"
        rel="noreferrer"
        sx={{
          color: theme.palette.textColor?.light,
          textDecorationColor: theme.palette.textColor?.light,
          display: "inline-block",
        }}
        {...props}
      />
    ),
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "");
      let codeString = String(children).replace(/\n$/, "");
      ARRAY_SPECIAL_CHARS.forEach((item) => {
        codeString = codeString.replace(new RegExp(item.char, 'g'), item.replace);
      });

      codeString = String(codeString).replace(/\n$/, "");

      return !inline && match ? (
        <Box
          component="div"
          sx={{
            position: "relative",
            cursor: "pointer"
          }}
          onClick={() => handleCopy(codeString)}
        >
          <SyntaxHighlighter
            style={materialDark}
            language={match[1]}
            PreTag="div"
            {...props}
            showLineNumbers
            customStyle={{
              margin: 0,
              borderRadius: "4px",
            }}
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
            backgroundColor: muiTheme.palette.mode === 'dark' ? '#555555' : '#f5f5f5',
            color: muiTheme.palette.mode === 'dark' ? '#FFFFFF' : 'inherit',
            padding: "2px 4px",
            borderRadius: "4px",
            wordBreak: "break-word",
            whiteSpace: "pre-wrap",
          }}
        >
          {children}
        </Typography>
      );
    },
  };

  return (
    <Grid container alignItems="stretch" sx={{ ...theme.customStyles.description, height: "100%" }}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
      </Grid>
    </Grid>
  );
};
