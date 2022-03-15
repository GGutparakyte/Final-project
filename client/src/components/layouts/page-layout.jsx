import React from 'react';
import {
  Box, Container,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar/index';

const PageLayout = () => (
  <Container maxWidth="xl">
    <Navbar />
    <Box component="main">
      <Outlet />
    </Box>
  </Container>
);

export default PageLayout;
