import React from 'react';
import {
  Typography,
  Box,
  Button,
} from '@mui/material';
import Lipstic from '../Lipstic1.PNG';
import OrdersPageMyOrdersQuantitySelect from './orders-page-my-orders-quantity-select';
import OrdersPageMyOrdersColorPicker from './orders-page-my-orders-color-picker';

const options = ['1', '2'];

const OrdersPageNavTabMyOrders = () => {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Box sx={{ display: 'flex', mb: { xs: '2vh', lg: 0 } }}>
      <Box sx={{
        minWidth: { lg: '18vw', xs: '45vw' },
        minHeight: '10vh',
        mr: '2vw',
      }}
      >
        <Box sx={{
          minWidth: '100%',
          minHeight: '100%',
          backgroundImage: `url(${Lipstic})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '50vw',
      }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{
            fontSize: {
              lg: '1.4vw',
              md: '2vw',
              sm: '3vw',
              xs: '4vw',
            },
            fontWeight: 'bold',
            pt: 1,
          }}
          >
            Lipstic pink Lorem
          </Typography>
          <Typography sx={{
            textAlign: 'right',
            fontSize: {
              lg: '1.4vw',
              md: '2vw',
              sm: '3vw',
              xs: '4vw',
            },
            fontWeight: 'bold',
            pt: 1,
          }}
          >
            29.95 €
          </Typography>
        </Box>
        <Box sx={{ mb: '3%', width: '78%' }}>
          <Typography sx={{
            fontSize: {
              xs: '2vh',
              sm: '1.5vh',
            },
            color: '#605A5A',
          }}
          >
            Order number: Nº 30004689714
          </Typography>
        </Box>
        {/* COLOR PICKER  START */}
        <OrdersPageMyOrdersColorPicker />
        {/* COLOR PICKER END */}
        {/* QUANTITY  START */}
        <Box sx={{
          display: 'flex',
          mb: 5,
          justifyContent: { xs: 'space-between', lg: 'normal' },
        }}
        >
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
          >
            <Box sx={{ alignItems: 'center', mr: { lg: '2%', xs: '100%' } }}>
              <Typography sx={{
                fontSize: {
                  lg: '1.4vw',
                },
              }}
              >
                Quantity
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            alignItems: 'center', textAlign: 'center',
          }}
          >
            <OrdersPageMyOrdersQuantitySelect
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              options={options}
            />
          </Box>
        </Box>
        {/* QUANTITY  END */}
        <Box sx={{ display: { lg: 'flex' }, textAlign: 'start' }}>
          <Button sx={{ pb: '2px', borderRadius: '0%' }}>
            <Typography sx={{
              fontWeight: 'bold',
              fontSize: {
                xs: '3vw',
                sm: '2vw',
                md: '1.2vw',
              },
            }}
            >
              Remove
            </Typography>
          </Button>
          <Button variant="text" sx={{ pb: '2px', ml: '0.4vw', borderRadius: '0%' }}>
            <Typography sx={{
              fontWeight: 'bold',
              fontSize: {
                xs: '3vw',
                sm: '2vw',
                md: '1.2vw',
              },
            }}
            >
              Purhcase Later
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OrdersPageNavTabMyOrders;
