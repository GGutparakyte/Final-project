import React, { useState, useEffect } from 'react';
import { TablePagination } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LastItemsUploaded from './admin-page-last-items-uploaded';
import ApiService from '../../../services/api-service';
// import AdminPageDeleteProduct from './admin-page-delete-product';
import StyledNavbarMenuLink from '../../../components/partials/navbar/navbar-menu-link-styled';

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [tablePage, setTablePage] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [tableOrder] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const [fetchedCategories, fetchedProducts] = await Promise.all([
      ApiService.getCategories(),
      ApiService.getProductsPaginated(tablePage + 1, rowsPerPage, tableOrder),
    ]);
    setCategories(fetchedCategories);
    setProducts(fetchedProducts.products);
    setProductCount(fetchedProducts.productCount);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [tablePage, rowsPerPage]);
  // kai pasikeicia puslapio skaicius arba irasu skaicius ir
  // tada pertraukiami duomenys

  const handleChangePage = (_, newPage) => {
    setTablePage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        mt: '12vh',
        width: { lg: '90vw', xs: '70vw' },
      }}
    >
      <Toolbar />
      <Grid
        container
        spacing={1}
        sx={{ widht: { lg: '80vw', xs: '30vw' } }}
      >
        {/* Chart */}
        <Grid item xs={12} md={8} lg={7}>
          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '40vh',
              width: '100%',
            }}
          >
            <StyledNavbarMenuLink to="/deleteproduct">
              Update Product
              {/* <AdminPageDeleteProduct /> */}
            </StyledNavbarMenuLink>
          </Paper>
        </Grid>
        {/* Delete product */}
        <Grid item xs={12} md={4} lg={5}>
          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '40vh',
              width: '100%',
            }}
          >
            <StyledNavbarMenuLink to="/deleteproduct">
              Update Product
            </StyledNavbarMenuLink>
          </Paper>
        </Grid>
        {/* Delete product */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            {!loading
              ? <LastItemsUploaded products={products} categories={categories} /> : null}
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              component="div"
              count={productCount}
              rowsPerPage={rowsPerPage}
              page={tablePage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Products per page:"
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Dashboard;
