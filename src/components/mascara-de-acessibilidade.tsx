'use client'
import React, { useEffect, useState } from 'react';
import { Box, Fab } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useAcessibilidade } from '@/context/accessibility.context';

export default function Mascara() {
  const { mascaraAtiva, toggleMascara } = useAcessibilidade();
  const [mouseY, setMouseY] = useState(0);
  const maskHeight = 120;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMouseY(e.clientY);

    if (mascaraAtiva) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mascaraAtiva]);

  return (
    <>
      <Fab
        onClick={toggleMascara}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 9999,
          backgroundColor: mascaraAtiva ? '#d2195d' : '#250cae',
          color: '#fff',
          '&:hover': {
            backgroundColor: mascaraAtiva ? '#8b133f' : '#16066c',
          },
        }}
        aria-label="Ativar máscara de leitura"
         title="Ativar/Desativar máscara de leitura"
      >
        <VisibilityIcon />
      </Fab>

      
    {mascaraAtiva && (
        <>
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: `linear-gradient(
                to bottom,
                rgba(0,0,0,0.5) ${mouseY - maskHeight / 2}px,
                transparent ${mouseY - maskHeight / 2}px,
                transparent ${mouseY + maskHeight / 2}px,
                rgba(0,0,0,0.5) ${mouseY + maskHeight / 2}px
              )`,
              pointerEvents: 'none',
              zIndex: 9999,
            }}
          />
          <Box
            sx={{
              position: 'fixed',
              top: `${mouseY - maskHeight / 2}px`,
              left: 0,
              width: '100vw',
              height: '3px',
              backgroundColor: '#250cae',
              zIndex: 9999,
              pointerEvents: 'none',
            }}
          />
          <Box
            sx={{
              position: 'fixed',
              top: `${mouseY + maskHeight / 2}px`,
              left: 0,
              width: '100vw',
              height: '3px',
              backgroundColor: '#250cae',
              zIndex: 9999,
              pointerEvents: 'none',
            }}
          />
        </>
      )}
    </>
  );
}