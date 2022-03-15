import React from 'react';
import {
  Box,
} from '@mui/material';
import NavbarToggler from './navbar-toggler';
import NavbarDesktop from './navbar-desktop';

const pagesDesktop = [
  { title: 'Home', linkTo: '/' },
  { title: 'Blog', linkTo: '/' },
  { title: 'Brands', linkTo: '/' },
  { title: 'Catalog', linkTo: '/catalog' },
];

const pagesToggler = [
  { title: 'Home', linkTo: '/' },
  { title: 'Blog', linkTo: '/' },
  { title: 'Brands', linkTo: '/' },
  { title: 'Catalog', linkTo: '/catalog' },
];

const Navbar = () => (
  <>
    <Box sx={{
      display: {
        xs: 'flex',
        md: 'none',
      },
    }}
    >
      <NavbarToggler pages={pagesToggler} />
    </Box>
    <Box sx={{
      display: {
        xs: 'none',
        md: 'flex',
      },
    }}
    >
      <NavbarDesktop pages={pagesDesktop} />
    </Box>
  </>
);
export default Navbar;
