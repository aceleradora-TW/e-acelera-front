import { theme } from "@/app/config/theme";
import { ClickButton } from "@/components/ClickButton";
import { AppBar, Avatar, Box, Button, Container, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface WebMenuProps {
  list: string[];
}

export const WebMenu: React.FC<WebMenuProps> = ({ list }) => {
  const router = useRouter()
  const pathname = usePathname()
  const { data: session } = useSession()


  const handlePageRedirect = (pagina: string) => {
    pagina ? router.push(`/${pagina}`):router.push('/')
  };

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
          <Button
            key={item}
            onClick={() => handlePageRedirect(item)}
            sx={{
              ...linkStyle(item),
            }}
          >
            {item}
          </Button>
        ))}
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        {!session ? (
          <ClickButton title="LOGIN" click={()=> handlePageRedirect("Login")}/>
        ): (
        <Tooltip title="Open settings">
          <IconButton
            sx={{ display: { xs: 'none', md: 'flex' }}}
          >
            <Avatar alt="Remy Sharp" src={`${session.user?.image}`} />
          </IconButton>
        </Tooltip>
        )
        
        }
        
        
      </Box>

    </>
  );
};
