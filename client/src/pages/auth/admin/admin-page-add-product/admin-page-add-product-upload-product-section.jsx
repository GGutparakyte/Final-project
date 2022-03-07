import React from 'react';
import {
  Grid,
} from '@mui/material';
import AdminPageAddProductTextfield from './admin-page-add-product-textfield';
import AdminPageAddProductInputField from './admin-page-add-product-inputfield';

const AdminPageAddProductUploadProductSection = ({
  values, handleChange, categories, loading, unselectedCategory, brands, colors,
}) => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={12}>
      <AdminPageAddProductTextfield
        name="name"
        value={values.name}
        handleChange={handleChange}
        label="Product name"
        defaultValue="Product name"
      />
    </Grid>
    <Grid item xs={12} sm={12}>
      {!loading
        ? (
          <AdminPageAddProductInputField
            values={values.category}
            handleChange={handleChange}
            nameOfField="Select Category"
            options={categories}
            unslc={unselectedCategory}
            name="category"
          />
        ) : null}
    </Grid>
    <Grid item xs={12} sm={12}>
      {!loading
        ? (
          <AdminPageAddProductInputField
            values={values.brand}
            handleChange={handleChange}
            nameOfField="Select Brand"
            options={brands}
            unslc={unselectedCategory}
            name="brand"
          />
        ) : null}
    </Grid>
    <Grid item xs={12} sm={12}>
      {!loading
        ? (
          <AdminPageAddProductInputField
            values={values.color}
            handleChange={handleChange}
            nameOfField="Select Color"
            options={colors}
            unslc={unselectedCategory}
            name="color"
          />
        ) : null}
    </Grid>
    <Grid item xs={12} sm={12}>
      <AdminPageAddProductTextfield
        name="price"
        value={values.price}
        handleChange={handleChange}
        label="Product price"
        defaultValue="Product price"
      />
    </Grid>
  </Grid>
);
export default AdminPageAddProductUploadProductSection;
