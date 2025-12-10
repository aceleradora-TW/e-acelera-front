import { ARRAY_SPECIAL_CHARS } from "@/utils/constants";
import { Alert, Box, Snackbar, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import { useAccessibility } from "@/context/accessibility.context";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBlock = ({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || "");
  let codeString = String(children).replace(/\n$/, "");
  ARRAY_SPECIAL_CHARS.forEach((item) => {
    codeString = codeString.replace(
      new RegExp(item.char, "g"),
      item.replace
    );
  });

  codeString = String(codeString).replace(/\n$/, "");
  const [copySuccess, setCopySuccess] = useState(false);
  const { contrastEnabled } = useAccessibility();
  const bg = contrastEnabled ? "#2b2b2b" : "#f5f5f5";
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return !inline && match ? (
    <Box
      component="div"
      sx={{
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => handleCopy(codeString)}
    >
      <SyntaxHighlighter
        style={a11yDark}
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
  ) : (
    <Typography
      component="span"
      sx={{
        fontFamily: "monospace",
        backgroundColor: bg,
        padding: "2px 4px",
        borderRadius: "4px",
        wordBreak: "break-word",
        whiteSpace: "pre-wrap",
      }}
    >
      {children}
    </Typography>
  );
}
