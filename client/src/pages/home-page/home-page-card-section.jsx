import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {
  Box,
  Grid,
  CardContent,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';

const items = [
  {
    link: 'https://images.squarespace-cdn.com/content/v1/61700cb8a1389f3ad5309a37/063d2daa-672d-41ab-84e5-34abafd91d66/tom-medvedich-still-life-cosmetics-covergirl-Vitalist-Go-Glow-Lotion-Group-02.jpg?format=1000w',
    link2: 'https://images.squarespace-cdn.com/content/v1/61700cb8a1389f3ad5309a37/c37342d1-6e60-4ba2-965c-7a572b451251/tom-medvedich-still-life-cosmetics-foundation-03.jpg?format=1000w ',
  },
  {
    link: 'https://images.squarespace-cdn.com/content/v1/61700cb8a1389f3ad5309a37/d1fef9a8-c707-4fea-9efe-0d6daa16a0ab/tom-medvedich-still-life-cosmetics-covergirl-Vitalist-Healthy-Glow-Highlighter-Group-02.jpg?format=1000w',
    link2: 'https://images.squarespace-cdn.com/content/v1/61700cb8a1389f3ad5309a37/f5639f17-6d37-4189-b5d3-7acb2c12affe/tom-medvedich-still-life-cosmetics-maybelline-gigi-jetsetter-smear.jpg?format=1000w',
  },
  {
    link: 'https://images.squarespace-cdn.com/content/v1/61700cb8a1389f3ad5309a37/732d0fc2-64a2-4b25-9148-603214b10d72/tom-medvedich-still-life-cosmetics-pdl-Liquid-Lipstick.jpg?format=1000w',
    link2: 'https://images.squarespace-cdn.com/content/v1/61700cb8a1389f3ad5309a37/1635620980495-UJB52KEOIWYVK43ZKA0R/tom-medvedich-still-life-cosmetics-shiseido-Swatches-Textures-Smears-Minimalist-Whipper-Powder-Blush.jpg?format=1000w',
  },
  {
    link: 'https://images.squarespace-cdn.com/content/v1/61700cb8a1389f3ad5309a37/1043f451-fd83-4957-9be8-4efa97a2f67e/tom-medvedich-still-life-cosmetics-laura-mercier-lipstick-01.jpg?format=1000w',
    link2: 'https://images.squarespace-cdn.com/content/v1/61700cb8a1389f3ad5309a37/f0a35fcb-432e-4755-a8a2-13c86311378e/tom-medvedich-still-life-cosmetics-covergirl-Holographic-Lip-Lipstick-Swatch.jpg?format=1000w',
  },
];

const StyledCardContent = styled(CardContent)(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  padding: 0,
  zIndex: 99,
  '&:hover .child': {
    display: 'flex',
  },
}));

const CardSection = () => (
  <Box sx={{
    m: 'auto',
    mb: '1%',
  }}
  >
    <Box sx={{ display: 'flex' }}>
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
      {items.map(({ link, link2 }) => (
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
            {/* Hover start */}
            <StyledCardContent sx={{ display: 'flex' }}>
              <CardMedia
                image={link2}
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
              variant="standard"
              component="img"
              // height="275px"
              // width="296px"
              image={link}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);
export default CardSection;
