import PageLayout from '../components/layouts/page-layout';
import EmptyLayout from '../components/layouts/empty-layout';
import AdminLayout from '../components/layouts/admin-layout';

// no-auth
import HomePage from '../pages/home-page';
import CatalogPage from '../pages/catalog-page';
import OrdersPage from '../pages/orders-page/index';

// public-only
import LoginPage from '../pages/public-only/login-page';
import RegisterPage from '../pages/public-only/register-page';
// admin
import AdminPage from '../pages/auth/admin/index';
import AddProduct from '../pages/auth/admin/admin-page-add-product/index';
import DeleteProduct from '../pages/auth/admin/admin-page-delete-product/index';
import AdminPageCategory from '../pages/auth/admin/admin-page-category';
// user
import OrdersPageCompleteOrder from '../pages/auth/user/orders-page-complete-order';

export default {
  PageLayout,
  EmptyLayout,
  AdminLayout,
  OrdersPageCompleteOrder,
  CatalogPage,
  HomePage,
  LoginPage,
  RegisterPage,
  OrdersPage,
  AdminPage,
  AddProduct,
  DeleteProduct,
  AdminPageCategory,
};
