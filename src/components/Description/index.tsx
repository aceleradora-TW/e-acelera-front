"use client";
import * as React from "react";
import { theme } from "../config/theme";
import ThemeDescription from "./ThemeDescription";

interface DescriptionProps {
  list: string[];
}

export const ResponsiveDescription: React.FC<DescriptionProps> = ({ list }) => {

  return (
    <ThemeDescription></ThemeDescription>
    // <AppBar
    //   position="fixed"
    //   sx={{ backgroundColor: theme.palette.bgColor?.light }}
    // >
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters sx={{ display: "flex", alignItems: "center" }}>
    //       <WebMenu list={list}/>
    //       <MobileMenu list={list}/>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
 
  );
};

export default ResponsiveDescription;

