import type { Metadata } from "next"
import "./globals.css"
import ResponsiveAppBar from "@/components/NavBar"
import { Box } from "@mui/material"
import { getServerSession } from "next-auth"
import ClientSessionProvider from "@/components/ClientSessionProvider"
import { ThemeConfig } from "./config/themes"
import { Footer } from "@/components/Footer/Footer"
import flagsmith from "flagsmith/isomorphic";
import { FeatureFlagProvider } from "../components/FeatureFlagProvider/featureFlagProvider";
import React from "react";
import { AccessibilityProvider } from "@/context/accessibility.context"
import AccessibilityMenu from "@/components/accessibility-menu"

const FLAGSMITH_ENVIRONMENT_ID = process.env.NEXT_PUBLIC_FLAGSMITH_ENVIRONMENT_ID

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

  const session = await getServerSession();

  // Inicializa o FlagSmith no servidor com a identidade do usuário
  await flagsmith.init({
    environmentID: FLAGSMITH_ENVIRONMENT_ID,
    identity: session?.user?.email || undefined,
    cacheFlags: false,
  })

  const serverState = flagsmith.getState();

  return (
    <html lang="pt-br">
      <body>
        <FeatureFlagProvider serverState={serverState}>
        <AccessibilityProvider>
          <ClientSessionProvider>
            <ThemeConfig>
              <Box
                sx={{
                  minHeight: "100vh",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
              <AccessibilityMenu />
                <Box sx={{ marginBottom: "80px" }}>
                  <ResponsiveAppBar list={menuItems} session={session} />
                </Box>
                <Box component="main" sx={{ flex: 1 }}>
                    {children}
                </Box>
                <Footer
                  linkedinUrl={"https://www.linkedin.com/school/aceleradora-%C3%A1gil/?originalSubdomain=br"}
                  projectUrl={"https://www.thoughtworks.com/pt-br/about-us/diversity-and-inclusion/aceleradora"}
                />
              </Box>
            </ThemeConfig>
          </ClientSessionProvider>
        </AccessibilityProvider>
        </FeatureFlagProvider>
      </body>
    </html>
  );
}

