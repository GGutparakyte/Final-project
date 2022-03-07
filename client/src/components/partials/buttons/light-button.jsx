import React from 'react';
import {
  Button,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(() => ({
  height: 45,
  width: 170,
  backgroundColor: 'rgb(230 188 150)',
  padding: 0,
  borderRadius: '50px',
  boxShadow: 'none',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(187, 33, 57, 0.8)',
    boxShadow: 'none',
  },
}));

const FormButton = ({ children, sx, ...rest }) => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    ...sx,
  }}
  >
    <StyledButton
      type="submit"
      variant="contained"
      color="primary"
      {...rest}
      sx={{ margin: 'auto' }}
    >
      {children}
    </StyledButton>
  </Box>
);
export default FormButton;
