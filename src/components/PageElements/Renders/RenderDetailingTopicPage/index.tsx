import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { DetailingTopicContent } from "../../Content/DetailingTopicContent";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";

export const RenderDetailingTopicPage = (id: string)=> {
  const { data: renderData, isLoading: loading, error: error} = useFetchData('/api/stackbyApi/Topics');
  if (loading) {
    return <Loading />
}
if (error) {
    return <BadRequest />
}
if (!renderData) {
    return <NoData/>
}

  return (
    <LayoutPage>
      <DetailingTopicContent data={renderData} id={id} />
    </LayoutPage>
  );
}