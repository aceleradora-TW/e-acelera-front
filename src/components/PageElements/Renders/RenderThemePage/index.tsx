import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { PageThemesContent } from "../../Content/PageThemesContent";
import { LayoutPage } from "../../LayoutPage";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import { ThemeTeste, ApiResponse, DataItem } from "@/types/type";

export const RenderThemePage = (category: string) => {
  const {
    data: renderData,
    isLoading: loading,
    error: error,
  } = useFetchData("/api/stackbyApi/Themes"); //?nocache=${Date.now()}&field=ThemeTeste
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <BadRequest />;
  }
  if (!renderData) {
    return <NoData />;
  }

  // const filteredData = renderData.data.filter((item: DataItem) => {
  //   const title = item.field.title;
  //   return title;
  // });

  // filteredData.forEach((item: DataItem) => {
  //   console.log(item.field.title); // Mostra os títulos no console
  // });

  const filteredData = renderData.data
    .filter((item: DataItem) => {
      return (
        item.field.title &&
        "cardDescription" in item.field &&
        "image" in item.field
      );
    })
    .map((item: DataItem) => {
      const theme = item.field as ThemeTeste;

      return {
        title: theme.title,
        cardDescription: theme.cardDescription,
        image: theme.image,
        category: theme.category,
      };
    });

  console.log(filteredData);

  if (filteredData.length === 0) {
    return <NoData />;
  }

  return (
    <LayoutPage>
      <PageThemesContent data={renderData} category={category} />
    </LayoutPage>
  );
};
