"use client";
import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { ContainerDescriptionDivider } from "@/components/PageElements/Container/ContainerDescriptionDivider";
import { ContainerReference } from "@/components/PageElements/Container/ContainerReference";
import { DescriptionExercise } from "@/components/PageElements/Container/DescriptionExercise";
import { LayoutPage } from "@/components/PageElements/LayoutPage";
import { TextDescription } from "@/components/TextDescription";
import Box from "@mui/material/Box";

export default function Teste() {
  const { data: renderData } = useFetchData('/api/stackbyApi/exercises');
  if (!renderData) {
    return <Loading/>
}

  return (
    <LayoutPage>
      {/* <TextDescription text="**TypeScript** é uma linguagem de programação de código aberto desenvolvida pela Microsoft, que se baseia em JavaScript e adiciona tipagem estática opcional. Ao contrário de JavaScript, que é fracamente tipado, TypeScript permite aos desenvolvedores definir tipos para variáveis, parâmetros de função e retornos de função, o que ajuda a detectar erros em tempo de compilação, em vez de tempo de execução. Isso proporciona um desenvolvimento mais seguro e confiável.\n\nUma das grandes vantagens do TypeScript é a compatibilidade com JavaScript existente, permitindo que os desenvolvedores gradualmente migrem seus projetos sem reescrever tudo do zero. Além disso, TypeScript suporta recursos modernos de JavaScript, como classes, módulos e funções assíncronas, e adiciona funcionalidades adicionais, como interfaces e enums.\n\nO sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente.\n\nTypeScript é especialmente útil para grandes projetos de código base, onde a manutenção e escalabilidade são cruciais. Ele ajuda a evitar bugs sutis que podem surgir de tipagem dinâmica e torna o código mais fácil de entender e refatorar. Adotar TypeScript em projetos novos ou existentes pode levar a um ciclo de desenvolvimento mais ágil e menos propenso a erros, tornando-se uma escolha popular entre desenvolvedores e empresas ao redor do mundo." /> */}
      {/* <Box sx={{ height: "1200px", margin: "0 60px" }}>
      <ContainerReference text="
      [WanderLindo](https://www.youtube.com/watch?v=e7HO62Hmkg4) 
      [WanderLindo](https://www.youtube.com/watch?v=e7HO62Hmkg4) 
      [WanderLindo](https://www.youtube.com/watch?v=e7HO62Hmkg4)
      aasdasd as das asdasdasdasd asdasdas das"
    />
      </Box> */}
      <DescriptionExercise text={renderData.data[0].field.description} />
    </LayoutPage>
  );
}
