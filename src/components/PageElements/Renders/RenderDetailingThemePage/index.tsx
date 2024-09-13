import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { DetailingThemeContent } from "../../Content/DetailingThemeContent";
import { BadRequest } from "@/components/BadRequest";

export const RenderDetailingThemePage = (id: string)=> {
    const { data: renderData, isLoading: loading, error: error} = useFetchData('/api/stackbyApi/Themes');
    if ( loading || !renderData) {
      return <Loading/>
  }
  if(error){
   return <BadRequest/>
  }

  return (
    <LayoutPage>
      <DetailingThemeContent data={renderData} id={id} />
    </LayoutPage>
  );
}