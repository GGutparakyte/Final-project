import React from 'react';
import {
  Grid,
  Typography,
  Box,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/auth';
import FormButton from '../../../components/partials/buttons/light-button';

const OrdersPageOrdersSummary = () => {
  const auth = useSelector(authSelector);
  const { pathname } = useLocation();
  return (
    <Grid item lg={4} sm={12} md={12} xs={12}>
      <Box sx={{
        textAlign: 'left', width: '50%', borderBottom: '2px solid black', lineHeight: 1.25,
      }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: '2.6vh',
            },
            pt: 2,
            pb: 0.9,
          }}
        >
          ORDERS SUMMARY
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{
          display: 'flex',
          width: '500px',
          flexDirection: 'column',
        }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2.5 }}>
            <Typography sx={{
              fontSize: {
                xs: '2.6vh',
              },
              pt: 1,
            }}
            >
              Products
            </Typography>
            <Typography sx={{
              textAlign: 'right',
              fontSize: {
                xs: '2.6vh',
              },
              pt: 1,
            }}
            >
              199.99 €
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{
              fontSize: {
                xs: '2.6vh',
              },
              pt: 1,
            }}
            >
              Estimated shipping costs
            </Typography>
            <Typography sx={{
              textAlign: 'right',
              fontSize: {
                xs: '2.6vh',
              },
              pt: 1,
            }}
            >
              5,95 €
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 5 }}>
            <Typography sx={{
              fontSize: {
                xs: '2.6vh',
              },
              pt: 1,
              fontWeight: 'bold',
            }}
            >
              TOTAL (VAT included)
            </Typography>
            <Typography sx={{
              textAlign: 'right',
              fontSize: {
                xs: '2.6vh',
              },
              pt: 1,
              fontWeight: 'bold',
            }}
            >
              204,95 €
            </Typography>
          </Box>
          <Box sx={{
            display: 'inline-block', textAlign: 'center', mb: '5%', mt: '10%',
          }}
          >
            <FormButton>
              <Box sx={{ alignItems: 'center', textAlign: 'center', textDecoration: 'none' }}>
                {auth.loggedIn
                  ? (
                    <Box sx={{ textAlign: 'center', textDecoration: 'none' }}>
                      <Link
                        to="/completion"
                        style={{ textDecoration: 'none', color: 'white' }}
                      >
                        <Typography>
                          COMPLETE ORDER
                        </Typography>
                      </Link>
                    </Box>
                  )
                  : (
                    <Box sx={{ textAlign: 'center', textDecoration: 'none' }}>
                      <Link
                        to={`/login?redirectTo=${pathname}`}
                        style={{ textDecoration: 'none', color: 'white' }}
                      >
                        <Typography>
                          COMPLETE ORDER
                        </Typography>
                      </Link>
                    </Box>
                  )}
              </Box>
            </FormButton>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default OrdersPageOrdersSummary;
