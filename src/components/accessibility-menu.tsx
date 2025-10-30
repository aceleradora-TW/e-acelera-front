'use client'
import { Box, Fab, Grid, Paper, Typography } from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { useAccessibility } from '../context/accessibility.context';
import ContrastIcon from '@mui/icons-material/Contrast';
import { ClickButton } from './ClickButton';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import SmartScreenIcon from '@mui/icons-material/SmartScreen';
import React from 'react';
import { themePalette } from '@/app/config/themes/palette';
import CloseIcon from '@mui/icons-material/Close';
import { customStyles } from '@/app/config/themes/components';
import AccessibilityReadingMask from './accessibility-reading-mask';


const AccessibilityMenu = () => {
  const {
    isMenuOpen,
    toggleMenu,
    clearSettings,
    contrastEnabled,
    readingMaskEnabled,
    textSize,
    toggleContrast,
    toggleReadingMask,
    increaseTextSize,
  } = useAccessibility();
  
  return (
    <>
      <Box sx={customStyles.accessibilityMenu.containerFab}>
        <Box className="label" sx={customStyles.accessibilityMenu.labelFab}>
          <Typography variant="body1"> Menu de acessibilidade </Typography>
        </Box>
        <Fab
          color="primary"
          onClick={toggleMenu}
          sx={customStyles.accessibilityMenu.fabButton}
        >
          <AccessibilityNewIcon
            sx={{ color: themePalette.baseBgColor, fontSize: 32 }}
          />
        </Fab>
      </Box>

      {isMenuOpen && (
        <Paper elevation={4} sx={customStyles.accessibilityMenu.menuPaper}>
          <Box sx={customStyles.accessibilityMenu.menuHeader}>
            <Box
              sx={{
                width: 20,
                height: 20,
                minWidth: 20,
                minHeight: 20,
                padding: 1,
              }}
            />
            <Typography variant="h6"> Menu de Acessibilidade </Typography>
            <ClickButton
              click={toggleMenu}
              backIcon={<CloseIcon sx={{ fontSize: 16 }} />}
              sx={customStyles.accessibilityMenu.closeButton}
            />
          </Box>
          <Box sx={{ padding: 2, overflowY: "auto" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ClickButton
                  click={toggleContrast}
                  title="Alto contraste"
                  backIcon={<ContrastIcon sx={{ fontSize: 36 }} />}
                  isActive={contrastEnabled}
                  sx={customStyles.accessibilityMenu.buttonGrid}
                />
              </Grid>
              <Grid item xs={6}>
                <ClickButton
                  click={toggleReadingMask}
                  title="Máscara leitura"
                  backIcon={<SmartScreenIcon sx={{ fontSize: 36 }} />}
                  isActive={readingMaskEnabled}
                  sx={customStyles.accessibilityMenu.buttonGrid}
                />
              </Grid>
              <Grid item xs={6}>
                <ClickButton
                  click={increaseTextSize}
                  title={`Texto maior`}
                  backIcon={<FormatSizeIcon sx={{ fontSize: 36 }} />}
                  endIcon={
                    <Box sx={customStyles.accessibilityMenu.textLevelContainer}>
                      {[18, 20, 22, 24].map((size, index) => (
                        <Box
                          key={index}
                          sx={customStyles.accessibilityMenu.textLevelIndicator(
                            themePalette,
                            textSize,
                            size
                          )}
                        />
                      ))}
                    </Box>
                  }
                  isActive={textSize > 16}
                  sx={customStyles.accessibilityMenu.buttonGrid}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={customStyles.accessibilityMenu.footerContainer}>
            <Box sx={customStyles.accessibilityMenu.footerLine} />
            <Box sx={customStyles.accessibilityMenu.footerBox}>
              <ClickButton
                click={clearSettings}
                title="Limpar Configurações"
                backIcon={<RestartAltIcon sx={{ fontSize: 24 }} />}
              />
            </Box>
          </Box>
        </Paper>
      )}
      <AccessibilityReadingMask/>
    </>
  );
};
export default AccessibilityMenu;