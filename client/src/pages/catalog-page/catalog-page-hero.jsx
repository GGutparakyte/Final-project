import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import BackgroundImageContainer from '../../components/containers/background-image-container';
import Header from './header.jpg';

const Hero = () => (
  <Box sx={{
    height: '50vh',
    m: 'auto',
    mb: 1,
  }}
  >
    <BackgroundImageContainer
      sx={{
        backgroundImage: `url(${Header})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          width: '100%',
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: ' space-between;',
          color: 'common.white',
          padding: '10px',
          textAlign: 'left',
          width: '100%',
          px: '3%',
        }}
        >
          <Box>
            <Typography
              variant="h6"
              component="h1"
              sx={{
                textTransform: 'uppercase',
                fontSize: {
                  xs: '6vw',
                  sm: '6vw',
                  md: '5vw',
                  lg: '8vw',
                },
                p: '0',
                m: '0',
              }}
            >
              LOREM
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              component="h1"
              sx={{
                textTransform: 'uppercase',
                fontSize: {
                  xs: '6vw',
                  sm: '6vw',
                  md: '5vw',
                  lg: '8vw',
                },
                p: '0',
                m: '0',
              }}
            >
              IPSUM
            </Typography>
          </Box>
        </Box>
      </Box>
    </BackgroundImageContainer>
  </Box>
);
export default Hero;
