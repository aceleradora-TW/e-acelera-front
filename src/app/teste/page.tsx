"use client"
import {CardVideo} from "@/components/CardVideo"
import { Grid } from "@mui/material"

export default function Teste() {
    return(
        <Grid container >

           <Grid item xl={6} lg={6} md={6} sm={12}>
           <CardVideo title="# Curso de TypeScript para Completos Iniciantes" text="Neste curso ensinarei para você TUDO o que você precisa saber para adquirir uma base sólida no TypeScript, uma das linguagens mais requisitadas no mercado atualmente! Neste curso ensinarei para você TUDO o que você precisa saber para adquirir uma base sólida no TypeScript, uma das linguagens mais requisitadas no mercado atualmente!" linkVideo="https://www.youtube.com/watch?v=KvcneqbMJs4" references="Felipe Rocha • dicasparadevs"/>
           </Grid> 

           <Grid item xl={6} lg={6} md={6} sm={12}>
           <CardVideo title="# Curso de TypeScript para Completos Iniciantes" text="**Neste** curso ensinarei para você TUDO o que você precisa saber para adquirir uma base sólida no TypeScript, uma das linguagens mais requisitadas no mercado atualmente! Neste curso ensinarei para você TUDO o que você precisa saber para adquirir uma base sólida no TypeScript, uma das linguagens mais requisitadas no mercado atualmente!" linkVideo="https://www.youtube.com/watch?v=KvcneqbMJs4" references="Felipe Rocha • dicasparadevs"/>
           </Grid>
        
        </Grid>
        
    )
}