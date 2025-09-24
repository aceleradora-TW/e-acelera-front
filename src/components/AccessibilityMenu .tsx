import { useAccessibilityContext } from '@/hooks/useAccessibilityContext';
import { Box, Button, ButtonGroup } from '@mui/material';
import React from 'react'

export const AccessibilityMenu  = () => {
  const {
    fontSize, setFontSize,
  } = useAccessibilityContext();
  return (
    <Box sx={{ border: '1px solid grey', padding: 2, borderRadius: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <h2>Acessibilidade</h2>
       <Box>
        <h3>Tamanho da Fonte</h3>
        <ButtonGroup>
          <Button onClick={() => setFontSize('normal')} variant={fontSize === 'normal' ? 'contained' : 'outlined'}>Normal</Button>
          <Button onClick={() => setFontSize('large')} variant={fontSize === 'large' ? 'contained' : 'outlined'}>Grande</Button>
          <Button onClick={() => setFontSize('extra-large')} variant={fontSize === 'extra-large' ? 'contained' : 'outlined'}>Extra Grande</Button>
        </ButtonGroup>
      </Box>
    </Box>
  )
}


