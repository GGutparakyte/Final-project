import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableContainer, Typography } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const tableCellName = [
  { title: 'Product ID' },
  { title: 'Title' },
  { title: 'Category' },
  { title: 'Brand' },
  { title: 'Color' },
  { title: 'Price' },
  { title: 'Created At' },
  { title: 'Updated At' },
  { title: 'Action' },
];

const LastItemsUploaded = ({ products }) => (
  <>
    <Typography sx={{ fontWeight: 'bold' }}>Last Items Uploaded</Typography>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {tableCellName.map((x) => (
              <TableCell key={x.title}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '1.5vh' }}>{x.title}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(({
            id, name, category, brand, color, price, createdAt, updatedAt,
          }) => (
            <TableRow key={brand.id}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{category.title}</TableCell>
              <TableCell>{brand.title}</TableCell>
              <TableCell>{color.title}</TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>{createdAt}</TableCell>
              <TableCell>{updatedAt}</TableCell>
              <TableCell><DeleteOutlineOutlinedIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
);
export default LastItemsUploaded;
