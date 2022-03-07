import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

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
const optionsValue = [
  { id: '1', title: 'Red' },
  { id: '2', title: 'Blue' },
  { id: '3', title: 'Pink' },
  { id: '4', title: 'Black' },
];

const CatalogPageFilterColor = () => (
  <StyledAutoComplete
    options={optionsValue}
    renderInput={(params) => <TextField {...params} label="Color" />}
    size="large"
    getOptionLabel={(options) => options.title}
  />
);

export default CatalogPageFilterColor;
