import React from 'react';
import {
  TextField,
  Paper,
  Button,
} from '@mui/material';

const AdminPageCategoryForm = ({
  onSubmit, title, setTitle, editMode,
}) => (
  <Paper component="form" sx={{ display: 'flex' }} onSubmit={onSubmit}>
    <TextField
      sx={{ flexGrow: 1 }}
      value={title} // value yra tokia kokia yra state kintamajame
      // o kiekviena karta kai keisis, mes vykdysime funkciją ir nustatysim
      // į tą kintąmąjį į tai ką gauname per elemento.target.value
      onChange={(e) => setTitle(e.target.value)}
      color={editMode ? 'warning' : 'secondary'}
      label={editMode ? 'Update' : 'Create'}

    />
    <Button
      variant="contained"
      color={editMode ? 'warning' : 'secondary'}
      type="submit"
    >
      {editMode ? 'Update' : 'Create'}
    </Button>
  </Paper>
);
export default AdminPageCategoryForm;
