import React from 'react';
import {
  MenuItem,
  Divider,
  Typography,
} from '@mui/material';
import routes from '../../../routing/routes';
import StyledNavbarMenuLink from './navbar-menu-link-styled';

const NavbarMenuItems = () => (
  <>
    <MenuItem>
      <StyledNavbarMenuLink to={routes.LoginPage}>
        <Typography textAlign="center">Login</Typography>
      </StyledNavbarMenuLink>
    </MenuItem>
    <Divider sx={{ my: 0.5 }} />
    <MenuItem sx={{ textDecoration: 'none' }}>
      <StyledNavbarMenuLink to={routes.RegisterPage}>
        <Typography textAlign="center">Register</Typography>
      </StyledNavbarMenuLink>
    </MenuItem>
  </>
);

export default NavbarMenuItems;
