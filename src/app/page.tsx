'use client';
import Image from "next/image"
import react from "../../public/assets/react.png"
import js from "../../public/assets/js.png"
import next from "../../public/assets/next.png"
import { AppBar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, FormControl, IconButton, InputLabel, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeConfig } from '@/components/config/theme';
import StatusButton from "@/components/StatusButton";

const drawerWidth = 0;

export default function Home() {

  return (
    <main>
      <StatusButton/>
    </main>
  );
}
