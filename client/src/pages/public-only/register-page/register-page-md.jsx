import React from 'react';
import {
  Box,
} from '@mui/material';
import BackgroundImageContainer from '../../../components/containers/background-image-container';
import Header from './header.jpg';

const RegisterPageMd = ({ children, sx }) => (
  <Box sx={{
    height: '100vh',
    ...sx,
  }}
  >
    <BackgroundImageContainer
      sx={{
        backgroundImage: `url(${Header})`,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box sx={{
        m: 'auto',
        height: '600px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: '700px',
      }}
      >
        {children}
      </Box>
    </BackgroundImageContainer>
  </Box>
);

export default RegisterPageMd;
