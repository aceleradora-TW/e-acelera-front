import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { DetailingTopicContent } from "../../Content/DetailingTopicContent";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import { getTopics } from "@/service/detailingTopicsService";
import { ApiResponse } from "@/types/type";

export const RenderDetailingTopicPage = (id: string)=> {
  const [renderData, setRenderData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const data = await getTopics();
        if(data){
          setRenderData(data);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

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