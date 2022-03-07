import React from 'react';
import {
  Grid,
  Box,
} from '@mui/material';
import OrdersPageOrdersSummary from './orders-page-orders-summary/index';
import OrdersPageAppBar from './orders-page-app-bar';
import OrderPageNavTabs from './orders-page-navtabs/orders-page-nav-tabs';
import OrdersPageLatestItemsReviewed from './orders-page-latest-items-reviewed/index';

const OrdersPage = () => (
  <>
    <Box sx={{ flexGrow: 1 }}>
      <OrdersPageAppBar />
    </Box>
    <Grid
      container
      sx={{
        margin: 'auto',
        marginTop: '70px',
      }}
    >
      <OrderPageNavTabs />
      <OrdersPageOrdersSummary />
      <OrdersPageLatestItemsReviewed />
    </Grid>
  </>
);
export default OrdersPage;
