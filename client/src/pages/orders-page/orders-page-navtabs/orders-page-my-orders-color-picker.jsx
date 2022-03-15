import React from 'react';
import {
  Typography,
  Box,
} from '@mui/material';

const OrdersPageMyOrdersColorPicker = () => (
  <Box
    sx={{
      display: 'flex',
    }}
  >
    <Box>
      <Typography sx={{
        fontSize: {
          lg: '1.2vw',
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
        lg: '1.6vw',
        sm: '4vw',
        md: '2vw',
        xs: '6vw',
      },
      mx: {
        xs: '1vw',
      },
      width:
      {
        lg: '1.6vw',
        sm: '4vw',
        md: '2vw',
        xs: '6vw',
      },
    }}
    />
  </Box>
);

export default OrdersPageMyOrdersColorPicker;
