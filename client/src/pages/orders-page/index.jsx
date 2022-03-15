import React from 'react';
import {
  Grid,
} from '@mui/material';
import OrdersPageOrdersSummary from './orders-page-orders-summary/index';
import OrderPageNavTabs from './orders-page-navtabs/orders-page-nav-tabs';
import OrdersPageLatestItemsReviewed from './orders-page-latest-items-reviewed/index';

const OrdersPage = () => (
  <Grid container>
    <OrderPageNavTabs />
    <OrdersPageOrdersSummary />
    <OrdersPageLatestItemsReviewed />
  </Grid>
);
export default OrdersPage;
