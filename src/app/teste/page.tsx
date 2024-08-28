"use client";
import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { DescriptionExercise } from "@/components/Description/DescriptionExercise";
import { LayoutPage } from "@/components/PageElements/LayoutPage";
import Box from "@mui/material/Box";
import { DescriptionDivider } from "@/components/Description/DescriptionDivider";
import { DescriptionReference } from "@/components/Description/DescriptionReference";
import { DescriptionWithVideo } from "@/components/Description/DescriptionWithVideo";

export default function Teste() {
  const { data: renderData } = useFetchData("/api/stackbyApi/exercises");
  if (!renderData) {
    return <Loading />;
  }

  return (
    <LayoutPage>
      <Box
        sx={{
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <DescriptionDivider
          text="**TypeScript** é uma linguagem de programação de código aberto desenvolvida pela Microsoft, que se baseia em JavaScript e adiciona tipagem estática opcional. Ao contrário de JavaScript, que é fracamente tipado, *TypeScript* permite aos desenvolvedores definir tipos para variáveis, parâmetros de função e retornos de função, o que ajuda a detectar erros em tempo de compilação, em vez de tempo de execução. Isso proporciona um desenvolvimento mais seguro e confiável.

Uma das grandes **vantagens** do TypeScript é a compatibilidade com JavaScript existente, permitindo que os desenvolvedores gradualmente migrem seus projetos sem reescrever tudo do zero. Além disso, TypeScript suporta recursos modernos de JavaScript, como classes, módulos e funções assíncronas, e adiciona funcionalidades adicionais, como interfaces e enums.

O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente.
"
        />
        <DescriptionWithVideo
          textVideo="O sistema de tipos avançado de **TypeScript** O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente."
          textDescription="O sistema de tipos avançado de **TypeScript** O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente. O sistema de tipos avançado de **TypeScript** O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente. O sistema de tipos avançado de **TypeScript** O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente.
          
          O sistema de tipos avançado de **TypeScript** O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente. O sistema de tipos avançado de **TypeScript** O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente. O sistema de tipos avançado de **TypeScript** O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente.
          
          
          O sistema de tipos avançado de **TypeScript** O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente. O sistema de tipos avançado de **TypeScript** O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente. O sistema de tipos avançado de **TypeScript** O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente."
          
          linkVideo="https://www.youtube.com/watch?v=e7HO62Hmkg4"
          title="# Obessed"
          references="Mariah Carey"
        />
        <DescriptionReference
          text="
      [EmilyLinda](https://www.youtube.com/watch?v=e7HO62Hmkg4) 
      [FelipeLindo](https://www.youtube.com/watch?v=e7HO62Hmkg4) 
      [StephanyLinda](https://www.youtube.com/watch?v=e7HO62Hmkg4) 
      [WanderLindo](https://www.youtube.com/watch?v=e7HO62Hmkg4)"
        />

        <DescriptionExercise text={renderData.data[0].field.description} />
      </Box>
    </LayoutPage>
  );
}
