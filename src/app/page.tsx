'use client';
import Image from "next/image"
import { AppBar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeConfig } from '@/componentes/config/theme';
import { useEffect, useState } from "react";

const drawerWidth = 0;

export default function Home() {
  const [data, setData] = useState([])
  
  useEffect (()=>{
    async function listagemTemas() {
      try {
        const apiKey = process.env.NEXT_PUBLIC_SECRECT_KEY || ""
        console.log(apiKey)
        const data = await fetch("https://stackby.com/api/betav1/rowlist/stqB2IjOCulBJkhrZB/Nivelamento", {
          method:"GET", 
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json"
          }
        })
        
        const imprimeData = await data.json()
        console.log(imprimeData)
        setData(imprimeData.data)
      } catch (error) {
        console.log(error)
      }
    }
    listagemTemas()
  } ,[])

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
            <div>
              {/* {console.log(data)} */}
              {data.map((element: any, index: any) => ( 
                <div key={index}>
                  <CardContent>
                    <Typography variant="h5" component="div" color="black">
                     {element.field.Name}
                    </Typography>
                    <Typography variant="body2" color="black">
                      {element.field.createdAt}
                    </Typography>

                    <Typography variant="body2" color="black">
                      {element.field.Descrição}
                    </Typography>
                  </CardContent><Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      {element.field.Imagem.map((element: any, index: any) => (
                        <Image
                        key={index}
                        src={element.url}
                        width={300}
                        height={300}
                        alt="imagem filme" />
                      ))}
                      
                    </CardActionArea>
                  </Card>
                </div>
              ))}
            </div>
            
          </Box>
        </Box>
      </ThemeConfig>
    </main>
  );
}
