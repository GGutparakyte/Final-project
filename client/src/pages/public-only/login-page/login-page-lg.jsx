import React from 'react';
import {
  Grid,
  Box,
} from '@mui/material';
import BackgroundImageContainer from '../../../components/containers/background-image-container';
import Header from './header.jpg';

const LoginPageLg = ({ children, ...props }) => (
  <Box {...props}>
    <Grid container spacing={2}>
      <Grid item md={6}>
        <BackgroundImageContainer
          sx={{
            backgroundImage: `url(${Header})`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
          }}
        />
      </Grid>
      {children}
    </Grid>
  </Box>
);
export default LoginPageLg;
