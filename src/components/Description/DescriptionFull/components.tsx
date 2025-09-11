import { Link, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { theme } from "@/app/config/themes";
import CodeBlock from "@/components/CodeBlock";

  const components = {

    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
      <Table sx={{ maxWidth: 500}} {...props} />
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