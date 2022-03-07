import React from 'react';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledNavbarMenuLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.common.black,
  textDecoration: 'none',
}));

const NavbarAuthMenuLink = ({ children, ...props }) => (
  <StyledNavbarMenuLink {...props}>
    {children}
  </StyledNavbarMenuLink>
);

export default NavbarAuthMenuLink;
