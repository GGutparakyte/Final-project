import React from 'react';
import LayoutMd from './register-page-md';
import LayoutLg from './register-page-lg';
import LoginFields from './register-page-registration-fields';

const Layouts = () => (
  <>
    <LayoutLg sx={{ display: { xs: 'none', lg: 'flex' } }}>
      <LoginFields />
    </LayoutLg>
    <LayoutMd sx={{ display: { xs: 'flex', lg: 'none' } }}>
      <LoginFields />
    </LayoutMd>
  </>
);

export default Layouts;
