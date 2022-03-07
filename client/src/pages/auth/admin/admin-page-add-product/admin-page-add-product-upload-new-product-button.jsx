import React from 'react';
import { Typography } from '@mui/material';
import DarkButton from '../../../../components/partials/buttons/dark-button';

const UploadNewProductButton = ({ type, handleSubmit }) => (
  <DarkButton
    onClick={handleSubmit}
    type={type}
    sx={{
      width: {
        lg: '15vw',
        md: '30vw',
        sm: '30vw',
        xs: '100vw',
      },
    }}
  >
    <Typography sx={{ textAlign: 'center', fontSize: { xs: '1.3vh', lg: '2vh' } }}>
      Upload new product
    </Typography>
  </DarkButton>
);

export default UploadNewProductButton;
