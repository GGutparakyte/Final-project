import React from 'react';
import { Box, Fab } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/material/styles';

const StyledFab = styled(Fab)(() => ({
  position: 'absolute',
  top: 6,
  right: 6,
  height: 16,
  minHeight: 16,
  width: 16,
  borderRadius: '4px',
  backgroundColor: 'red',
  color: 'black',
  '&: hover': {
    color: 'green',
  },
}));

const imageContainerStyle = () => ({
  position: 'relative',
  width: '100%',
  pt: '100%',
  '&.selectable': {
    ':hover': {
      cursor: 'pointer',
      boxShadow: '0 0 0 2px red',
    },
  },
});

const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
};

const UploadSectionGalleryImageGrid = ({
  imgData,
  columns,
  handleSelectImage,
  handleImageDelete,
}) => (
  <Box sx={{
    display: 'grid',
    gap: 1,
    gridTemplateColumns: `repeat(${columns ?? 3}, 1fr)`,
    width: { xs: '100%', sm: 'auto' },
    flexGrow: 1,
  }}
  >
    {
      imgData.map(({ id, src }) => (
        <Box
          key={id}
          sx={imageContainerStyle}
          className={handleSelectImage ? 'selectable' : undefined}
          onClick={handleSelectImage ? () => handleSelectImage(id) : undefined}
        >
          <img
            src={src}
            alt={src}
            style={imageStyle}
          />
          {handleImageDelete && (
            <StyledFab
              size="small"
              onClick={() => handleImageDelete(id)}
            >
              <ClearIcon fontSize="small" />
            </StyledFab>
          )}
        </Box>
      ))
    }
  </Box>
);

export default UploadSectionGalleryImageGrid;
