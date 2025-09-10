import React, { useState } from "react";
import { Alert, Box, Grid, Link, Snackbar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { theme } from "@/app/config/themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { ARRAY_SPECIAL_CHARS } from "@/utils/constants";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import components from "./components";

interface DescriptionFullProps {
  text: string;
}

export const DescriptionFull: React.FC<DescriptionFullProps> = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  
  return (
    <Grid
      container
      alignItems="stretch"
      sx={{ ...theme.customStyles.description, height: "100%" }}
    >
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <MarkdownRenderer
          components={components}
        >
          {text}
        </MarkdownRenderer>
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
