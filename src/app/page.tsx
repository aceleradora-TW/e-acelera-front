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
      <ThemeDescription text="No coração de uma cidade movimentada, onde o sol se ergue majestosamente sobre arranha-céus de vidro e concreto, a vida pulsa em um ritmo frenético e constante. Pessoas de todas as cores e culturas se cruzam nas calçadas, cada uma imersa em seus próprios pensamentos e destinos. O aroma do café fresco mistura-se com o perfume das flores de um pequeno jardim urbano, criando uma sinfonia de cheiros que permeia o ar da manhã.

      Nas ruas estreitas e antigas, os edifícios históricos contam histórias de séculos passados. Fachadas ornamentadas e janelas de madeira preservam o charme de uma época em que a cidade era um centro de comércio e cultura. Turistas caminham com mapas nas mãos, tentando decifrar os segredos que cada esquina esconde, enquanto os moradores locais passam apressados, conhecendo cada atalho e beco como a palma de suas mãos.

      Em um parque tranquilo, longe da agitação das ruas, o verde das árvores contrasta com o azul intenso do céu. Bancos de madeira convidam os transeuntes a sentarem-se e apreciarem a calma que reina ali. Pombas brancas voam em círculos, completando a cena serena que parece ter saído de um quadro impressionista.

      No mercado ao ar livre, barracas coloridas exibem uma variedade infinita de frutas, legumes e especiarias. Vendedores chamam a atenção dos clientes com suas vozes animadas, oferecendo amostras de produtos frescos e locais. O burburinho dos negociantes negociando preços e clientes regateando faz parte da melodia diária deste local vibrante.

      Ao cair da tarde, luzes começam a se acender nas ruas. Cafés e bares abrem suas portas, convidando os que procuram relaxar após um longo dia de trabalho. Músicos de rua começam a afinar seus instrumentos, enchendo o ar com notas de jazz, blues ou música clássica, dependendo do humor do momento.

      Nas margens do rio que corta a cidade, pontes elegantes ligam as duas margens. À noite, as luzes dos prédios se refletem na água escura, criando um espetáculo de"/>
    </main>
  )}
