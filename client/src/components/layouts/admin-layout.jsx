import React, { useState } from 'react';
import {
  Box, Container,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import AdminPageAddProductAppBar from '../../pages/auth/admin/components/admin-page-appbar';
import Copyright from '../../pages/auth/admin/components/admin-page-copyright';
import AdminPageDrawer from '../../pages/auth/admin/components/admin-page-drawer';

const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        height: '100%', p: 0, m: 0,
      }}
    >
      <AdminPageAddProductAppBar
        open={open}
        toggleDrawer={toggleDrawer}
      />
      <Box sx={{ display: 'flex' }}>
        <AdminPageDrawer
          open={open}
          toggleDrawer={toggleDrawer}
        />
        <Box
          component="main"
          sx={{ width: '100%' }}
        >
          <Outlet />
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
};
export default AdminLayout;
