'use client'
import { theme } from "@/app/config/theme";
import { Avatar, Box, IconButton, Link, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface WebMenuProps {
  list: string[];
}

export const WebMenu: React.FC<WebMenuProps> = ({ list }) => {
  const pathname = usePathname()

  const linkStyle = (item: string) => {
    if (`/${item}` == pathname) {
      return theme.customStyles.linkActive
    }
    return theme.customStyles.link
      ;
  };

  return (
    <>
      <Box
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          marginLeft: 0,
        }}
      >
        <Image
          width={43}
          height={48}
          src="/assets/logo.svg"
          alt="logo e-acelera" />
      </Box>

      <Typography
        noWrap
        component="a"
        href="/"
        sx={{
          display: { xs: "none", md: "flex" },
          ...theme.customStyles.logoType
        }}
      >
        E-Acelera
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          display: {
            xs: "none",
            md: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        {list.map((item) => (
          <Link
            key={item}
            href={item ? `/${item}`: `/`}
            underline="none"
            sx={{
              ...linkStyle(item),
            }}
          >
            {item}
          </Link>
        ))}
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton
            sx={{ display: { xs: 'none', md: 'flex' }, visibility: "hidden" }}
          >
            <Avatar alt="Remy Sharp" src="" />
          </IconButton>
        </Tooltip>
      </Box>

    </>
  );
};
