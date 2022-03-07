import React, { useRef } from 'react';
import { Box, Button } from '@mui/material';
import UploadSectionGalleryImageGrid from './admin-page-add-product-upload-section-gallery-image-grid';
import ProductService from '../../../../services/product-service';

const AdminPageAddProductUploadSectionGallery = ({
  imgData, updateImgData, handleImageDelete, name,
}) => {
  const fileUploadRef = useRef(null);

  const handleUploadFiles = () => {
    fileUploadRef.current.click();
  };

  const handleImagesLoaded = async () => {
    const input = fileUploadRef.current;
    const data = await ProductService.uploadImages(input.files);
    updateImgData(data);
  };

  return (
    <Box sx={{ height: '10vh', pt: 2 }}>
      <Box>
        <input
          type="file"
          hidden
          ref={fileUploadRef}
          accept=".jpg, .jpeg, .png"
          multiple
          name={name}
          onChange={handleImagesLoaded}
        />
      </Box>
      <Box sx={{ minWidth: '320px', width: '35vw' }}>
        <UploadSectionGalleryImageGrid
          imgData={imgData}
          handleImageDelete={handleImageDelete}
        />
      </Box>
      <Box>
        <Button
          variant="outlined"
          onClick={handleUploadFiles}
        >
          Upload Image
        </Button>
      </Box>
    </Box>
  );
};

export default AdminPageAddProductUploadSectionGallery;
