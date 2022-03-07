import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(() => ({
  border: 'none',
  color: 'black',
  borderBottom: '1px solid black',
  '& label.Mui-focused': {
    color: 'rgba(0, 0, 0, 0.42)',
  },
  '& input': {
    color: 'black',
  },
  '& .MuiInputBase-root.MuiInput-root:before': { // spalva pries paspaudziant
    borderColor: 'rgba(0, 0, 0, 0.42)',
  },
  '& .MuiInputBase-root.MuiInput-root:after': { // spalva po paspaudziant
    borderColor: 'black',
  },
}));
const AdminPageAddProductTextfield = ({
  value, handleChange, label, name,
}) => (
  <StyledTextField
    sx={{ borderBottom: 'none' }}
    name={name}
    label={label}
    onChange={handleChange}
    value={value}
    fullWidth
    variant="outlined"
    autoComplete="title"
  />
);

export default AdminPageAddProductTextfield;
