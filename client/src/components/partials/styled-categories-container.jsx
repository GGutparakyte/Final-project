import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

const StyledCategoriesContainer = ({ title }) => (
  <Box sx={{
    display: 'flex',
    my: '2%',
  }}
  >
    <Box sx={{
      width: {
        xs: '30%',
        md: '40%',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
    >
      <Box sx={{
        height: '1px',
        width: '100%',
        backgroundColor: '#cccccc',
      }}
      />
    </Box>
    <Box sx={{
      width: {
        xs: '40%',
        md: '20%',
      },
      textAlign: 'center',
    }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: '3vh',
            lg: '3.6vh',
          },
        }}
      >
        {title}
      </Typography>
    </Box>
    <Box sx={{
      width: {
        xs: '30%',
        md: '40%',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
    >
      <Box sx={{
        height: '1px',
        width: '100%',
        backgroundColor: '#cccccc',
      }}
      />
    </Box>
  </Box>
);

export default StyledCategoriesContainer;
