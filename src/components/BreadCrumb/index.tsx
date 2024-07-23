'use client';
import { Stack, Breadcrumbs, Box } from '@mui/material';
import Link from "@mui/material/Link";
import { usePathname } from 'next/navigation';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MouseEvent, useEffect, useState } from 'react';
import { ThemeConfig, theme } from '../../app/config/theme';

export const BreadCrumb: React.FC = () => {
  const pathname: string = usePathname();
  const [isValidPage, setIsValidPage] = useState<boolean>(false);

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
  const breadroutes: string[] = pathname.split('/').filter((crumb) => crumb);

  const handleBreadcrumbClick = (href: string, event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    if (href === pathname) {
      event.preventDefault()
    }
  }

  return (
    isValidPage && (
    <ThemeConfig>
      <Box sx={{marginLeft: 10}}>
      <Stack spacing={2} sx={theme.customStyles.breadCrumb}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" sx={{ color: theme.palette.textColor?.main}} />}
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
            return (
              <Link 
              variant="body1"
              sx={theme.customStyles.breadCrumb}
              key={path} 
              href={route}
              aria-current={isLast ? 'page' : undefined}
              onClick={(e) => handleBreadcrumbClick(route, e)}>
                {path !== '' ? decodeURIComponent(path): path}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Stack>
      </Box>
    </ThemeConfig>
  )
  )
}
