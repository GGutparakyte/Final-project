import React from 'react';
import {
  MenuItem,
  Divider,
  Typography,
} from '@mui/material';
import routes from '../../../routing/routes';
import StyledNavbarMenuLink from './navbar-menu-link-styled';

const NavbarAuthMenuItems = ({ handleLogout }) => (
  <>
    <MenuItem>
      <StyledNavbarMenuLink to={routes.HomePage}>
        <Typography textAlign="center">Profile</Typography>
      </StyledNavbarMenuLink>
    </MenuItem>
    <Divider sx={{ my: 0.5 }} />
    <MenuItem sx={{ textDecoration: 'none' }} onClick={handleLogout}>
      <StyledNavbarMenuLink to={routes.HomePage}>
        <Typography textAlign="center">Logout</Typography>
      </StyledNavbarMenuLink>
    </MenuItem>
  </>
);

export default NavbarAuthMenuItems;
