import { theme } from "@/app/config/themes"
import { LoginButton } from "@/components/LoginButton"
import {
  Avatar,
  Box,
  IconButton,
  Tooltip,
  Typography,
  Link,
  MenuItem,
  Menu,
  Divider,
} from "@mui/material"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { useSession, signOut } from "next-auth/react"
import { useState } from "react"
import LogoutIcon from "@mui/icons-material/Logout"
import { Session } from "next-auth"

interface WebMenuProps {
  list: string[]
  session: Session | null
}

export const WebMenu: React.FC<WebMenuProps> = ({ list, session }) => {
  const router = useRouter()
  const pathname = usePathname()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handlePageRedirectLogin = () => {
    const currentUrl = encodeURIComponent(window.location.href)
    router.push(`/login?callbackUrl=${currentUrl}`)
  }

  const linkStyle = (item: string) => {
    return pathname.startsWith(`/${item.toLowerCase()}`)
      ? theme.customStyles.linkActive
      : theme.customStyles.link
  }

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
            <IconButton onClick={handleOpenMenu} sx={{ p: 0, color: theme.palette.bgColor?.light }}>
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
            <MenuItem sx={{ cursor: "default" }}>
              <Typography sx={{ color: theme.palette.textColor?.main }}>
                {session.user.name || "Usuário"}
              </Typography>
            </MenuItem>
            <MenuItem sx={{ cursor: "default" }}>
              <Typography sx={{ color: theme.palette.bgColor?.light }}>
                {session.user.email || "email@example.com"}
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => signOut()}>
              <LogoutIcon
                sx={{ color: theme.palette.bgColor?.light, fontSize: 15, marginRight: "7px" }}
              />
              <Typography sx={{ color: theme.palette.textColor?.light }}>Sair</Typography>
            </MenuItem>
          </Menu>
        </Box>
      )
    }

    return (
      <Box
        sx={{
          visibility: pathname === "/login" ? "hidden" : "visible",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginButton click={() => handlePageRedirectLogin()} />
      </Box>
    )
  }

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
  )
}
