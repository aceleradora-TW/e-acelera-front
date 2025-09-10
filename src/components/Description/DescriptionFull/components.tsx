import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Alert, Box, Grid, Link, Snackbar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { ARRAY_SPECIAL_CHARS } from "@/utils/constants";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { theme } from "@/app/config/themes";
import CodeBlock from "@/components/CodeBlock";

//criando componentes customizados para  parte de code 

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
    code: (props : any) => <CodeBlock {...props} />

    };

export default components;