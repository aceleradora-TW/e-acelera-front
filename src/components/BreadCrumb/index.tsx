'use client'
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { usePathname, useRouter } from "next/navigation";

export default function BreadCrumb() {
  const pathname = usePathname()
  const breadcrumbs = pathname.split("/");
  let newRoute = "";
  const pathConcat = (path: string) => {
    if (path !== "") {
      newRoute += `/${path}`;
    }
  }
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs.map((path: string) => (
          <>
            {pathConcat(path)}
            <Link
              color="inherit"
              href={newRoute==''? '/':newRoute}
            >
              {path == "" ? "Home" : path}
            </Link>
          </>
        ))}
      </Breadcrumbs>
    </Stack>
  );
}
