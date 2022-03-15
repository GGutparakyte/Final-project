import React from 'react';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledLinkItem = styled(Link)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.common.black,
  textDecoration: 'none',
}));

const StyledLink = ({ children, ...props }) => (
  <StyledLinkItem {...props}>
    {children}
  </StyledLinkItem>
);

export default StyledLink;
