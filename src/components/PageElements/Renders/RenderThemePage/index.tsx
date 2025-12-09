"use client";
import { Loading } from "@/components/Loading";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import { GlobalContextProvider } from "@/context/global.context";
import { useThemeApi } from "@/hooks/useThemeApi";
import { PageThemesContent } from "../../Content/PageThemesContent";
import { LayoutPage } from "../../LayoutPage";

export const RenderThemePage = ({ category }: { category: string }) => {
  const { data: themes, loading, error } = useThemeApi(category);

  if (loading) return <Loading />;
  if (error) return <BadRequest />;
  if (!themes || themes.data.length === 0) return <NoData />;

  return (
    <GlobalContextProvider>
      <LayoutPage>
        <PageThemesContent data={themes} category={category} />
      </LayoutPage>
    </GlobalContextProvider>
  );
};
