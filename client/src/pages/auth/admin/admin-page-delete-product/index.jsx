import React, { useState, useEffect } from 'react';
import {
  Box,
} from '@mui/material';
import AdminPageDeleteProductCardSection from './admin-page-delete-product-card-section';
import ApiService from '../../../../services/api-service';
import CatalogPageFilters from '../../../catalog-page/catalog-page-filters/catalog-page-filters';

const AdminPageDeleteProduct = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const [fetchedCategories, fetchedProducts] = await Promise.all([
        ApiService.getCategories(),
        ApiService.getProducts(),
      ]);
      setCategories(fetchedCategories);
      setProducts(fetchedProducts);
    })();
    setLoading(false);
  }, []);

  const deleteProduct = (id) => { // ištrina tiesiog iš state
    setProducts(products.filter((x) => x.id !== id));
  };

  return (
    <Box sx={{
      m: 'auto',
      width: '100%',
    }}
    >
      <Box sx={{ mt: 10, mb: 2 }}>
        <CatalogPageFilters />
      </Box>
      <AdminPageDeleteProductCardSection
        products={products}
        categories={categories}
        loading={loading}
        onDelete={deleteProduct}
      />

    </Box>
  );
};
export default AdminPageDeleteProduct;
