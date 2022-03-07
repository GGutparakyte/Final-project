import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

const optionsValue = [
  { id: '1', title: 'Lipstic' },
  { id: '2', title: 'Eyeliner' },
  { id: '3', title: 'Mascara' },
  { id: '4', title: 'Foundation' },
];

const StyledAutoComplete = styled(Autocomplete)(() => ({
  width: 130,
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

const CatalogPageFilterCategory = () => (
  <StyledAutoComplete
    options={optionsValue}
    renderInput={(params) => <TextField {...params} label="Category" />}
    size="large"
    getOptionLabel={(options) => options.title}
  />
);

export default CatalogPageFilterCategory;
