import { theme } from "@/app/config/themes"
import { LoginButton } from "@/components/LoginButton"
import {
  Avatar,
  Box,
  Divider,
  FormControlLabel,
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  Switch,
} from "@mui/material"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { signOut } from "next-auth/react"
import LogoutIcon from "@mui/icons-material/Logout"
import { Session } from "next-auth"
import SettingsIcon from '@mui/icons-material/Settings';
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from 'uuid';
import { useFlagsmith, useFlags } from "flagsmith/react"


interface WebMenuProps {
  list: string[]
  session: Session | null
}
interface updateFlagParams {
  identity: string;
  trait: string;
  value: boolean;
}

export const WebMenu: React.FC<WebMenuProps> = ({ list, session }) => {
  // const { flag_adminjs } = useFlags(['flag_adminjs'])
  const flagsmith = useFlagsmith();
  const flags = useFlags(['flag_adminjs'], ["adminjs_enabled"]);
  const router = useRouter()
  const pathname = usePathname()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false)

  useEffect(() => {
    const storedPreference = localStorage.getItem('adminjs_enabled');
    if (storedPreference !== null && session?.user?.email) {
      const parsedPreference = JSON.parse(storedPreference);
      handleApiToggle({ target: { checked: parsedPreference } } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [session]);


  const handleApiToggle = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setIsChecked(event.target.checked)
      await flagsmith.setTrait('adminjs_enabled', event.target.checked);
      localStorage.setItem('adminjs_enabled', JSON.stringify(event.target.checked));
    } catch (error) {
      // console.error("Erro ao salvar preferência:", error);
      // alert("Ocorreu um erro ao salvar sua preferência.");
      setIsChecked(false)
      flagsmith.setTrait('adminjs_enabled', false);
      localStorage.setItem('adminjs_enabled', JSON.stringify(false));

    }
  };

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

  const linkStyle = (item: string) => pathname.startsWith(`/${item.toLowerCase()}`) ? theme.customStyles.linkActive : theme.customStyles.link

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
              <ArrowDropDownIcon
                sx={{ transform: anchorEl ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s", }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            sx={{ mt: "45px" }}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
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
            <MenuItem sx={{ cursor: "default" }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={isChecked}
                    onChange={handleApiToggle}
                    disabled={false}
                    size="small"
                  />
                }
                label={
                  <Typography sx={{ color: theme.palette.textColor?.light, fontSize: '0.9rem' }}>
                    Nova API
                  </Typography>
                }
                labelPlacement="start"
              />
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
      <Box sx={{ mr: 2, display: { xs: "none", md: "flex" }, marginLeft: 0 }}>
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
        sx={{ display: { xs: "none", md: "flex" }, ...theme.customStyles.logoType }}
      >
        E-Acelera
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {list.map((item) => (
          <Link
            key={item}
            href={item ? `/${item.toLowerCase()}` : `/`}
            underline="none"
            sx={{ ...linkStyle(item) }}
          >
            {item}
          </Link>
        ))}
      </Box>
      <Box sx={{ flexGrow: 0 }}>{renderComponent()}</Box>
    </>
  )
}

