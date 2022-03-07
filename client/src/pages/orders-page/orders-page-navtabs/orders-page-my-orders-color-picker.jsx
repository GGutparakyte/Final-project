import React from 'react';
import {
  Typography,
  Box,
} from '@mui/material';

const OrdersPageMyOrdersColorPicker = () => (
  <Box sx={{ display: 'flex', justifyContent: { xs: 'space-between', lg: 'normal' } }}>
    <Box>
      <Typography sx={{
        fontSize: {
          lg: '1.4vw',
        },
      }}
      >
        Color
      </Typography>
    </Box>
    <Box sx={{
      borderRadius: '50%',
      backgroundColor: 'rgb(227 219 210)',
      height: {
        lg: '1.8vw', sm: '4vw', md: '2vw', xs: '6vw',
      },
      margin: 0,
      mx: { lg: '50px', xs: '0px' },
      width:
      {
        lg: '1.8vw', sm: '4vw', md: '2vw', xs: '6vw',
      },
    }}
    />
  </Box>
);

export default OrdersPageMyOrdersColorPicker;
