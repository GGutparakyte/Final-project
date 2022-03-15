import React from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Autocomplete,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const optionsValue = [
  { title: 'A - Z', value: 'a-z' },
  { title: 'Z - A', value: 'z-a' },
  { title: 'Price ASC', value: 'price-asc' },
  { title: 'Price DESC', value: 'price-desc' },
];
const StyledAutoComplete = styled(Autocomplete)(() => ({
  width: 120,
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

const CatalogPageSorting = () => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
  }}
  >
    <StyledAutoComplete
      options={optionsValue}
      renderInput={(params) => <TextField {...params} label="Sorting" />}
      size="large"
      getOptionLabel={(options) => options.title}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <TextField
        select
        value={optionsValue[0].value}
        size="small"
      >
        {optionsValue.map((option) => (
          <MenuItem key={option.title} value={option.value}>{option.title}</MenuItem>
        ))}
      </TextField>
    </StyledAutoComplete>
  </Box>
);

export default CatalogPageSorting;
