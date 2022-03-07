import React from 'react';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

const Copyright = (props) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="https://google.com/">
      Your Website
    </Link>
    {' '}
    {new Date().getFullYear()}
    .
  </Typography>
);
const AdminPageCopyright = () => (
  <Copyright sx={{ pt: 4 }} />
);

export default AdminPageCopyright;
