import {
  PUBLIC_ONLY,
  USER,
  ADMIN,
} from './auth-types';

const routeStructure = [
  {
    path: '/',
    pageName: 'PageLayout',
    childRoutes: [
      { index: true, pageName: 'HomePage' },
      { path: 'catalog', pageName: 'CatalogPage' },
      { path: 'orders', pageName: 'OrdersPage' },
    ],
  },
  {
    path: '/',
    pageName: 'AdminLayout',
    auth: ADMIN,
    childRoutes: [
      { path: 'admin', pageName: 'AdminPage', auth: ADMIN },
      { path: 'addproduct', pageName: 'AddProduct', auth: ADMIN },
      { path: 'deleteproduct', pageName: 'DeleteProduct', auth: ADMIN },
      { path: 'admingpagecategory', pageName: 'AdminPageCategory', auth: ADMIN },
    ],
  },
  {
    path: '/',
    pageName: 'EmptyLayout',
    childRoutes: [
      { path: 'login', pageName: 'LoginPage', auth: PUBLIC_ONLY },
      { path: 'registration', pageName: 'RegisterPage', auth: PUBLIC_ONLY },
      { path: 'orders', pageName: 'OrdersPage', auth: USER },
      { path: 'completion', pageName: 'OrdersPageCompleteOrder' },
    ],
  },
];

export default routeStructure;
