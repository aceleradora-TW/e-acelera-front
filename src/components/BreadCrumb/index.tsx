'use client';
import { Box, Breadcrumbs, Stack, useTheme } from '@mui/material';
import Link from "@mui/material/Link";
import { usePathname } from 'next/navigation';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MouseEvent, useEffect, useState } from 'react';

interface BreadCrumbProps {
  title?: string;
}

export const BreadCrumb= ({ title }: BreadCrumbProps) => {
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

  const breadcrumbs: string[] = pathname
    .split('/')
    .filter((crumb) => crumb)
    .map((crumb) => {
      const hyphenIndex = crumb.indexOf('-');
      return hyphenIndex !== -1 ? crumb.substring(hyphenIndex + 1) : crumb;
    });
    const capitalizeFirstLetter = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1)

  const breadroutes: string[] = pathname.split('/').filter((crumb) => crumb);

  const handleBreadcrumbClick = (href: string, event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    if (href === pathname) {
      event.preventDefault()
    }
  }

  return (
    isValidPage && (
      <Box >
      <Stack spacing={2} sx={(theme as any).customStyles?.breadCrumb}>
        <Breadcrumbs separator={
          <NavigateNextIcon fontSize="small" sx={{ color: theme.palette.mode === 'dark' ? theme.palette.bgColor?.main : theme.palette.textColor?.main}} />}
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

            const displayText = (isLast && title) 
                ? title 
                : (path !== '' ? decodeURIComponent(textFormatted): textFormatted);

            return (
              <Link 
              variant="body1"
              sx={(theme as any).customStyles?.breadCrumb}
              key={path} 
              href={route}
              aria-current={isLast ? 'page' : undefined}
              onClick={(e) => handleBreadcrumbClick(route, e)}>
                {displayText}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Stack>
      </Box>
  )
  )
}
