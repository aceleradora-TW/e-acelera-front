"use client";

import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { DetailingThemeContent } from "../../Content/DetailingThemeContent";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import React, { useEffect } from "react";
import { useThemeByIdApi } from "@/hooks/useThemeByIdApi";

export const RenderDetailingThemePage = (id: string) => {
  const { data, loading, error, adminjs_preference } = useThemeByIdApi(id);

  /* useEffect(() => {
    if (adminjs_preference) {
      router.replace("/nivelamento");
    }
    console.log(pathname);
  }, [adminjs_preference]);*/

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <BadRequest />;
  }
  if (!data?.data) {
    return <NoData />;
  }

  //if (adminjs_preference) return null;

  return (
    <LayoutPage>
      <DetailingThemeContent
        adminjs_preference={adminjs_preference as boolean}
        data={data?.data}
      />
    </LayoutPage>
  );
};
