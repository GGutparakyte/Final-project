import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

const StyledSelectField = styled(Select)(() => ({

}));

const AdminPageAddProductInputField = ({
  values, handleChange, nameOfField, options, name,
}) => (
  <FormControl fullWidth>
    <InputLabel>{`${nameOfField}`}</InputLabel>
    <StyledSelectField
      variant="outlined"
      name={name}
      value={values}
      label={nameOfField}
      onChange={handleChange}
    >
      {options.map((item) => (
        <MenuItem
          key={item.id}
          value={item.id}
          disabled={item.disabled}
        >
          {item.title}
        </MenuItem>
      ))}

    </StyledSelectField>
  </FormControl>
);

export default AdminPageAddProductInputField;
