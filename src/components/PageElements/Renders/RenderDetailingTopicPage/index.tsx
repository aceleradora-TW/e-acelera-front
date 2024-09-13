import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { DetailingTopicContent } from "../../Content/DetailingTopicContent";
import { BadRequest } from "@/components/BadRequest";

export const RenderDetailingTopicPage = (id: string)=> {
  const { data: renderData, isLoading: loading, error: error} = useFetchData('/api/stackbyApi/Topics');
  if ( loading || !renderData) {
    return <Loading/>
}
if(error){
 return <BadRequest/>
}

  return (
    <LayoutPage>
      <DetailingTopicContent data={renderData} id={id} />
    </LayoutPage>
  );
}