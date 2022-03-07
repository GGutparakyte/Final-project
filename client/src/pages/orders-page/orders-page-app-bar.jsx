import React from 'react';
import {
  Box,
} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';

const OrdersPageAppBar = () => (
  <AppBar
    position="fixed"
    sx={{
      backgroundColor: '#fafafa',
      color: 'black',
      boxShadow: 'none',
      borderBottom: '1px solid #cccccc',
      mb: 30,
      height: '50px',
    }}
  >
    <Toolbar sx={{ height: '70px' }}>
      {/* Icona ir tekstas Start */}
      <Box sx={{ display: 'flex' }}>
        <Box sx={{
          alignItems: 'center', textAlign: 'center', textDecoration: 'none',
        }}
        >
          <IconButton edge="start" color="inherit">
            <Link
              to="/catalog"
              style={{ textDecoration: 'none', color: '#232020' }}
            >
              <ArrowBackIcon />
            </Link>
          </IconButton>
        </Box>
        <Box sx={{
          display: 'flex', justifyContent: 'center', flexDirection: 'column',
        }}
        >
          <Box sx={{ textAlign: 'center', textDecoration: 'none' }}>
            <Link
              to="/catalog"
              style={{ textDecoration: 'none', color: '#232020' }}
            >
              RETURN
            </Link>
          </Box>
        </Box>
      </Box>
      {/* Icona ir tekstas End */}
      <Box sx={{ display: 'flex', m: 'auto', fontWeight: 'bold' }}>
        <Typography variant="h6" color="inherit" component="div" sx={{ fontSize: '28px', fontWeight: 'bold', display: { xs: 'none', lg: 'flex' } }}>
          LOREM IPSUM
        </Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default OrdersPageAppBar;
