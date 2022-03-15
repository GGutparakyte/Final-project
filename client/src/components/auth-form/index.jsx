import React from 'react';
import {
  Box,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '../partials/buttons/light-button';

const AuthForm = ({
  children,
  title,
  loading,
  onSubmit,
  isValid,
  isNavigateTo,
}) => (
  <Box component="form" onSubmit={onSubmit} sx={{ m: 'auto' }}>
    {children}
    <Button disabled={!isValid}>
      {
        loading
          ? <CircularProgress color="inherit" />
          : title
      }
    </Button>
    <Box sx={{ textAlign: 'center', textDecoration: 'none' }}>
      {isNavigateTo
        ? (
          <Link
            to="/registration"
            style={{ textDecoration: 'none', color: '#232020' }}
          >
            New to Lorem? Register
          </Link>
        )
        : (
          <Link
            to="/login"
            style={{ textDecoration: 'none', color: '#232020' }}
          >
            Already have an account? Login!
          </Link>
        )}
    </Box>
  </Box>
);

export default AuthForm;
