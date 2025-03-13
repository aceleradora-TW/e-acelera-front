import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { DetailingThemeContent } from "../../Content/DetailingThemeContent";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import { getDetailingThemes } from "@/service/detailingThemeService";
import { ApiResponse } from "@/types/type";

export const RenderDetailingThemePage = (id: string)=> {
  const [renderData, setRenderData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const data = await getDetailingThemes();
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

    fetchTheme();
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
      <DetailingThemeContent data={renderData} id={id} />
    </LayoutPage>
  );
}