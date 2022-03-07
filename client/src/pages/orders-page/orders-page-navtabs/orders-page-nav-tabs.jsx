import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  Grid,
} from '@mui/material';
import OrdersPageNavTabMyOrders from './orders-page-nav-tab-my-orders';
import OrdersPageNavTabPurchaseLatter from './orders-page-nav-tab-purchase-latter';
import TabPanel from './orders-page-tab-panel';

const OrderPageNavTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item lg={7} md={12} sm={12} xs={12}>
      <Tabs value={value} onChange={handleChange}>
        <Tab
          label="MY ORDERS-LOREM IPSUM 1"
          sx={{
            fontSize: {
              xs: '2.6vh',
            },
            pt: 1,
            p: 0,
          }}
        />
        <Tab
          label="PURCHASE LATER"
          sx={{
            fontSize: {
              xs: '2.6vh',
            },
            pt: 1,
            p: 0,
            pl: 2,
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <OrdersPageNavTabMyOrders />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OrdersPageNavTabPurchaseLatter />
      </TabPanel>
    </Grid>
  );
};
export default OrderPageNavTabs;
