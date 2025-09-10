import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Alert, Box, Grid, Link, Snackbar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { ARRAY_SPECIAL_CHARS } from "@/utils/constants";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { theme } from "@/app/config/themes";

  const components = {

    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
      <Table {...props} />
    ),
    thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <TableHead {...props} />
    ),
    tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <TableBody {...props} />
    ),
    tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
      <TableRow {...props} />
    ),
    th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
      <TableCell {...props} align="left" />
    ),
    td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
      <TableCell {...props} align="center" />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <Typography variant="body1" sx={{ marginTop: 2 }} {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul {...props} />,
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
        codeString = codeString.replace(
          new RegExp(item.char, "g"),
          item.replace
        );
      });

      codeString = String(codeString).replace(/\n$/, "");

        function handleCopy(codeString: string): void {
            throw new Error("Function not implemented.");
        }

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
            backgroundColor: "#f5f5f5",
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

export default components;