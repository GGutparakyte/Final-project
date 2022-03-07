import React, { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import UploadSectionGalleryImageGrid from './admin-page-add-product-upload-section-gallery-image-grid';
import AdminPageAddProductUploadProductSection from './admin-page-add-product-upload-product-section';
import ApiService from '../../../../services/api-service';
import ProductService from '../../../../services/product-service';
import UploadNewProductButton from './admin-page-add-product-upload-new-product-button';

const initialValues = {
  name: '',
  price: '',
  color: '',
  category: '',
  brand: '',
  images: [],
};
const unselectedCategory = {
  id: '-1',
  category: 'Select Category',
  disabled: true,
};

const AdminPageAddProduct = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [imgData, setImgData] = useState([]);
  // eslint-disable-next-line no-unused-vars

  // useRef-useRef(initialValue) is a built-in React hook
  // that accepts one argument as the initial value and returns a reference (aka ref).
  // A reference is an object having a special property current.
  const fileUploadRef = useRef(null);

  const onSubmit = async ({
    name, price, color, category, brand, images,
  }) => {
    await ProductService.uploadProduct({
      name, price, color, category, brand, images,
    });
    setImgData([]);
  };

  // virsuje nurodomos Formiko savybes, kurias pasiimame is Formik.
  // setFieldValue- Set the value of a field imperatively. field should match the key of values you
  // wish to update. Useful for creating custom input change handlers.
  // Calling this will trigger validation to run if validateOnChange is set to true
  // (which it is by default).
  // You can also explicitly prevent/skip validation by passing a third argument as false.
  const {
    handleChange,
    values,
    setFieldValue,
    handleSubmit,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues,
    onSubmit,
  });

  useEffect(() => {
    if (isSubmitting) return;
    resetForm(initialValues);
  }, [isSubmitting]);

  const updateImgData = (newImgData) => {
    const imagesIDs = newImgData.map((id) => id.id);
    setFieldValue('images', imagesIDs); // eina per visus failus, ir sudeda paskutinių įkeltų nuotraukų id
    setImgData([...imgData, ...newImgData]);
  };

  const handleUploadFiles = () => {
    fileUploadRef.current.click();
  };

  const handleImageDelete = async (id) => {
    await ProductService.deleteImage(id);
    setImgData(imgData.filter((x) => x.id !== id));
    // is initial values ifiltruos tas nuotraukas kurias busiu istrynusi
    setFieldValue(values.images.filter((img) => img.id !== id));
  };
  const handleImagesLoaded = async () => {
    const input = fileUploadRef.current;
    const data = await ProductService.uploadImages(input.files);
    updateImgData(data);
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      const [fetchedCategories, fetchedBrands, fetchedColors] = await Promise.all([
        ApiService.getCategories(),
        ApiService.getBrands(),
        ApiService.getColors(),
        setLoading(false),
      ]);
      setCategories(fetchedCategories);
      setBrands(fetchedBrands);
      setColors(fetchedColors);
    })();
  }, []);
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: (theme) => (theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900]),
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Paper sx={{
            p: 2, width: '50vw', m: 'auto',
          }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold', mb: 2, m: 'auto',
              }}
            >
              Upload Product
            </Typography>
            <Box sx={{ m: 'auto' }}>
              <AdminPageAddProductUploadProductSection
                values={values}
                handleChange={handleChange}
                categories={categories}
                loading={loading}
                unselectedCategory={unselectedCategory}
                brands={brands}
                colors={colors}
              />
              <Box>
                <Button
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ textTransform: 'none', mt: 2, mb: 2 }}
                  onClick={handleUploadFiles}
                >
                  UPLOAD IMAGES
                </Button>
                <input
                  name="images"
                  type="file"
                  hidden
                  ref={fileUploadRef}
                  accept=".jpg, .jpeg, .png"
                  multiple
                  onChange={handleImagesLoaded}
                />
              </Box>
              <Box sx={{ alignItems: 'flex-start' }}>
                {
                  imgData.length > 0
                    ? (
                      <UploadSectionGalleryImageGrid
                        imgData={imgData}
                        handleImageDelete={handleImageDelete}
                      />
                    ) : null
                }
              </Box>
              <Box sx={{
                display: 'flex', justifyContent: 'center',
              }}
              >
                <UploadNewProductButton type="submit" />
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};
export default AdminPageAddProduct;
