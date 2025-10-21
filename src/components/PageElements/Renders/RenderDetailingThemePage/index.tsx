//Mexer quando for id cod comentado no final da pag
import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { DetailingThemeContent } from "../../Content/DetailingThemeContent";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import React from "react";

export const RenderDetailingThemePage = (id: string)=> {
    const { data: renderData, isLoading: loading, error: error} = useFetchData('/api/stackbyApi/Themes', {
            headers: {
                operator: "rowIds",
                value: id.split("-")[0],
            },
    });
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
      <DetailingThemeContent data={renderData} />
    </LayoutPage>
  );

}

/* Testar depois

import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { DetailingThemeContent } from "../../Content/DetailingThemeContent";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import { Theme, DataItem, ThemeField, ApiResponse } from "../../../../types/type"; // ajusta conforme seu type

export const RenderDetailingThemePage = ({ id }: { id: string }) => {
  const [theme, setTheme] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5002/themes/${id.split("-")[0]}`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar tema");
        return res.json();
      })
      .then((t: Theme) => {
        const mapped: DataItem = {
          id: String(t.id),
          field: {
            rowId: String(t.id),
            sequence: t.sequence || 0,
            isConfigure: 0,
            favourite: 0,
            totalItems: null,
            completedItems: null,
            dueDateTimestamp: null,
            checklistId: null,
            remainderId: null,
            updatedAt: new Date().toISOString(),
            createdAt: new Date().toISOString(),
            title: t.title,
            description: t.description || "",
            category: t.category || "",
            cardDescription: t.card_description || "",
            image: t.image //geo
              ? [{ filename: t.image, type: "image", url: `/images/themes/${t.image}` }]
              : null,
            topics: t.topics || "",
            topicsDescription: t.topics_description || "",
            topicsInfo: t.topics_info || "",
            alt: t.alt || "",
          } as ThemeField,
        };

        setTheme({ data: [mapped] });
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <BadRequest />;
  if (!theme) return <NoData />;

  return (
    <LayoutPage>
      <DetailingThemeContent data={theme} />
    </LayoutPage>
  );
};
*/