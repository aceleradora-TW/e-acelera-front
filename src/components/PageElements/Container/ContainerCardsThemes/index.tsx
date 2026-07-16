import { Grid } from '@mui/material';
import React from 'react';
import { BaseCard } from '@/components/BaseCard';
import {
  ApiResponse,
  ContainerCardThemeProps,
  DataItem,
  DatabaseThemesResponse,
  ThemeField,
} from '@/types/type';
import { usePathname } from 'next/navigation';

function isStackbyResponse(data: unknown): data is ApiResponse {
  if (
    !data ||
    typeof data !== 'object' ||
    !('data' in data) ||
    !Array.isArray(data.data)
  ) {
    return false;
  }

  if (data.data.length === 0) {
    return false;
  }

  const firstItem = data.data[0];

  return (
    typeof firstItem === 'object' &&
    firstItem !== null &&
    'field' in firstItem
  );
}

function isDatabaseThemesResponse(
  data: unknown
): data is DatabaseThemesResponse {
  if (
    !data ||
    typeof data !== 'object' ||
    !('data' in data) ||
    !Array.isArray(data.data)
  ) {
    return false;
  }

  if (data.data.length === 0) {
    return true;
  }

  const firstItem = data.data[0];

  return !(
    typeof firstItem === 'object' &&
    firstItem !== null &&
    'field' in firstItem
  );
}

export const ContainerCardTheme: React.FC<ContainerCardThemeProps> = ({
  data,
  category,
}) => {
  const pathname = usePathname();
  const currentPath = pathname.slice(1);

  if (isStackbyResponse(data)) {
    const filteredData = data.data.filter((element: DataItem) => {
      const theme = element.field as ThemeField;
      return theme?.category === category;
    });

    return (
      <Grid container spacing={2} alignItems="stretch">
        {filteredData.map((element: DataItem) => {
          const field = element.field as ThemeField;

          return (
            <Grid
              item
              xl={3}
              lg={4}
              md={4}
              sm={6}
              xs={12}
              key={element.id}
            >
              <BaseCard
                id={element.id}
                title={field?.title}
                description={field?.cardDescription}
                route={`${currentPath}/${element.id}-${field?.title}`}
                image={field?.image?.[0]?.url ?? ''}
                textImage={field?.alt ?? ''}
                cardType="theme"
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }

  if (isDatabaseThemesResponse(data)) {
    return (
      <Grid container spacing={2} alignItems="stretch">
        {data.data.map((element) => (
          <Grid
            item
            xl={3}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            key={element.id}
          >
            <BaseCard
              id={element.id}
              title={element.title}
              description={
                element.shortDescription ||
                element.cardDescription ||
                element.description ||
                ''
              }
              route={`${currentPath}/${element.id}-${element.title}`}
              image={element.image ?? ''}
              textImage={element.alt ?? ''}
              cardType="theme"
            />
          </Grid>
        ))}
      </Grid>
    );
  }

  return null;
};
