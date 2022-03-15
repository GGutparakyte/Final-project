/* eslint-disable */
import React, { useContext } from 'react';
import {
  Box,
  IconButton,
  Menu,
  // TextField,
  // Autocomplete,
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import { styled } from '@mui/material/styles';
import DrawerList from './catalog-page-mobile-drawer/catalog-page-drawer-list';
import ProductProvider from '../contexts/product-context';

// const StyledAutoComplete = styled(Autocomplete)(() => ({
//   width: 130,
//   padding: 0,

//   '& .MuiAutocomplete-inputRoot': {
//     border: 'none',
//     color: ' black',
//     p: 0,
//     '& fieldset': {
//       border: 'none',
//       borderRadius: '0',
//     },
//   },
// }));

const CatalogPageFilters = ({ children }) => {
  // const { filters, handleFilterChange } = useContext(ProductProvider);
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
    <ProductProvider>
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
          {/* <StyledAutoComplete
            name="category"
            filterOptions={filters.category}
            renderInput={(params) => <TextField {...params} label="Category" />}
            size="large"
            getOptionLabel={(options) => options.title}
            onChange={(selectedOptions, filterName) => handleFilterChange(
              selectedOptions,
              filterName,
            )}
          />
          <StyledAutoComplete
            name="brand"
            filterOptions={filters.brand}
            renderInput={(params) => <TextField {...params} label="Brand" />}
            size="large"
            getOptionLabel={(options) => options.title}
            onChange={(selectedOptions, filterName) => handleFilterChange(
              selectedOptions,
              filterName,
            )}
          />
          <StyledAutoComplete
            name="color"
            filterOptions={filters.color}
            renderInput={(params) => <TextField {...params} label="Color" />}
            size="large"
            getOptionLabel={(options) => options.title}
            onChange={(selectedOptions, filterName) => handleFilterChange(
              selectedOptions,
              filterName,
            )}
          /> */}
          {/* {children} */}
        </Box>
      </Box>
      {/* Togler start */}
      <Box sx={{
        display: { xs: 'flex', 
        sm: 'none' },
        width: '90%',
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
            display: { xs: 'block', 
            md: 'none' },
          }}
        >
          <Box>
            <DrawerList drawerStatus={drawerOpen} open={openDrawer} close={closeDrawer} />
          </Box>
          {children}
        </Menu>
      </Box>
      {/* Togler end */}
    </ProductProvider>
  );
};
export default CatalogPageFilters;
