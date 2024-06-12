'use client';
import Image from "next/image"
import react from "../../public/assets/react.png"
import js from "../../public/assets/js.png"
import next from "../../public/assets/next.png"
import { AppBar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeConfig } from '@/componentes/config/theme';
// import { theme } from  '@/componentes/config/theme';

const drawerWidth = 0;

export default function Home() {
  return (
    <main>
      <ThemeConfig>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: 'secondary.dark' }}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h1" noWrap component="div"  flexGrow={1} sx={{ cursor: "pointer"}}>
                Home
              </Typography>
              <Typography variant="h6" noWrap component="div" flexGrow={1} sx={{ cursor: "pointer" }}>
                Nivelamento
              </Typography>
              <Typography variant="h6" noWrap component="div" flexGrow={1} sx={{ cursor: "pointer" }}>
                AutoEstudo
              </Typography>
              <Typography variant="h6" noWrap component="div" flexGrow={1} sx={{ cursor: "pointer" }}>
                Feedback
              </Typography>

              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
           
          >
          </Box>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, backgroundColor: 'secondary.dark', width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />
            <CardContent>
              <Typography variant="h2" component="div" color="#00000">
                React
              </Typography>
              <Typography variant="button" >
                11/02/2024
              </Typography>

              <Typography variant="button" >
                Resume: Aula avançada de React.
              </Typography>
            </CardContent>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <Image
                  width={300}
                  src={react}
                  alt="imagem filme"
                />
              </CardActionArea>
            </Card>
            <CardContent>
              <Typography variant="caption" component="div" >
                JavaScript
              </Typography>
              <Typography variant="body1" >
                01/02/2024
              </Typography>

              <Typography variant="subtitle1" >
                Resume: Aula avançada de JavaScript.
              </Typography>
            </CardContent>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <Image
                  width={300}
                  src={js}
                  alt="imagem filme"
                />
              </CardActionArea>
            </Card>
            <CardContent>
              <Typography variant="h5" component="div" color="black">
                Next.js
              </Typography>
              <Typography variant="body2" color="black">
                13/02/2024
              </Typography>

              <Typography variant="body2" color="black">
                Resume: Aula avançada de next.js.
              </Typography>
            </CardContent>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <Image
                  width={300}
                  src={next}
                  alt="imagem filme"
                />
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </ThemeConfig>
    </main>
  );
}
