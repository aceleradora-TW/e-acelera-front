'use client'
import { Box, Fab, Grid, Paper, SvgIcon, Typography } from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { useAccessibility } from '../context/accessibility.context';
import ContrastIcon from '@mui/icons-material/Contrast';
import { ClickButton } from './ClickButton';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import SmartScreenIcon from '@mui/icons-material/SmartScreen';
import React from 'react';
import { themePalette } from '@/app/config/themes/palette';
import CloseIcon from '@mui/icons-material/Close';
import { customStyles } from '@/app/config/themes/components';
import { useMediaQuery, useTheme } from '@mui/material';

const AccessibilityMenu = () => {
  const {
    isMenuOpen,
    toggleMenu,
    clearSettings,
    contrastEnabled,
    readingMaskEnabled,
    themeFontFamily,
    toggleContrast,
    toggleReadingMask,
    changeFontFamily,
  } = useAccessibility();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box sx={customStyles.accessibilityMenu.containerFab}>
        {!isMobile && (
        <Box className="label" sx={customStyles.accessibilityMenu.labelFab}>
          <Typography variant='body1'> Menu de acessibilidade </Typography>
        </Box>
        )}
        <Fab color="primary" onClick={toggleMenu} sx={customStyles.accessibilityMenu.fabButton}>
          <AccessibilityNewIcon sx={{ color: themePalette.baseBgColor, fontSize: 32 }} />
        </Fab>
      </Box>

      {isMenuOpen && (
        <Paper elevation={4} sx={customStyles.accessibilityMenu.menuPaper}>
          <Box sx={customStyles.accessibilityMenu.menuHeader}>
            <Typography variant='h6'> Menu de Acessibilidade </Typography>
            <ClickButton click={toggleMenu} backIcon={<CloseIcon sx={{ fontSize: 16 }} />} sx={customStyles.accessibilityMenu.closeButton} />
          </Box>
          <Box sx={{ padding: '12px', overflowY: 'auto' }}>
            <Grid container spacing={2} direction="column" alignItems="stretch">
              <Grid item xs={12}>
                <ClickButton
                  click={toggleReadingMask}
                  title="Máscara leitura"
                  backIcon={<SmartScreenIcon sx={{ fontSize: 36 }} />}
                  isActive={readingMaskEnabled}
                  sx={customStyles.accessibilityMenu.buttonGrid} />
              </Grid>
              <Grid item xs={12}>
                <ClickButton
                  click={toggleContrast}
                  title="Modo dark"
                  backIcon={<ContrastIcon sx={{ fontSize: 36 }} />}
                  isActive={contrastEnabled}
                  sx={customStyles.accessibilityMenu.buttonGrid} />
              </Grid>
              <Grid item xs={12}>
                <ClickButton
                  click={() => changeFontFamily("OpenDyslexic")}
                  title={`Fonte Acessível`}
                  backIcon={<FormatSizeIcon sx={{ fontSize: 36 }} />}
                  isActive={Boolean(themeFontFamily)}
                  sx={customStyles.accessibilityMenu.buttonGrid} />
              </Grid>
            </Grid>
          </Box>
          <Box sx={customStyles.accessibilityMenu.footerContainer}>
            <Box sx={customStyles.accessibilityMenu.footerLine} />
            <Box sx={customStyles.accessibilityMenu.footerBox} >
              <ClickButton
                sx={{padding: themeFontFamily ? '8px 4px' : '8px', }}
                click={clearSettings}
                title= {"Limpar Configurações"}
                backIcon={
                <SvgIcon
                  component="svg"
                  viewBox="2 2 20 20"
                  sx={{ fontSize: themeFontFamily ? 42 : 24, paddingRight: themeFontFamily ? '0' : '4px',
                   }}
                >
                  <path d="M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91" />
                </SvgIcon>
              } 
              />
            </Box>
          </Box>
        </Paper>
      )}
    </>
  );
};
export default AccessibilityMenu;