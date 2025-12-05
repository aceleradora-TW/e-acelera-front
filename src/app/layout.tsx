import type { Metadata } from "next"
import "./globals.css"
import ResponsiveAppBar from "@/components/NavBar"
import { Box } from "@mui/material"
import { getServerSession } from "next-auth"
import ClientSessionProvider from "@/components/ClientSessionProvider"
import { ThemeConfig } from "./config/themes"
import { Footer } from "@/components/Footer/Footer"
import { AccessibilityProvider } from "@/context/accessibility.context"
import AccessibilityMenu from "@/components/accessibility-menu"
import MainWrapper from "@/components/UI/mainWrapper";

const menuItems = ["Nivelamento", "Autoestudo"]

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
      <body>
        <AccessibilityProvider>
          <ThemeConfig>
            <ClientSessionProvider>
              <AccessibilityMenu />
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
                <MainWrapper>{children}</MainWrapper>
                <Footer
                  linkedinUrl={"https://www.linkedin.com/school/aceleradora-%C3%A1gil/?originalSubdomain=br"}
                  projectUrl={"https://www.thoughtworks.com/pt-br/about-us/diversity-and-inclusion/aceleradora"} />
              </Box>
            </ClientSessionProvider>
          </ThemeConfig>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
