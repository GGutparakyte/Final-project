import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Toolbar,
  Paper,
} from '@mui/material';
import AdminPageCategoryForm from './admin-page-category-form';
import AdminPageCategoryTable from './admin-page-category-table';
import CategoryService from './services/category-service';

// useState- naudojamas duomenų laikymui
// useEffect- padaryti pradinį užkrovimą

const AdminPageCategory = () => {
  const [categories, setCategories] = useState([]);
  const [editedCategoryId, setEditedCategoryId] = useState(null);
  const [titleField, setTitleField] = useState('');
  const [order, setOrder] = useState(1);

  const createCategory = async () => {
    const createdCategory = await CategoryService.createCategory({ title: titleField });
    if (createdCategory === 'string') {
      return;
    }
    setCategories([createdCategory, ...categories]);
    setTitleField('');
  };
  const handeOrderChange = () => setOrder(order * -1);

  const updateCategory = async () => {
    if (editedCategoryId !== null) {
      const updatedCategory = await CategoryService.updateCategory(
        editedCategoryId,
        { title: titleField },
      );
      if (updatedCategory === 'string') {
        return;
      }
      setCategories(categories.map((x) => (x.id === editedCategoryId ? updatedCategory : x)));
      setTitleField('');
      setEditedCategoryId(null);
    }
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter((x) => x.id !== id));
    setEditedCategoryId(null);
    setTitleField('');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editedCategoryId !== null) updateCategory();
    else createCategory();
  };

  const editCategory = (id) => {
    const isNewEditedCategory = id !== editedCategoryId;
    setEditedCategoryId(isNewEditedCategory ? id : null);
    if (isNewEditedCategory) {
      const editedCategory = categories.find((x) => x.id === id);
      setTitleField(editedCategory.title);
    } else {
      setTitleField('');
    }
  };

  useEffect(() => {
    (async () => {
      const fetchedCategories = await CategoryService.getCategories();
      if (fetchedCategories === 'string') { // string reiskia raso klaida
        return;
      }
      setCategories(fetchedCategories); // gražina objektų masyvą
    })();
  }, []);// priklausomybiu masyvas nuo nieko nepriklauso, ir vykdysis tik viena karta

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <Box
        component="main"
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
            p: 2, width: '70vw', m: 'auto',
          }}
          >
            <Typography sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: {
                xs: '3vh',
              },
              m: 'auto',
            }}
            >
              Product Categories
            </Typography>
            <Box sx={{ width: '60vw', mt: 4, mb: 2 }}>
              <AdminPageCategoryForm
                onSubmit={handleSubmit}
                title={titleField}
                setTitle={setTitleField}
                editMode={Boolean(editedCategoryId)}
              />
            </Box>
            <AdminPageCategoryTable
              // jeigu iteruojamo elemento id yra lygus siuo metu redaguojamo elemento id,
              // reiskia jis yra true
              data={categories.map((x) => ({ ...x, edited: editedCategoryId === x.id }))}
              onDelete={deleteCategory}
              onEdit={editCategory}
              onSort={handeOrderChange}
              order={order}
            />
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};
export default AdminPageCategory;
