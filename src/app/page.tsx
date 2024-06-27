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
import { BaseCard } from "@/components/BaseCard"
import { ButtonCard } from "@/components/ButtonCard"

const drawerWidth = 0

export default function Home() {
  const router = useRouter()
  function clickTest() {
    router.push("/")
  }
  return (
    <main>
       <Box sx={{display: 'flex', justifyContent: 'space-around' , alignItems: 'center', gap: '5px' ,flexWrap: 'wrap'}}>

       <BaseCard title="Preparando o Ambiente" description="capaz capaz capaz capaz capaz capazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazteerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra linda" route="TestTopicos" image="/assets/js.png" />
       
        
          <BaseCard title="Preparando o Ambiente" description="capaz capaz capaz capaz capaz capazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazteerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra linda" route="TestTopicos" image="/assets/js.png" />

          <BaseCard title="Preparando o Ambiente" description="capaz capaz capaz capaz capaz capazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazteerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra linda" route="nivelamento" image="/assets/js.png" />

          <BaseCard title="Preparando o Ambiente" description="capaz capaz capaz capaz capaz capazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazcapazteerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra lindateerra linda" route="nivelamento" image="/assets/js.png" />

          
          </Box>

         
         
    
    </main>
  )
}
