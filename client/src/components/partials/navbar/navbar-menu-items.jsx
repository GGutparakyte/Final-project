import React from 'react';
import {
  MenuItem,
  Divider,
  Typography,
} from '@mui/material';
import routes from '../../../routing/routes';
import StyledLink from '../styled-link';

const NavbarMenuItems = () => (
  <>
    <MenuItem>
      <StyledLink to={routes.LoginPage}>
        <Typography textAlign="center">Login</Typography>
      </StyledLink>
    </MenuItem>
    <Divider sx={{ my: 0.5 }} />
    <MenuItem sx={{ textDecoration: 'none' }}>
      <StyledLink to={routes.RegisterPage}>
        <Typography textAlign="center">Register</Typography>
      </StyledLink>
    </MenuItem>
  </>
);

export default NavbarMenuItems;
