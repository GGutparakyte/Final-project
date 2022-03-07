import React from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  tableCellClasses,
  Button,
  styled,
  alpha,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CachedIcon from '@mui/icons-material/Cached';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import CategoryService from './services/category-service';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const tableHeadTitle = [
  { name: 'Id' },
  { name: 'Name' },
  { name: 'Created: ' },
  { name: 'Updated: ' },
  { name: 'Actions: ' },
];
const AdminPageCategoryTable = ({
  data, onDelete, onEdit, onSort, order,
}) => {
  const handleCategoryDelete = async (id) => {
    const deleteCategory = await CategoryService.deleteCategory(id);

    if (deleteCategory === 'string') {
      return;
    }
    // pranesame teviniam elementui(forma) (jeigu viskas gerai), perduodame istrinto elemento id
    onDelete(id);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {
              tableHeadTitle.map(({ name }) => (
                <StyledTableCell align="left">
                  {name}
                  <Button
                    variant="standard"
                    onClick={() => onSort()}
                  >
                    {order === 1 ? <ArrowDownwardOutlinedIcon /> : <ArrowUpwardOutlinedIcon />}
                  </Button>
                </StyledTableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((category) => (
            <TableRow
              key={category.id}
              sx={(theme) => ({
                bgcolor: category.edited ? alpha(theme.palette.warning.main, 0.3) : undefined,
                '&:last-child td, &:last-child th': { border: 0 },
              })}
            >
              <StyledTableCell component="th" scope="row">
                {category.id}
              </StyledTableCell>
              <StyledTableCell>{category.title}</StyledTableCell>
              <StyledTableCell>{category.createdAt}</StyledTableCell>
              <StyledTableCell>{category.updatedAt}</StyledTableCell>
              <StyledTableCell sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  size="small"
                  color={category.edited ? 'warning' : 'secondary'}
                  onClick={() => onEdit(category.id)}
                >
                  {category.edited ? <DoNotDisturbAltIcon /> : <CachedIcon />}
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleCategoryDelete(category.id)}
                >
                  <DeleteForeverIcon />
                </Button>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default AdminPageCategoryTable;
