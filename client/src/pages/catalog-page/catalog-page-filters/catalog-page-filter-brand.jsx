import React from 'react';
import {
  Autocomplete, TextField,
} from '@mui/material';
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
  { id: '1', title: 'CHANEL' },
  { id: '2', title: 'Estee Lauder' },
  { id: '3', title: 'Dior' },
  { id: '4', title: 'L’Oreal' },
  { id: '5', title: 'Lancome' },
  { id: '6', title: 'Clarins' },
];

const CatalogPageFilterBrand = () => (
  <StyledAutoComplete
    options={optionsValue}
    renderInput={(params) => <TextField {...params} label="Brand" />}
    size="large"
    getOptionLabel={(options) => options.title}
  />
);

export default CatalogPageFilterBrand;
