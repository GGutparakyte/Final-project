import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import StyledNavbarMenuLink from '../styled-link';

const NavbarToggler = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <Box
      container
      sx={{
        flexGrow: 1,
        display: {
          xs: 'flex',
          md: 'none',
        },
      }}
    >
      <IconButton
        size="large"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Box>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            fontSize: '5vh',
            display: {
              md: 'flex',
              lg: 'none',
            },
          }}
        >
          LOREM
        </Typography>
      </Box>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: {
            xs: 'block',
            md: 'none',
          },
        }}
      >
        {pages.map(({ title, linkTo }) => (
          <MenuItem
            key={title}
            onClick={handleCloseNavMenu}
          >
            <StyledNavbarMenuLink to={linkTo}>
              <Typography textAlign="center">{title}</Typography>
            </StyledNavbarMenuLink>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
export default NavbarToggler;
