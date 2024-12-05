"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Box, Avatar, Menu, MenuItem, Typography, IconButton, Tooltip } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { theme } from "../../app/config/theme";
import { MobileMenu } from "./MobileNavBar";
import { WebMenu } from "./WebNavBar";
import { useSession, signOut } from "next-auth/react";


interface NavBarProps {
  list: string[];
}


const ResponsiveAppBar: React.FC<NavBarProps> = ({ list }) => {
  const { data: session } = useSession(); 
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };


  const handleCloseMenu = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: theme.palette.bgColor?.light }}
    >
      <Box component="nav">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", alignItems: "center" }}
          >
            
            <MobileMenu list={list} />
            <WebMenu list={list} />


            
            {session && (
              <Box
                sx={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Tooltip title="Perfil">
                  <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={session.user?.name || "Usuário"}
                      src={session.user?.image || "/default-avatar.png"}
                    />
                    <ArrowDropDownIcon />
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  sx={{ mt: "45px" }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem disabled>
                    <Typography>{session.user?.name || "Usuário"}</Typography>
                  </MenuItem>
                  <MenuItem disabled>
                    <Typography>{session.user?.email || "email@example.com"}</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => signOut()}>
                    <Typography>Sair</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};


export default ResponsiveAppBar;