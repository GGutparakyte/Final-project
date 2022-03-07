import React, { useState, useRef } from 'react';
import {
  Menu,
  Box,
  Button,
  Typography,
  styled,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import NavbarMenuItems from './navbar-menu-items';
import NavbarAuthMenuItems from './navbar-auth-menu-items';
import { authSelector } from '../../../store/auth';
import AuthService from '../../../services/auth-service';
import StyledNavbarMenuLink from './navbar-menu-link-styled';

const NavbarDesktop = ({ pages }) => {
  const anchorRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);
  const auth = useSelector(authSelector);

  const StyledIconLink = styled(Link)(({ theme }) => ({
    color: theme.palette.common.black,
    textDecoration: 'none',
  }));

  const handleLogout = () => {
    handleCloseMenu();
    AuthService.logout();
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#fafafa',
        color: 'black',
        boxShadow: 'none',
        m: 'auto',
      }}
    >
      <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          noWrap
          component="div"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Typography sx={{ fontSize: '32px' }}>LOREM</Typography>
        </Box>

        {/* Skirta: 'About Us', 'Blog', 'Brands', 'Shop' */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {pages.map(({ title, linkTo }) => (
            <Button
              key={title}
              sx={{
                my: 2,
                color: 'black',
                display: 'block',
                textTransform: 'lowercase',
                fontSize: '20px',
                fontWeight: '400',
              }}
            >
              <StyledNavbarMenuLink to={linkTo}>
                {title}
              </StyledNavbarMenuLink>
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <PersonIcon onClick={handleOpenMenu} ref={anchorRef} />
          <StyledIconLink
            to="/orders"
          >
            <Badge badgeContent={1} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </StyledIconLink>
        </Box>
        <Menu
          sx={{ mt: '2px' }}
          open={menuOpen}
          onClose={handleCloseMenu}
          onClick={handleCloseMenu}
          anchorEl={anchorRef.current}
          // anchorOrigin - Mygtuko(enchorEl) atspirties taškas
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'bottom',
          }}
          // transformOrigin - <Menu> komponento turinio atspirties taškas
          transformOrigin={{
            horizontal: 'center',
            vertical: 'top',
          }}
        >
          {
            !auth.loggedIn ? (
              <NavbarMenuItems />
            ) : <NavbarAuthMenuItems handleLogout={handleLogout} />
          }
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
export default NavbarDesktop;
