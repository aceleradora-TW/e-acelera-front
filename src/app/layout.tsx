

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ResponsiveAppBar from "@/components/NavBar"
import { Box } from "@mui/material"
import { getServerSession } from "next-auth"
import ClientSessionProvider from "@/components/ClientSessionProvider"
import { ThemeConfig } from "./config/themes"
import { Footer } from "@/components/Footer/Footer"
import { AcessibilidadeProvider } from "@/context/accessibility.context"
import Mascara from "@/components/mascara-de-acessibilidade"

const menuItems = ["Nivelamento", "Autoestudo"]

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "E-acelera - Plataforma de Estudo para Desenvolvedores",
  description:
    "O E-acelera é uma plataforma inovadora que faz parte do programa Aceleradora Ágil. A plataforma oferece nivelamentos e desafios para desenvolvedores aprimorarem suas habilidades em programação.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeConfig>
          
          <ClientSessionProvider>
            <AcessibilidadeProvider>
              <Box
                sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
              >
                <Box sx={{ marginBottom: "80px" }}>
                  <ResponsiveAppBar list={menuItems} session={session} />
                </Box>
                <Box component="main" sx={{ flex: 1 }}>
                  {children}
                </Box>
                <Footer 
                  linkedinUrl={"https://www.linkedin.com/school/aceleradora-%C3%A1gil/?originalSubdomain=br"} 
                  projectUrl={"https://www.thoughtworks.com/pt-br/about-us/diversity-and-inclusion/aceleradora"} />
              </Box>
              <Mascara />
              </AcessibilidadeProvider>
          </ClientSessionProvider>
          
         
        </ThemeConfig>
      </body>
    </html>
  )
}
