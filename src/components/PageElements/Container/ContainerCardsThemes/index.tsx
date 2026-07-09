

import { Grid } from "@mui/material";
import React from "react";
import { BaseCard } from "@/components/BaseCard";
import {
  ApiResponse,
  ContainerCardThemeProps,
  DataItem,
  ThemeField,
} from "@/types/type";
import { usePathname } from "next/navigation";
import { useFlags } from "flagsmith/react";

export const ContainerCardTheme: React.FC<ContainerCardThemeProps> = ({
  data,
  category,
}) => {
  const pathname = usePathname();
  const currentPath = pathname.slice(1);

  const { is_test_user, adminjs_preference, flag_adminjs } = useFlags(
    ["flag_adminjs"],
    ["is_test_user", "adminjs_preference"]
  );

  const shouldUsePostgres =
    flag_adminjs?.enabled || (is_test_user && adminjs_preference);

  function isApiResponse(data: any): data is ApiResponse {
    return Array.isArray(data?.data);
  }

  if (!shouldUsePostgres && isApiResponse(data)) {
    const filteredData = data.data.filter((element: DataItem) => {
      const theme = element?.field as ThemeField;
      return theme?.category === category;
    });

    return (
      <Grid container spacing={2} alignItems="stretch">
        {filteredData.map((element: DataItem, index: number) => {
          const field = element?.field as ThemeField;

          return (
            <Grid item xl={3} lg={4} md={4} sm={6} xs={12} key={index}>
              <BaseCard
                id={element.id}
                title={field?.title}
                description={field?.cardDescription}
                route={`${currentPath}/${element.id}-${field?.title}`}
                image={field?.image ? field.image[0].url : ""}
                textImage={`${field?.alt}`}
                cardType="theme"
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }

  const databaseThemes = Array.isArray(data?.data) ? data.data : [];

  return (
    <Grid container spacing={2} alignItems="stretch">
      {databaseThemes.map((element: any, index: number) => (
        <Grid item xl={3} lg={4} md={4} sm={6} xs={12} key={index}>
          <BaseCard
            id={element.id}
            title={element.title}
            description={element.shortDescription}
            route={`${currentPath}/${element.id}-${element.title}`}
            image={element.image}
            textImage={`${element.alt}`}
            cardType="theme"
          />
        </Grid>
      ))}
    </Grid>
  );
};