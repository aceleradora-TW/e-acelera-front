'use client'
import { Stack, Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function BreadCrumbStatic() {

  const pathname = usePathname();
  
  const breadcrumbs = pathname.split('/').filter((crumb) => crumb).map(crumb => {
    // Remove string before the hyphen
    const hyphenIndex = crumb.indexOf('-');
    return hyphenIndex !== -1 ? crumb.substring(hyphenIndex + 1) : crumb;
  })
  const breadroutes = pathname.split("/").filter((crumb) => crumb); 
  

  console.log(breadcrumbs)
  console.log(breadroutes)

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link href="/" passHref>
          Home
        </Link>
        {breadcrumbs.map((path, index) => {
          const route = `/${breadroutes.slice(0, index + 1).join("/")}`
          return (
            <Link key={route} href={route} passHref>         
                {path !== '' ? decodeURIComponent(path): path}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Stack>
  );
}