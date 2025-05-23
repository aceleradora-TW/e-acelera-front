"use client"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import { Box } from "@mui/material"
import { theme } from "@/app/config/themes"
import { MobileMenu } from "./MobileNavBar"
import { WebMenu } from "./WebNavBar"
import { Session } from "next-auth"

interface NavBarProps {
  list: string[]
  session: Session | null
}

const ResponsiveAppBar: React.FC<NavBarProps> = ({ list, session }) => (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: theme.palette.bgColor?.main}}
    >
      <Box component="nav">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", alignItems: "center" }}
          >
            <MobileMenu list={list} />
            <WebMenu list={list} session={session} />
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  )


export default ResponsiveAppBar