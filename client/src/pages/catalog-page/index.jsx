import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import CardSection from './catalog-page-card-section';
import CatalogPageFilters from './catalog-page-filters/catalog-page-filters';
import ApiService from '../../services/api-service';
import CatalogPageSorting from './catalog-page-sorting';
import Hero from '../../components/partials/hero';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const [fetchedCategories, fetchedProducts] = await Promise.all([
        ApiService.getCategories(),
        ApiService.getProducts({}),
      ]);
      setCategories(fetchedCategories);
      setProducts(fetchedProducts);
    })();
    setLoading(false);
  }, []);

  return (
    <>
      <Hero />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        <CatalogPageFilters />
        <CatalogPageSorting />
      </Box>
      {!loading ? <CardSection products={products} categories={categories} /> : null}
    </>
  );
};

export default CatalogPage;
