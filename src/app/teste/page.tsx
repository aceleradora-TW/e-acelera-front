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
  const { data: renderData } = useFetchData("/api/stackbyApi/topics");
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
        <DescriptionWithVideo
          textDescription={renderData.data[5].field.description} 
          textVideo="O sistema de tipos avançado de **TypeScript** O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente."
          linkVideo="https://www.youtube.com/watch?v=e7HO62Hmkg4"
          title="# Obessed"
          references="Mariah Carey"
        />
        <DescriptionWithVideo
          textDescription={renderData.data[5].field.description} 
          textVideo="O sistema de tipos avançado de **TypeScript** O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente."
          linkVideo=""
          title="# Obessed"
          references="Mariah Carey"
        />
        <DescriptionDivider
          text= "sistema de tipos avançado de **TypeScript** O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente. O sistema de tipos avançado de **TypeScript** O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente. O sistema de tipos avançado de **TypeScript** O sistema de tipos avançado de TypeScript facilita a autocompletar de código e fornece melhor documentação durante o desenvolvimento, aumentando a produtividade dos desenvolvedores. Ferramentas como o Visual Studio Code têm suporte robusto para TypeScript, tornando a experiência de desenvolvimento ainda mais eficiente."
        />
        {/* <DescriptionWithVideo
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

        <DescriptionExercise text={renderData.data[0].field.description} /> */}
      </Box>
    </LayoutPage>
  );
}
