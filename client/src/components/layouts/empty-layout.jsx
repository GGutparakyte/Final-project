import React from 'react';
import {
  Box, Container,
} from '@mui/material';
import { Outlet } from 'react-router-dom';

const EmptyLayout = () => (
  <Container maxWidth="xl" sx={{ height: '100%' }}>
    <Box component="main" sx={{ height: '100%' }}>
      <Outlet />
    </Box>
  </Container>
);

export default EmptyLayout;
