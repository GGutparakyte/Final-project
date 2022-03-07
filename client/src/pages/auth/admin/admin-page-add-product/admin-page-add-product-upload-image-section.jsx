import React, { useEffect } from 'react';
import {
  Grid,
} from '@mui/material';
import AdminPageAddProductUploadSectionGallery from './admin-page-add-product-upload-section-gallery';
import ProductService from '../../../../services/profile-service';

const AdminPageAddProductImageUploadSection = ({
  setImgData, imgData, updateImgData, handleImageDelete,
}) => {
  useEffect(() => {
    (async () => {
      const fetchedImgData = await ProductService.getUserImages();
      setImgData(fetchedImgData);
    })();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <AdminPageAddProductUploadSectionGallery
          imgData={imgData}
          updateImgData={updateImgData}
          handleImageDelete={handleImageDelete}
        />
      </Grid>
    </Grid>
  );
};

export default AdminPageAddProductImageUploadSection;
