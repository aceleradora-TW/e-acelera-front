import React from "react"
import { Link, Typography } from "@mui/material"
import { theme } from "@/app/config/themes"


const components = {
    p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography variant="body1" sx={{ whiteSpace: "pre-wrap", marginTop: 2 }} {...props} />
    ),
    a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
      <Link
        variant="caption" target="_blank" rel="noreferrer"
        sx={{ color: theme.palette.textColor?.light, textDecorationColor: theme.palette.textColor?.light, display: "block" }}
        {...props} />
    )
  }
export default components;