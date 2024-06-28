'use client'
import Image from "next/image"
import react from "../../public/assets/react.png"
import js from "../../public/assets/js.png"
import next from "../../public/assets/next.png"
import { AppBar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import StatusSelect from "@/components/StatusSelect"
import { ClickButton } from "@/components/ClickButton"
import { BaseCard } from "@/components/BaseCard"
import { ButtonCard } from "@/components/ButtonCard"
import { theme } from '@/components/config/theme'



const drawerWidth = 0

export default function Home() {
 
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
          <BaseCard title="Next" description="Next.js é um framework de desenvolvimento web construído sobre React, criado pela Vercel. Ele oferece uma série de funcionalidades que simplificam a criação de aplicações web modernas. Entre elas, destaca-se a renderização híbrida, que suporta tanto a renderização do lado do servidor (SSR - Server-Side Rendering) quanto a renderização estática (Static Site Generation - SSG). Isso permite aos desenvolvedores escolher a melhor estratégia de renderização para suas páginas, melhorando a performance e a experiência do usuário." route="TestTopicos" image="/assets/next.png" />

        
          <BaseCard title="Lógica de programação" description="Lógica de programação é a disciplina que estuda os princípios e métodos utilizados para resolver problemas de forma sistemática e eficiente através da criação de algoritmos. Ela envolve a compreensão e aplicação de uma série de conceitos fundamentais que permitem o desenvolvimento de programas de computador, que são sequências de instruções executadas por uma máquina para realizar tarefas específicas." route="TestTopicos" />

      
          <ButtonCard title="Hello Word"description="Realize seu primeiro código em JavaScript" route="TestTopicos"/>

          
          </Box>
          
    
    </main>
  )
}
