import { theme } from "@/app/config/theme";
import { LoginButton } from "@/components/LoginButton";
import { Avatar, Box, IconButton, Tooltip, Typography, Link, MenuItem, Menu, Divider } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';

interface WebMenuProps {
  list: string[];
}

export const WebMenu: React.FC<WebMenuProps> = ({ list }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handlePageRedirectLogin = () => {
    localStorage.setItem("redirectAfterLogin", pathname);
    router.push(`/login`);
  };

  const linkStyle = (item: string) => {
    return `/${item.toLowerCase()}` === pathname
      ? theme.customStyles.linkActive
      : theme.customStyles.link;
  };

  const renderComponent = () => {
    if (session?.user) {
      return (
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Tooltip title="Perfil">
            <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
              <Avatar
                alt={session.user.name || "Usuário"}
                src={session.user.image || "/default-avatar.png"}
              />
              <ArrowDropDownIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            sx={{ mt: "45px" }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>
              <Typography sx={{ color: theme.palette.textColor?.main, cursor: "none" }}>
                {session.user.name || "Usuário"}
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography sx={{ color: "#575757", cursor: "none" }}>
                {session.user.email || "email@example.com"}
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => signOut()}>
              <LogoutIcon sx={{ color: "#575757", fontSize: 15, marginRight: "7px" }} />
              <Typography>Sair</Typography>
            </MenuItem>
          </Menu>
        </Box>
      );
    } else if (!session && pathname !== "/login") {
      return <LoginButton click={handlePageRedirectLogin} />;
    }
    return null;
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
          alt="logo e-acelera"
        />
      </Box>
      <Typography
        noWrap
        component="a"
        href="/"
        sx={{
          display: { xs: "none", md: "flex" },
          ...theme.customStyles.logoType,
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
            href={item ? `/${item.toLowerCase()}` : `/`}
            underline="none"
            sx={{
              ...linkStyle(item),
            }}
          >
            {item}
          </Link>
        ))}
      </Box>
      <Box sx={{ flexGrow: 0 }}>{renderComponent()}</Box>
    </>
  );
};
