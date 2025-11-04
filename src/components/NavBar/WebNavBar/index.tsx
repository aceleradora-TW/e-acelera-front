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
import { useFlags, useFlagsmith } from 'flagsmith/react';
import { v4 as uuidv4 } from 'uuid';



interface WebMenuProps {
  list: string[]
  session: Session | null
}

export const WebMenu: React.FC<WebMenuProps> = ({ list, session }) => {
  const { isLoading } = useFlags(['usa_adminjs']);
  const flagsmith = useFlagsmith();
  const router = useRouter()
  const pathname = usePathname()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [useNewApi, setUseNewApi] = useState(false); 
  const [isSaving, setIsSaving] = useState(false);
  
  useEffect(() => {
    if (!isLoading) { 
      let identifier: string;

      if (session?.user?.email) {
        identifier = session.user.email;
      } else {
        let anonymousId = localStorage.getItem('anonymous_user_id');
        if (!anonymousId) {
          anonymousId = uuidv4();
          localStorage.setItem('anonymous_user_id', anonymousId);
        }
        identifier = anonymousId;
      }

      flagsmith.identify(identifier).then(() => {
        const useAdminJsValue = flagsmith.getTrait('usa_adminjs');

        if (useAdminJsValue === undefined) {
          setUseNewApi(false);
        } else {
          setUseNewApi(!Boolean(useAdminJsValue));
        }
      });
    }
  }, [isLoading, session, flagsmith]);

  const handleApiToggle = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSaving(true);
    const wantsNewApi = event.target.checked;
    const useAdminJsValue = !wantsNewApi;

    const identifier = session?.user?.email || localStorage.getItem('anonymous_user_id');

    if (!identifier) {
      alert("Erro: Não foi possível identificar sua sessão.");
      setIsSaving(false);
      return;
    }

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
    if (!backendUrl) {
      alert("Erro de configuração da aplicação.");
      setIsSaving(false);
      return;
    }

    try {
      await fetch(`${backendUrl}/user-preferences`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          key: 'usa_adminjs',
          value: useAdminJsValue,
          userId: identifier,
        }),
      });

      flagsmith.setTrait('usa_adminjs', useAdminJsValue);
      setUseNewApi(wantsNewApi);
      window.location.reload();

    } catch (error) {
      console.error("Erro ao salvar preferência:", error);
      alert("Ocorreu um erro ao salvar sua preferência.");
      setIsSaving(false);
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
                sx={{transform: anchorEl ? "rotate(180deg)" : "rotate(0deg)",transition: "0.3s",}}
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

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginRight: 2 }}>
        <FormControlLabel
          control={
            <Switch
              checked={useNewApi}
              onChange={handleApiToggle}
              disabled={isSaving || isLoading}
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
      </Box>  
      <Box sx={{ flexGrow: 0 }}>{renderComponent()}</Box>
    </>
  )
}