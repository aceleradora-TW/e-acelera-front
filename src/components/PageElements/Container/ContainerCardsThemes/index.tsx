import { Grid } from "@mui/material";
import { useMemo } from "react";
import { BaseCard } from "@/components/BaseCard";
import { ApiResponse, DataItem, FilteredItem, FilteredThemeItem } from "@/types/type";
import { usePathname } from "next/navigation";

interface ContainerCardThemeProps {
  data: ApiResponse;
  category: string;
}

export const ContainerCardTheme: React.FC<ContainerCardThemeProps> = ({ data, category }) => {
  const gridSizes = { xl: 3, lg: 4, md: 4, sm: 6, xs: 12 };
  const pathname = usePathname();
  const currentPath = pathname.slice(1);

  function isFilteredThemeItem(field: FilteredItem): field is FilteredThemeItem {
    return field && "category" in field && "image" in field;
  }

  const filterElements = (element: DataItem, category: string): boolean => {
    if (isFilteredThemeItem(element.field)) {
      return element.field.category === category;
    }
    return false;
  }

  const filteredData = useMemo(() => {
    return data.data.filter((element: DataItem) => filterElements(element, category));
  }, [data.data, category]);

  return (
    <Grid container spacing={2} alignItems="stretch">
      {filteredData.map((element: DataItem) => {
        const field = element.field as FilteredThemeItem;
        const imageUrl = field.image?.[0]?.url || "";
        const altText = field.alt || "";

        return (
          <Grid item {...gridSizes} key={element.id}>
            <BaseCard
              title={field.title}
              description={field.cardDescription}
              route={`${currentPath}/${element.id}-${field.title}`}
              image={imageUrl}
              textImage={altText}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

