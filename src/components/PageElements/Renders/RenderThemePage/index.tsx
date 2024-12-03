import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading";
import { PageThemesContent } from "../../Content/PageThemesContent";
import { LayoutPage } from "../../LayoutPage";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import { getThemes } from "@/service/themesService";
import { ApiResponse } from "@/types/type";

export const RenderThemePage = ( category:string ) => {
  const [renderData, setRenderData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const data: ApiResponse = await getThemes();
        setRenderData(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchThemes();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <BadRequest />;
  }
  if (!renderData) {
    return <NoData />;
  }

  return (
    <LayoutPage>
      <PageThemesContent data={renderData} category={category} />
    </LayoutPage>
  );
};
