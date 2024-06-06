'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Roboto } from 'next/font/google';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import { DisplaySettings } from '@mui/icons-material';
import { Avatar, Tooltip } from '@mui/material';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
interface NavBarProps {
    list:string[],
}

export const ResponsiveAppBar:React.FC<NavBarProps> = ({list})=> {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{  fontFamily: 'Roboto' , backgroundColor:'#FFFFFF', color:'#031D3C' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:'flex', alignItems:'center'}}>
          <Box sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              marginLeft:0}}>
          <Image width={43} height={48}
                  src='/assets/logo.svg'
                  alt="imagem filme"/>
          </Box>
          {/* MENU WEB */}
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.15px',
              lineHeight:'1.6',
              fontSize:'1.2rem'
            }}
          >
            E-Acelera
          </Typography>

          {/* MENU ANDROID */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',  } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {list.map((item) => (
                <MenuItem key={item} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
          <Image width={43} height={48}
                  src='/assets/logo.svg'
                  alt="imagem filme"
                  style={{display:'flex'}}
                  className='border-4'/>
          </Box>
          <Typography
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              fontSize:'1.25rem',
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '0.15px',
              lineHeight:'1.6',
              textDecoration: 'none',
            }}
          >
            E-Acelera
          </Typography>
          <Box sx={{ flexGrow: 1, 
            display: { xs: 'none', 
            md: 'flex', 
            alignItems:'center', 
            justifyContent:'center' }, }}>
            {list.map((item) => (
              <Button
                key={item}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block',  
                  textTransform: 'none', 
                  fontSize:'1rem', 
                  lineHeight:'1.7', 
                  fontWeight:500, 
                  letterSpacing:'0.4px', 
                  color:'primary'}}
              >
                {item}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          {/* MENU DO PERFIL WEB  */}
                <Tooltip title="Open settings">
                  {/*Item a ser adicionado no IconButton onClick={handleOpenUserMenu}  */}
              <IconButton 
              sx={{ p: 0, backgroundColor:'black', visibility:'hidden' }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> 
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
// Componente utilizado do Material ui - App bar with responsive menu