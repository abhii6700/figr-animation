import { ThemeProvider, createTheme, styled } from '@mui/material';
import Lenis from '@studio-freight/lenis';
import { useRef } from 'react';
import './index.css';
import LandingPage from './pages/LandingPage';
import MouseContextProvider from './context/mouseContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7053FF',
    },
    secondary: {
      main: '#A495FD',
    },
    tertiary: {
      main: '#323232',
      light: '#4A4A68',
    },
    danger: {
      main: '#E65E69',
    },
    white: {
      main: '#FFFFFF',
    },
  },
  typography: {
    button: {
      fontSize: '0.7rem',
      textTransform: 'capitalize',
    },
    fontSize: 14,
    fontFamily: ['Montserrat', 'Rubik', 'Open Sans'].join(','),
    extraLarge: {
      fontFamily: 'Rubik',
      fontSize: '80px',
      fontWeight: 700,
      '@media (max-width:768px)': {
        fontSize: '24px',
      },
    },
    large: {
      fontFamily: 'Rubik',
      fontSize: '48px',
      fontWeight: 700,
      '@media (max-width:768px)': {
        fontSize: '24px',
      },
    },
    h1: {
      fontFamily: 'Rubik',
      fontSize: '32px',
      fontWeight: 700,
      '@media (max-width:768px)': {
        fontSize: '24px',
      },
    },
    h2: {
      fontFamily: 'Montserrat',
      fontSize: '18px',
      fontWeight: 600,
    },
    body: {
      fontFamily: 'Rubik',
      fontSize: '16px',
      fontWeight: 600,
    },
    subtitle: {
      fontFamily: 'Montserrat',
      fontSize: '12px',
      fontWeight: 400,
    },
    label: {
      fontFamily: 'Montserrat',
      fontSize: '15px',
      fontWeight: 600,
    },
  },
});

function App() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <ThemeProvider theme={theme}>
      <MouseContextProvider>
        <AppContainer>
          <LandingPage />
        </AppContainer>
      </MouseContextProvider>
    </ThemeProvider>
  );
}

const AppContainer = styled('div')(({ theme }) => ({
  padding: '0',
  margin: '0 auto',
  overflowX: 'hidden',

  '@media (max-width: 768px)': {
    padding: '0 16px',
  },
}));

export default App;
