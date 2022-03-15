import React from 'react';
import {
  MenuItem,
  Divider,
  Typography,
} from '@mui/material';
import routes from '../../../routing/routes';
import StyledLink from '../styled-link';

const NavbarMenuItemsCategories = () => (
  <>
    <MenuItem>
      <StyledLink to={routes.HomePage}>
        <Typography textAlign="center">Lipstic</Typography>
      </StyledLink>
    </MenuItem>
    <Divider sx={{ my: 0.5 }} />
    <MenuItem sx={{ textDecoration: 'none' }}>
      <StyledLink to={routes.HomePage}>
        <Typography textAlign="center">Foundation</Typography>
      </StyledLink>
    </MenuItem>
  </>
);

export default NavbarMenuItemsCategories;
