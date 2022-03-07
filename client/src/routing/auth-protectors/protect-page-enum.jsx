import React from 'react';
import {
  PUBLIC_ONLY,
  ADMIN,
} from '../auth-types';

import PublicOnlyProtector from './public-only-protector';
import AdminProtector from './admin-protector';

const protectPageEnum = {
  [PUBLIC_ONLY]: (Page) => <PublicOnlyProtector><Page /></PublicOnlyProtector>,
  [ADMIN]: (Page) => <AdminProtector><Page /></AdminProtector>,
};

export default protectPageEnum;
