import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import BackgroundImageContainer from '../../containers/background-image-container';
import Header from './header.jpg';

const Hero = () => (
  <Box
    sx={{ height: '45vh' }}
  >
    <BackgroundImageContainer
      sx={{
        backgroundImage: `url(${Header})`,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box sx={{
        position: 'absolute',
        bottom: 10,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        color: 'common.white',
        textAlign: 'right',
      }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '4vh',
              sm: '3.5vh',
            },
            lineHeight: '1',
          }}
        >
          “Lorem ipsum ipsum ipsum ipsum ipusm ipsum ipsum ipsum ipusm.”
        </Typography>
        <Typography
          sx={{
            fontSize: {
              lg: '1.1vw',
            },
          }}
        >
          Quote Author
        </Typography>
      </Box>
    </BackgroundImageContainer>
  </Box>
);
export default Hero;
