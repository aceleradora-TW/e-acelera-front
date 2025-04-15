import { theme } from "@/app/config/themes"
import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import Image from "next/image"
import * as React from "react"

interface MobileMenuProps {
  list: string[]
}
export const MobileMenu: React.FC<MobileMenuProps> = ({ list }) => {
  const [anchorNav, setAnchorNav] = React.useState<null | HTMLElement>(null)
  const [anchorUser, setAnchorUser] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorUser(null)
  }
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          sx={{ color: theme.palette.bgColor?.light }}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {list.map((item) => (
            <MenuItem key={item} onClick={handleCloseNavMenu}>
              <Link href={item ? `/${item.toLowerCase()}` : `/`}
                underline="none"
                textAlign="center"
                sx={{ color: theme.palette.textColor?.light }}
              >
                {item}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
        <Image
          width={43}
          height={48}
          src="/assets/logo.svg"
          alt="logo e-acelera"
          style={{ display: "flex" }}
        />
      </Box>

      <Typography
        noWrap
        component="a"
        href="/"
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          ...theme.customStyles.logoType,
        }}
      >
        E-Acelera
      </Typography>
    </>
  )
}
