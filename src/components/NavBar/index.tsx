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
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import { Avatar, Tooltip } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { theme } from '../config/theme';

// Opções do login a serem utilizadas em proxima versão do codigo.
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

interface NavBarProps {
  list: string[],
}

export const ResponsiveAppBar: React.FC<NavBarProps> = ({ list }) => {
  const router = useRouter()
  const pathname = usePathname()
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

  const handlePageRedirect = (pagina: string) => {
    router.push(`/${pagina}`)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const buttonBorderStyle = (item:string) => {
    if (`/${item}`==pathname){
      const styles = {borderBottom: "solid", color: "red"}
      return styles
    }
      return 'none'

  }

  return (
      <AppBar position="fixed" sx={{ backgroundColor: theme.palette.bgColor?.light}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              marginLeft: 0
            }}>
              <Image width={43} height={48}
                src='/assets/logo.svg'
                alt="imagem filme" />
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
                lineHeight: '1.6',
                fontSize: '19.2px',
                color: theme.palette.textColor?.main
              }}
            >
              E-Acelera
            </Typography>

            {/* MENU ANDROID */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{color: theme.palette.textColor?.dark}}
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
                    <Link href={`/${item}`}>
                      <Typography textAlign="center" sx={{color:theme.palette.textColor?.light}}>{item}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
              <Image width={43} height={48}
                src='/assets/logo.svg'
                alt="imagem filme"
                style={{ display: 'flex' }}
                 />
            </Box>
            <Typography
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontSize: '19.2px',
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '0.15px',
                lineHeight: '1.6',
                textDecoration: 'none',
                color: theme.palette.textColor?.main
              }}
            >
              E-Acelera
            </Typography>
            <Box sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                md: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              },
            }}>
              {list.map((item) => (
                <Button
                  key={item}
                  onClick={() => handlePageRedirect(item)}
                  sx={{
                    my: 2, display: 'block',
                    textTransform: 'none',
                    typography: theme.typography.subtitle1,
                    margin: '0 0.5rem',
                    color: theme.palette.textColor?.light,
                    borderBottomWidth: '3px',
                   buttonBorderStyle(item),
                    borderBottomColors: 'black',
                    borderRadius: '0',

                    '&:active': {
                      boxShadow: 'none',
                      borderColor: '#005cbf',
                    },
                  }}
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
                  sx={{ p: 0, backgroundColor: 'black', visibility: 'hidden' }}>
                  <Avatar alt="Remy Sharp" src="" />
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