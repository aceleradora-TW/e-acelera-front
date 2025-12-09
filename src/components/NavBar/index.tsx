"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { theme } from "@/app/config/themes";
import { MobileMenu } from "./MobileNavBar";
import { WebMenu } from "./WebNavBar";
import { Session } from "next-auth";
import { Profiler } from "react";

interface NavBarProps {
  list: string[];
  session: Session | null;
}

const ResponsiveAppBar: React.FC<NavBarProps> = ({ list, session }) => {
  function onRender(
    id: string,
    phase: "mount" | "update" | "nested-update",
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ) {
    console.log("@@@PROFILER-id", id);
    // console.log("@@@PROFILER-phase", phase);
    // console.log("@@@PROFILER-actualDuration", actualDuration);
    // console.log("@@@PROFILER-baseDuration", baseDuration);
    // console.log("@@@PROFILER-startTime", startTime);
    // console.log("@@@PROFILER-commitTime", commitTime);
  }
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: theme.palette.bgColor?.main }}
    >
      <Box component="nav">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", alignItems: "center" }}
          >
            <MobileMenu list={list} />
            <Profiler
              id="WebMenu"
              onRender={(
                id,
                phase,
                actualDuration,
                baseDuration,
                startTime,
                commitTime
              ) =>
                onRender(
                  id,
                  phase,
                  actualDuration,
                  baseDuration,
                  startTime,
                  commitTime
                )
              }
            >
              <WebMenu list={list} session={session} />
            </Profiler>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};

export default ResponsiveAppBar;
