import React from 'react';
import {
  MenuItem,
  Divider,
  Typography,
} from '@mui/material';
import routes from '../../../routing/routes';
import StyledNavbarMenuLink from './navbar-menu-link-styled';

const NavbarMenuItemsCategories = () => (
  <>
    <MenuItem>
      <StyledNavbarMenuLink to={routes.HomePage}>
        <Typography textAlign="center">Lipstic</Typography>
      </StyledNavbarMenuLink>
    </MenuItem>
    <Divider sx={{ my: 0.5 }} />
    <MenuItem sx={{ textDecoration: 'none' }}>
      <StyledNavbarMenuLink to={routes.HomePage}>
        <Typography textAlign="center">Foundation</Typography>
      </StyledNavbarMenuLink>
    </MenuItem>
  </>
);

export default NavbarMenuItemsCategories;
