import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {
  Box,
  Grid,
  Typography,
  CardContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FormButton from '../../components/partials/buttons/light-button';
import StyledCategoriesContainer from '../../components/partials/styled-categories-container';

const StyledCardContent = styled(CardContent)(() => ({
  height: '30vh',
  width: '23vw',
  position: 'absolute',
  padding: 0,
  zIndex: 99,
  '&:hover .child': {
    display: 'flex',
  },
}));

const CardSection = ({ products, categories }) => (
  <Box sx={{
    mb: '5%',
    m: 'auto',
  }}
  >
    {
      categories?.map((category) => (
        <Box key={category.title}>
          <StyledCategoriesContainer title={category.title} />
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
                .map(({ name, images }) => (
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
                      {/* Hover start */}
                      <StyledCardContent sx={{ display: 'flex' }}>
                        <CardMedia
                          image={images[1].src}
                          sx={{
                            width: '100%',
                            height: '100%',
                            display: 'none',
                            flexDirection: 'column',
                            alignItems: 'center',
                            alignContent: 'center',
                          }}
                          className="child"
                        />
                      </StyledCardContent>
                      {/* Hover end */}
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
                        sx={{
                          display: 'flex',
                          mb: '4%',
                        }}
                      >
                        <Typography sx={{
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}
                        >
                          Add to Cart
                        </Typography>
                      </FormButton>
                    </Card>
                  </Grid>
                ))
            }
          </Grid>
        </Box>
      ))
    }
  </Box>
);
export default CardSection;
