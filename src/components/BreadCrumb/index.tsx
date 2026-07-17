'use client';
import { Box, Breadcrumbs, Stack, useTheme } from '@mui/material';
import Link from "@mui/material/Link";
import { usePathname } from 'next/navigation';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MouseEvent, useEffect, useState } from 'react';

type BreadCrumbProps = {
  lastLabel?: string;
};

const translations: Record<string, string> = {
  themes: 'Temas',
  topics: 'Tópicos',
  exercises: 'Exercícios',
  cms: 'Admin',
};

const breadcrumbTranslations: Record<string, string> = {
  ...translations,
  themeslist: 'Admin',
  topicslist: 'Admin',
  exerciseslist: 'Admin',
};

const breadcrumbCheck: Record<string, boolean> = {
  themes: true,
  topics: true,
  exercises: true,
  "": true,
};

export const BreadCrumb: React.FC<BreadCrumbProps> = ({ lastLabel }) => {
  const pathname: string = usePathname();
  const [isValidPage, setIsValidPage] = useState<boolean>(false);
  const theme = useTheme();

  useEffect(() => {
    const checkPageStatus = async () => {
      try {
        const response: Response = await fetch(pathname, {
          method: 'GET',
        });
        if (response.status === 200) {
          setIsValidPage(true);
        } else {
          setIsValidPage(false);
        }
      } catch (error) {
        console.error('Error fetching page status:', error);
        setIsValidPage(false);
      }
    };

    checkPageStatus();
  }, [pathname]);

  const routeSegments: string[] = pathname.split('/').filter((crumb) => crumb);
    const isEditPage: boolean = Boolean(lastLabel) && routeSegments.at(-1) === 'edit';
 
    const normalizedSegments: string[] = routeSegments.map(segment => {
      const match = segment.match(/^([^-]+)-/);
      return match ? match[1] : segment;
    });

    const baseSegments: string[] = normalizedSegments.slice(0, 2);
 
    // List pages have exactly 2 segments after filtering (e.g., /cms/themes)
    // Detail pages have 3+ segments (e.g., /cms/themes/123)
    const isListPage: boolean = ['themes', 'topics', 'exercises'].includes(baseSegments[1]?.toLowerCase())
      && normalizedSegments.length === 2;

  const visibleSegments: string[] = isListPage
      ? ['cms']
      : lastLabel
        ? routeSegments.slice(0, isEditPage ? -2 : -1)
        : routeSegments;

  const breadcrumbs: string[] = [];

  visibleSegments.forEach((crumb) => {
    const hyphenIndex = crumb.indexOf('-');
    const rawText = hyphenIndex !== -1 ? crumb.substring(hyphenIndex + 1) : crumb;
    
    const segmentKey = crumbsTranslate(rawText.toLowerCase());
    breadcrumbs.push(breadcrumbTranslations[segmentKey] || translations[rawText.toLowerCase()] || rawText);
  });

  function crumbsTranslate(segment: string): string {
    if (breadcrumbTranslations[segment as keyof typeof breadcrumbTranslations] !== undefined) {
      return segment as keyof typeof breadcrumbTranslations;
    }
    return segment;
  }

  const capitalizeFirstLetter = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1)

  const breadroutes: string[] = visibleSegments;

  const handleBreadcrumbClick = (href: string, event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    if (href === pathname) {
      event.preventDefault()
    }
  }

  return (
    isValidPage && (
      <Box >
        <Stack spacing={2} sx={theme.customStyles.breadCrumb}>
          <Breadcrumbs separator={
            <NavigateNextIcon fontSize="small" sx={{ color: theme.palette.mode === 'dark' ? theme.palette.bgColor?.main : theme.palette.textColor?.main }} />}
            aria-label="trilha de navegação">
            {breadroutes.length !== 0 && (
              <Link href="/" variant="body1" sx={theme.customStyles.breadCrumb}>
                Home
              </Link>
            )
            }
            {breadcrumbs.map((path: string, index: number) => {
              const route: string = `/${breadroutes.slice(0, index + 1).join('/')}`;
              const isLast: boolean = index === breadcrumbs.length - 1;
              const textFormatted = capitalizeFirstLetter(path)
              return (
                <Link
                  variant="body1"
                  sx={theme.customStyles.breadCrumb}
                  key={`${route}-${index}`}
                  href={route}
                  aria-current={isLast ? 'page' : undefined}
                  onClick={(e) => handleBreadcrumbClick(route, e)}>
                  {path !== '' ? decodeURIComponent(textFormatted) : textFormatted}
                </Link>
              );
            })}
          </Breadcrumbs>
        </Stack>
      </Box>
    )
  )
}