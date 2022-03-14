import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {
  Box,
  Grid,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import styled from '@emotion/styled';
import StyledNavbarMenuLink from '../../components/partials/navbar/navbar-menu-link-styled';
import routes from '../../routing/routes';

const items = [
  {
    title: 'Lipsticks',
    link: 'https://images.squarespace-cdn.com/content/v1/61700cb8a1389f3ad5309a37/063d2daa-672d-41ab-84e5-34abafd91d66/tom-medvedich-still-life-cosmetics-covergirl-Vitalist-Go-Glow-Lotion-Group-02.jpg?format=1000w',
  },
  {
    title: 'Facial Moisturizers',
    link: 'https://images.squarespace-cdn.com/content/v1/61700cb8a1389f3ad5309a37/d1fef9a8-c707-4fea-9efe-0d6daa16a0ab/tom-medvedich-still-life-cosmetics-covergirl-Vitalist-Healthy-Glow-Highlighter-Group-02.jpg?format=1000w',
  },
  {
    title: 'Eye Shadows',
    link: 'https://images.squarespace-cdn.com/content/v1/61700cb8a1389f3ad5309a37/732d0fc2-64a2-4b25-9148-603214b10d72/tom-medvedich-still-life-cosmetics-pdl-Liquid-Lipstick.jpg?format=1000w',
  },
  {
    title: 'Foundation',
    link: 'https://images.squarespace-cdn.com/content/v1/61700cb8a1389f3ad5309a37/1043f451-fd83-4957-9be8-4efa97a2f67e/tom-medvedich-still-life-cosmetics-laura-mercier-lipstick-01.jpg?format=1000w',
  },
];

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  width: '90%',
  height: '50%',
  position: 'absolute',
  padding: 0,
  zIndex: 99,
  backgroundColor: theme.palette.primary.light,
}));

const CardSection = () => (
  <Box sx={{
    m: 'auto',
    mb: '1%',
  }}
  >
    <Box sx={{ display: 'flex', my: '2%' }}>
      <Box sx={{
        width: { xs: '30%', md: '40%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
      >
        <Box sx={{ height: '1px', width: '100%', backgroundColor: '#cccccc' }} />
      </Box>
      <Box sx={{ width: { xs: '40%', md: '20%' }, textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: {
              xs: '3vh',
              lg: '3.6vh',
            },
          }}
        >
          Categories
        </Typography>
      </Box>
      <Box sx={{
        width: { xs: '30%', md: '40%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
      >
        <Box sx={{ height: '1px', width: '100%', backgroundColor: '#cccccc' }} />
      </Box>
    </Box>
    <Grid container spacing={2}>
      {items.map(({ link, title }) => (
        <Grid item xs={12} sm={6} lg={3} gap={2} key={link}>
          <Card sx={{
            width: '100%',
            height: { xs: '50vw', sm: '25vw', md: '12vw' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0',
            borderRadius: '0',
            position: 'relative',
          }}
          >
            {/* Balto fono start */}
            <StyledCardContent
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <Button sx={{ textTransform: 'capitalize' }}>
                <StyledNavbarMenuLink to={routes.CatalogPage}>
                  <Typography sx={{ fontSize: '1.25rem' }}>
                    {title}
                  </Typography>
                </StyledNavbarMenuLink>
              </Button>
              <CardMedia
                component="div"
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
            {/* Balto fono end */}
            <CardMedia
              variant="standard"
              component="img"
              image={link}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);
export default CardSection;
