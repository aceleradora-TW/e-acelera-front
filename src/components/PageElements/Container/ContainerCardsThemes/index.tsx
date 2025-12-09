import { Grid } from "@mui/material";
import React from "react";
import { BaseCard } from "@/components/BaseCard";
import { ApiResponse, DataItem, ThemeField } from "@/types/type";
import { usePathname } from "next/navigation";
import { useFlags } from "flagsmith/react";
interface ContainerCardThemeProps {
  data: ApiResponse;
  category: string;
}

export const ContainerCardTheme: React.FC<ContainerCardThemeProps> = ({
  data,
  category,
}) => {
  const pathname = usePathname();
  const currentPath = pathname.slice(1);
  const { adminjs_preference } = useFlags([""], ["adminjs_preference"]);
  return (
    <Grid container spacing={2} alignItems="stretch">
      {!adminjs_preference
        ? data.data.map((element: DataItem, index: number) => {
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
          })
        : (
            data.data as unknown as Array<{
              id: string;
              title: string;
              shortDescription: string;
              cardDescription: string;
              image: string;
              category: string;
              sequence: number;
              alt: string;
            }>
          ).map((element, index) => {
            return (
              <Grid item xl={3} lg={4} md={4} sm={6} xs={12} key={index}>
                <BaseCard
                  id={element.id}
                  title={element.title}
                  description={element?.shortDescription}
                  image={element.image}
                  textImage={`${element?.alt}`}
                  cardType="theme"
                />
              </Grid>
            );
          })}
    </Grid>
  );
};
