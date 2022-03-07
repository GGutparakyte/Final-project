import React from 'react';
import {
  Typography,
  Box,
} from '@mui/material';

const OrdersPageMyOrdersColorPicker = () => (
  <Box sx={{ display: 'flex', width: '78%' }}>
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
      height: '1.8vw',
      margin: 0,
      mx: '50px',
      width: '1.8vw',
    }}
    />
  </Box>
);

export default OrdersPageMyOrdersColorPicker;
