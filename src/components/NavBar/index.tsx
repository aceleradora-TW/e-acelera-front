"use client"
import * as React from "react"
import {Box} from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import { theme } from "../../app/config/theme"
import { MobileMenu } from "./MobileNavBar"
import { WebMenu } from "./WebNavBar"

interface NavBarProps {
  list: string[];
}

 const ResponsiveAppBar: React.FC<NavBarProps> = ({ list }) => {
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: theme.palette.bgColor?.light }}
    >
      <Box
      component="nav"
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", alignItems: "center" }}
          >
            <WebMenu list={list} />
            <MobileMenu list={list} />
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};
export default ResponsiveAppBar
