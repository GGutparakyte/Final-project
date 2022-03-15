import React from 'react';
import {
  Button,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  height: 45,
  width: 170,
  backgroundColor: theme.palette.primary.lightPink,
  padding: 0,
  borderRadius: '50px',
  boxShadow: 'none',
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.hoverLightPink,
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
