'use client'
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { usePathname } from "next/navigation";
import { ThemeConfig, theme } from "../config/theme";
import { Box } from "@mui/material";

export const BreadCrumb: React.FC = () => {
  const pathname: string = usePathname();
  const pathnames: string[] = pathname.split('/').filter((x) => x);
  console.log(pathnames)
  const [statusCode, setStatusCode] = React.useState<number>()

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`${pathname}`, {
          method: "GET"
        })
        setStatusCode(data.status)

        const dataId = await fetch("/api/stackbyApi/topics", {
          method: "GET"
        }) 
        const dataParci = await dataId.json()
        const findName = dataParci.data.find((row: any) => row.id == "rw1719237431883f5c222").field.Title
        console.log(findName)
         
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const handleBreadcrumbClick = (href: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (href === pathname) {
      event.preventDefault()
    }
  }

  return (
    <ThemeConfig>
      <Box sx={{marginLeft: 10}}>
      <Stack spacing={2} sx={theme.customStyles.breadCrumb} >
        {statusCode === 200 && (
          
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: theme.palette.textColor?.main}} />}
            aria-label="trilha de navegação"
          >

            {pathnames.length !== 0 && (
                <Link href="/" variant="body1" sx={theme.customStyles.breadCrumb}>
                  Home
                </Link>
            )
            }
            {pathnames.map((path: string, index: number) => {
              const routeTo: string = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast: boolean = index === pathnames.length - 1;
              return (
                  <Link
                    variant="body1"
                    sx={theme.customStyles.breadCrumb}
                    key={path}
                    href={routeTo}
                    aria-current={isLast ? 'page' : undefined}
                    onClick={(e) => handleBreadcrumbClick(routeTo, e)}
                  >
                    {path}
                  </Link>
              );
            })}
          </Breadcrumbs>
        )}
      </Stack>
      </Box>
      
    </ThemeConfig>
  );
}

