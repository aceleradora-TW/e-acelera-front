'use client'
import Image from "next/image"
import react from "../../public/assets/react.png"
import js from "../../public/assets/js.png"
import next from "../../public/assets/next.png"
import { AppBar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeConfig } from '@/components/config/theme'
import StatusSelect from "@/components/StatusSelect"
import { ClickButton } from "@/components/ClickButton"
import { useRouter } from "next/navigation"
import ListingCard from "@/components/ListingCard"

const drawerWidth = 0

export default function Home() {
  const router=useRouter()
  function clickTest(){
    router.push("/")
  }
  return (
    <main>
        <ListingCard 
        image="/assets/next.png" 
        title="Next"
        description="
        It is a long established fact that a reader will be distracted by the readable content of a page when 
        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
        of letters, as opposed to using 'Content here, content here"
        />
        <ListingCard 
        title="Javascript"
        description="Javascript é bão Javascript é bão Javascript é bãoJavascript é bão Javascript é bão" 
        table="exercise"
        />
      {/* <ThemeConfig>
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
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" noWrap component="div" flexGrow={1} sx={{ cursor: "pointer" }}>
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
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />

            <CardContent>
              <Typography variant="h5" component="div" color="black">
                React
              </Typography>
              <Typography variant="body2" color="black">
                11/02/2024
              </Typography>

              <Typography variant="body2" color="black">
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
            <ClickButton title="Próximo exercício" click={clickTest} />
            <ClickButton title="Entrar" click={clickTest} />
            <StatusSelect/>
            <CardContent>
              <Typography variant="h5" component="div" color="black">
                JavaScript
              </Typography>
              <Typography variant="body2" color="black">
                01/02/2024
              </Typography>

              <Typography variant="body2" color="black">
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
            <ClickButton title="Próximo exercício" click={clickTest} />
            <ClickButton title="Entrar" click={clickTest} />
            <StatusSelect />
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
            <ClickButton title="Próximo exercício" click={clickTest} />
            <ClickButton title="Entrar" click={clickTest} />
            <StatusSelect />
          </Box>
        </Box>
      </ThemeConfig> */}
    </main>
  )
}
