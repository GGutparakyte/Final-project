import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import store from './store';
import PageRouter from './routing/page-router';
import { lightTheme } from './styles/theme';

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <ReduxProvider store={store}>
      <CssBaseline>
        <PageRouter />
      </CssBaseline>
    </ReduxProvider>
  </ThemeProvider>
);

export default App;
