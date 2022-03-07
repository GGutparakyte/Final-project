import React from 'react';
import {
  FormControl,
  TextField,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';

const StyledAutoComplete = styled(Autocomplete)(() => ({
  width: 80,
  padding: 0,

  '& .MuiAutocomplete-inputRoot': {
    border: 'none',
    color: ' black',
    p: 0,
    '& fieldset': {
      border: 'none',
      borderRadius: '0',
    },
  },

}));

const OrdersPageMyOrdersQuantitySelect = ({
  title, options, onChange, value, name, onInputChange, inputValue,
}) => (
  <Box>
    <FormControl sx={{ minWidth: '5px' }} variant="standard">
      <StyledAutoComplete
        defaultValue="1"
        disablePortal
        name={name}
        label={title}
        options={options}
        value={value}
        onInputChange={onInputChange}
        inputValue={inputValue}
        onChange={(event, option) => onChange(event, option, name)}
        renderInput={(params) => <TextField {...params} label={title} />} // teksto rašymui
      />
    </FormControl>
  </Box>
);

export default OrdersPageMyOrdersQuantitySelect;
