import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import routes from '../../../routing/routes';

const StyledNavbarMenuLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.common.black,
  textDecoration: 'none',
}));
export const mainListItems = (
  <>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <StyledNavbarMenuLink to={routes.AdminPage}>
        <ListItemText primary="Admin Dashboard" />
      </StyledNavbarMenuLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <StyledNavbarMenuLink to={routes.AddProduct}>
        <ListItemText primary="Upload Product" />
      </StyledNavbarMenuLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <StyledNavbarMenuLink to={routes.DeleteProduct}>
        <ListItemText primary="Delete Product" />
      </StyledNavbarMenuLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Update Product" />
    </ListItemButton>
  </>
);

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      Create sub-sections
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <StyledNavbarMenuLink to={routes.AdminPageCategory}>
        <ListItemText primary="Create Category" />
      </StyledNavbarMenuLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Create brand" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Create color" />
    </ListItemButton>
  </>
);
