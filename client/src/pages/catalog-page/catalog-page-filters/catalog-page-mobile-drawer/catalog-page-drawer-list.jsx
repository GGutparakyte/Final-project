/*eslint-disable */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
// import CatalogPageFilterBrand from '../catalog-page-filter-brand';
// import CatalogPageFilterColor from '../catalog-page-filter-color';
// import CatalogPageFilterCategory from '../catalog-page-filter-category';

const DrawerList = ({ close }) => {
  const [markers, setMarker] = useState({
    m1: false,
    m2: false,
    m3: false,
    m4: false
  })

  const bold = 'bold'
  return (
    <Box
      sx={{ width: 250, }}
      role="presentation"
      onClick={close}
    >
      <Box>
        <List
          sx={{ width: '100%', maxWidth: 360 }}
          component="nav"
        >
          {/* <CatalogPageFilterCategory />
          <CatalogPageFilterBrand />
          <CatalogPageFilterColor /> */}

        </List>
      </Box>
    </Box>
  );
}
export default DrawerList;
