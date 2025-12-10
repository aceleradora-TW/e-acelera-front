'use client';
import { theme } from "@/app/config/themes"
import { LoginButton } from "@/components/LoginButton"
import { AccessibilityProvider } from "@/context/accessibility.context"
import {
  Avatar,
  Box,
  Divider,
  FormControlLabel,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { signOut } from "next-auth/react"
import LogoutIcon from "@mui/icons-material/Logout"
import { Session } from "next-auth"
import { useEffect, useState } from "react";
import { useFlags, useFlagsmith } from "flagsmith/react"

interface WebMenuProps {
  list: string[]
  session: Session | null
}

export const WebMenu: React.FC<WebMenuProps> = ({ list, session }) => {
  const flagsmith = useFlagsmith();
  const { flag_adminjs, is_test_user, adminjs_preference } = useFlags(['flag_adminjs'], ['is_test_user', 'adminjs_preference']);
  const router = useRouter()
  const pathname = usePathname()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    if (session?.user?.email && is_test_user && adminjs_preference) {
      setIsChecked(true);
    } else {
      setIsChecked(flag_adminjs?.enabled ?? false);
    }
  }, [session, flag_adminjs, is_test_user, adminjs_preference, flagsmith.getState()]);

  const handleApiToggle = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!is_test_user) return;

    try {
      const newValue = event.target.checked;
      setIsChecked(newValue);
      await flagsmith.setTrait('adminjs_preference', newValue);
    } catch (error) {
      console.error("Erro ao salvar preferência no FlagSmith:", error);
      setIsChecked(!event.target.checked);
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
            {is_test_user && (
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
                      Usar AdminJS
                    </Typography>
                  }
                  labelPlacement="start"
                />
              </MenuItem>
            )}

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
    <AccessibilityProvider>
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
    </AccessibilityProvider>
  )
}

