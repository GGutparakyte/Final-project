import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import FormButton from '../../../../components/partials/buttons/light-button';
import ProductService from '../../../../services/product-service';
import StyledCategoriesContainer from '../../../../components/partials/styled-categories-container';

const AdminPageDeleteProductCardSection = ({ products, categories, onDelete }) => {
  const handleProductDelete = async (id) => { // trina iš serverio
    // iš FE iššsiunčiama užklausa į serverį (ProductService => Product Controller).
    const deleteProduct = await ProductService.deleteProduct(id);
    if (deleteProduct === 'string') {
      return;
    }
    onDelete(id);
  };
  return (
    <Box sx={{
      mb: '5%',
      m: 'auto',
    }}
    >
      {
        categories?.map((category) => (
          <>
            <StyledCategoriesContainer
              title={category.title}
              key={category}
            />
            <Grid
              container
              gap={1}
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              {
                products?.filter((product) => product.category?.title === category.title)
                  .map(({ name, images, id }) => (
                    <Grid
                      item
                      xs={5}
                      sm={5}
                      md={3}
                      lg={2.8}
                      key={name}
                    >
                      <Card
                        key={name}
                        variant="standard"
                        sx={{
                          backgroundColor: '#fafafa',
                          width: '100%',
                          mb: 4,
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={images[0].src}
                          sx={{ height: '30vh' }}
                        />
                        <Typography
                          sx={{
                            display: 'flex',
                            textAlign: 'center',
                            fontSize: '16px',
                            height: 50,
                            mt: '5%',
                            color: 'black',
                            justifyContent: 'center',
                          }}
                        >
                          {name}
                        </Typography>
                        <FormButton
                          onClick={() => handleProductDelete(id)}
                          sx={{ display: 'flex', m: 'auto', mb: '10%' }}
                        >
                          <Typography sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                          }}
                          >
                            Delete Product
                          </Typography>
                        </FormButton>
                      </Card>
                    </Grid>
                  ))
              }
            </Grid>
          </>
        ))
      }
    </Box>
  );
};
export default AdminPageDeleteProductCardSection;
