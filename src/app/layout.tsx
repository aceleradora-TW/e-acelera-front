import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "@/components/NavBar";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "@/app/config/theme";

const menuItems = ['Nivelamento', 'Autoestudo'] 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResponsiveAppBar list={menuItems}/>
        {children}</body>
    </html>
  );
}
