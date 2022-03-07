import React from 'react';
import Slider from '@mui/material/Slider';
import {
  Autocomplete, TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-thumb': {
    background: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    ':hover': {
      boxShadow: '0px 0px 0px 4px rgb(69 69 69 / 16%)',
    },
  },
  '& .Mui-active': {
    background: theme.palette.secondary.dark,
  },
  '& .Mui-focusVisible': {
    boxShadow: '0px 0px 0px 6px rgb(69 69 69 / 16%)',
  },
}));
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
const CatalogPageFilterPrice = () => {
  const [value, setValue] = React.useState([1, 10]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <StyledAutoComplete
      renderInput={(params) => <TextField {...params} label="Price" />}
      size="large"
      getOptionLabel={(options) => options.title}
    >
      <StyledSlider
        getAriaLabel={() => 'Temperature range'}
        min={10}
        max={100}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </StyledAutoComplete>
  );
};

export default CatalogPageFilterPrice;
