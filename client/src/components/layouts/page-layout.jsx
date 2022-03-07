import React from 'react';
import {
  Box, Container,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar/index';

const PageLayout = () => (
  <Container maxWidth="xl" sx={{ height: '100%' }}>
    <Navbar />
    <Box component="main" sx={{ height: '100%' }}>
      <Outlet />
    </Box>
  </Container>
);

export default PageLayout;
