export const mockTheme = {
  breakpoints: {
    down: jest.fn((size) => `(max-width:${size === 'md' ? '900' : '600'}px)`),
    up: jest.fn(),
    between: jest.fn(),
  },
  customStyles: {
    button: {
      padding: '5px 16px',
    },
    description: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '20px',
      padding: '20px',
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
    },
    linkActive: {
      textDecoration: 'none',
      color: 'primary',
      fontWeight: 'bold',
    },
  },
  palette: {
    bgColor: {
      light: '#FFFFFF',
      main: '#F5F5F5',
      dark: '#E0E0E0',
    },
    buttonHover: {
      main: '#2196F3',
      contrastText: '#FFFFFF',
    },
    primary: {
      main: '#1976D2',
      light: '#42A5F5',
      dark: '#1565C0',
      contrastText: '#FFFFFF',
    },
    textColor: {
      main: '#000000',
      light: '#757575',
    },
  },
}

jest.mock('@emotion/react', () => ({
  ...jest.requireActual('@emotion/react'),
  useTheme: () => mockTheme,
}))

jest.mock('@mui/material/styles', () => ({
  ...jest.requireActual('@mui/material/styles'),
  useTheme: () => mockTheme,
}))
