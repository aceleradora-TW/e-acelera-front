'use client'
import Image from "next/image"
import react from "../../public/assets/react.png"
import js from "../../public/assets/js.png"
import next from "../../public/assets/next.png"
import { Box, Card, CardActionArea, CardContent, CssBaseline, Toolbar, Typography } from "@mui/material"
import { ThemeConfig } from '@/components/config/theme'
import { theme } from '@/components/config/theme'
import { ReferenceDescription } from "@/components/Description/ReferenceDescription"
import { ThemeDescription } from "@/components/Description/ThemeDescription"

const drawerWidth = 0;

export default function Home() {
  return (
    <main>
      <ThemeDescription text="Olá, bom dia pessoal!! Espero que a mensagem lhes encontre com saúde. 
      Aqui quem vos fala é Fernanda Lopes, diretora de programas do Baobá. Muitas, muitos, muites ainda não me conhecem. Estava em licença maternidade quando vocês se juntaram a nós.
      Hoje escrevo para dar uma dica: o MOVER – MOVIMENTO PELA EQUIDADE RACIAL, apoiador do edital Carreiras em Movimento, lançou um espaço virtual com trilhas de aprendizagem e a oportunidade de se cadastrar no banco de talentos de 54 empresas associadas.
      Não temos envolvimento algum mas soubemos que a plataforma, entre outras coisas, será um instrumento de match entre talentos (vocês e milhões de outros rsrs) e empresas. Pode ser uma boa chance de ampliação da empregabilidade e acesso a conhecimentos. 
      Se tiverem um tempinho e interesse, façam o cadastro, explorem e aproveitem!!!!"/> 
    </main>
  )}
