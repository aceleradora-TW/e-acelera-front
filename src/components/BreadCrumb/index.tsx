'use client';
import { Box, Breadcrumbs, Stack, useTheme } from '@mui/material';
import Link from "@mui/material/Link";
import { usePathname } from 'next/navigation';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MouseEvent, useEffect, useState } from 'react';
import { useTopicApi } from '@/hooks/useTopicApi';

export const BreadCrumb: React.FC = () => {
  const pathname: string = usePathname();
  const [isValidPage, setIsValidPage] = useState<boolean>(false);
  const theme = useTheme();

  const segments = pathname.split('/').filter(Boolean);
  const topicId = segments[segments.length - 1];

  const { data, source } = useTopicApi(topicId);
  
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

  const capitalizeFirstLetter = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1)

  const hrefs = segments.map((_, index) => `/${segments.slice(0, index + 1).join('/')}`);

  if (source === "adminjs" && !data) {
  return null; 
}

  const breadcrumbLabels = segments.map((seg) => {
    const hyphenIndex = seg.indexOf('-');
    return hyphenIndex !== -1 ? seg.substring(hyphenIndex + 1) : seg;
  });

  if (source === 'stackby') {
    const hyphenIndex = topicId.indexOf('-');
    breadcrumbLabels[breadcrumbLabels.length - 1] =
      hyphenIndex !== -1 ? topicId.substring(hyphenIndex + 1) : topicId;
  } else if (source === 'adminjs' && data ) {
    breadcrumbLabels[breadcrumbLabels.length - 1] = (data as any).title;
  }

  const themeIndex = breadcrumbLabels.length - 2;
  if (
    source === 'adminjs' &&
    themeIndex >= 0 &&
    data &&
    (data as any).theme &&
    typeof (data as any).theme.title === 'string'
  ) {
    breadcrumbLabels[themeIndex] = (data as any).theme.title;
  }

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
          <NavigateNextIcon fontSize="small" sx={{ color: theme.palette.mode === 'dark' ? theme.palette.bgColor?.main : theme.palette.textColor?.main}} />}
            aria-label="trilha de navegação">
          {segments.length !== 0 && (
                <Link href="/" variant="body1" sx={theme.customStyles.breadCrumb}>
                  Home
                </Link>
            )
            }
          {breadcrumbLabels.map((label: string, index: number) => {
            const route: string = hrefs[index];
            const isLast: boolean = index === breadcrumbLabels.length - 1;
            const textFormatted = capitalizeFirstLetter(label)
            return (
              <Link 
              variant="body1"
              sx={theme.customStyles.breadCrumb}
              key={`${route}-${label}`} 
              href={route}
              aria-current={isLast ? 'page' : undefined}
              onClick={(e) => handleBreadcrumbClick(route, e)}>
                {decodeURIComponent(textFormatted)}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Stack>
      </Box>
  )
  )
}
