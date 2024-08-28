import React, { useState } from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import { theme, themePalette } from "@/app/config/theme";
import { DescriptionDivider } from "../DescriptionDivider";
import { CardVideo } from "@/components/CardVideo";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface DescriptionWithVideoProps {
  textDescription: string;
  textVideo: string;
  title: string;
  linkVideo: string;
  references: string;
}

export const DescriptionWithVideo: React.FC<
  DescriptionWithVideoProps
> = ({ textDescription, textVideo, title, linkVideo, references }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };
  const components = {
    p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography variant="body1" sx={{ marginBottom: 3 }} {...props} />

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
            maxWidth: "100%",
            overflowX: "auto"
          }}
        >
          <SyntaxHighlighter
            style={materialDark}
            language={match[1]}
            PreTag="div"
            {...props}
            wrapLongLines
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
            wordBreak: "break-word"
          }}
        >
          {children}
        </Typography>
      );
    },
  };

  return (
    <>
      {!linkVideo.trim() || !textVideo.trim() || !title.trim() ? (
        <Box sx={{...theme.customStyles.description, height: "100%", boxSizing: "border-box", flexDirection: "column"}}>
        <ReactMarkdown components={components}>{textDescription}</ReactMarkdown>
      </Box>
      ) : (
        <Grid container columnSpacing={3} rowSpacing={3} alignItems="stretch" >
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Box sx={{...theme.customStyles.description, height: "100%", boxSizing: "border-box", flexDirection: "column"}}>
              <ReactMarkdown components={components}>{textDescription}</ReactMarkdown>
            </Box>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <CardVideo
              text={textVideo}
              title={title}
              linkVideo={linkVideo}
              references={references}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};
