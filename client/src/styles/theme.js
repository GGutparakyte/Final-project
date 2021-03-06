import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#252525',
      light: 'rgba(250,250,250, 0.8)',
      dark: '#000000',
      lightPink: 'rgb(230 188 150)',
      hoverLightPink: 'rgba(187, 33, 57, 0.8)',
    },
    secondary: {
      main: '#d2583e',
    },
    background: {
      default: '#fafafa',
    },
  },
  typography: {
    fontFamily: [
      'Questrial',
      '-apple-system',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export const lightTheme = createTheme(theme, {
  shadows: [
    ...theme.shadows,
    '0 0 2em 0px rgba(0, 0, 0, 0.4)',
    '0 0 0 1px #ddd',
  ],
  transitions: {
    easeMe: 'all 0.2s ease-out',
  },
  toolbar: {
    height: 64,
  },
  backgroundColor: '#fafafa',
});

export default lightTheme;
