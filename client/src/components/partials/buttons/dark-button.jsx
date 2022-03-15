import React from 'react';
import {
  Button,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '0%',
  height: '6vh',
  width: '14vw',
  padding: 0,
  backgroundColor: theme.palette.primary.dark,
}));

const DarkButton = ({ children, sx, ...rest }) => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
  }}
  >
    <StyledButton
      type="submit"
      variant="contained"
      {...rest}
      sx={{ margin: 'auto', mb: '2%' }}
    >
      {children}
    </StyledButton>
  </Box>
);
export default DarkButton;
