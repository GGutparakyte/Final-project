import React from 'react';
import {
  Box,
  IconButton,
  Menu,
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CatalogPageFilterCategory from './catalog-page-filter-category';
import CatalogPageFilterBrand from './catalog-page-filter-brand';
import CatalogPageFilterColor from './catalog-page-filter-color';
import DrawerList from './catalog-page-mobile-drawer/catalog-page-drawer-list';

const CatalogPageFilters = ({ children }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  return (
    <>
      <Box sx={{
        width: '100%',
        m: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      >
        <Box
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          <CatalogPageFilterCategory />
          <CatalogPageFilterBrand />
          <CatalogPageFilterColor />
          {children}
        </Box>
      </Box>
      <Box sx={{
        display: { xs: 'flex', sm: 'none' },
        width: '90%',
        m: 'auto',
      }}
      >
        <IconButton
          size="large"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <FilterAltIcon />
        </IconButton>
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
            display: { xs: 'block', md: 'none' },
          }}
        >
          <Box>
            <DrawerList drawerStatus={drawerOpen} open={openDrawer} close={closeDrawer} />
          </Box>
          {children}
        </Menu>
      </Box>
    </>
  );
};
export default CatalogPageFilters;
