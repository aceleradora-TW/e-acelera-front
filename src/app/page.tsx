'use client'
import Image from "next/image"
import react from "../../public/assets/react.png"
import js from "../../public/assets/js.png"
import next from "../../public/assets/next.png"
import { AppBar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import StatusSelect from "@/components/StatusSelect"
import { ClickButton } from "@/components/ClickButton"
import { useRouter } from "next/navigation"
import { BaseCard } from "@/components/BaseCard"
import { ButtonCard } from "@/components/ButtonCard"
import { theme } from '@/components/config/theme'



const drawerWidth = 0

export default function Home() {
  const router = useRouter()
  function clickTest() {
    router.push("/")
  }


 
  return (
    <main>
     

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
          </Box>

          <Box sx={{display: 'flex', justifyContent: 'space-around' , alignItems: 'center', gap: '5px' ,flexWrap: 'wrap', padding: 2, marginTop: 10}}>
          <BaseCard title="Preparando o Ambiente" description="capaz capaz capaz capaz capaz capazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazteerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra linda" route="TestTopicos" image="/assets/js.png" />

          <BaseCard title="Preparando o Ambiente" description="capaz capaz capaz capaz capaz capazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazteerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra linda" route="TestTopicos" image="/assets/js.png" />

          <BaseCard title="Preparando o Ambiente" description="capaz capaz capaz capaz capaz capazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazteerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra linda" route="TestTopicos" image="/assets/js.png" />

          <BaseCard title="Preparando o Ambiente" description="capaz capaz capaz capaz capaz capazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazteerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra linda" route="TestTopicos" image="/assets/js.png" />
          </Box>
          
    
    </main>
  )
}
