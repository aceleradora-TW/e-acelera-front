'use client'
import Image from "next/image"
import react from "../../public/assets/react.png"
import js from "../../public/assets/js.png"
import next from "../../public/assets/next.png"
import { Box, Card, CardActionArea, CardContent, CssBaseline, Toolbar, Typography } from "@mui/material"
import { ThemeConfig } from '@/app/config/theme'
import { theme } from '@/app/config/theme'
import { ThemeDescription } from "@/components/Description/ThemeDescription"

const drawerWidth = 0;

export default function Home() {
  return (
    <main>
      <ThemeDescription text="Um texto é uma manifestação da linguagem. Pode ser definido como tudo aquilo que é dito por um emissor e interpretado por um receptor. Dessa forma, tudo que é interpretável é um texto. Outra forma de conceituação é pensar que tudo aquilo que produz um sentido completo, que seja uma mensagem compreensível, é um texto. Um texto é uma manifestação da linguagem. Pode ser definido como tudo aquilo que é dito por um emissor e interpretado por um receptor. Dessa forma, tudo que é interpretável é um texto. Outra forma de conceituação é pensar que tudo aquilo que produz um sentido completo, que seja uma mensagem compreensível, é um texto."/>
    </main>
  )}
