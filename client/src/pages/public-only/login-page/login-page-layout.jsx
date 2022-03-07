import React from 'react';
import LayoutMd from './login-page-md';
import LayoutLg from './login-page-lg';
import LoginFields from './login-page-login-fields';

const Layouts = ({ error }) => (
  <>
    <LayoutLg sx={{ display: { xs: 'none', lg: 'flex' } }}>
      <LoginFields error={error} />
    </LayoutLg>
    <LayoutMd sx={{ display: { xs: 'flex', lg: 'none' } }}>
      <LoginFields error={error} />
    </LayoutMd>
  </>
);

export default Layouts;
