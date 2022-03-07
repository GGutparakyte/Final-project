import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layouts from './login-page-layout';
import AuthService from '../../../services/auth-service';
import { login } from '../../../store/auth';

const validationSchema = yup.object({
  email: yup.string()
    .required('Is required')
    .email('Is not valid email'),
  password: yup.string()
    .required('Is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const [urlSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const onSubmit = async ({ email, password }) => {
    setError(null);
    try {
      const user = await AuthService.login({
        email,
        password,
      });

      const redirectTo = urlSearchParams.get('redirectTo');
      const loginSuccessAction = login({
        user,
        redirectTo,
      });
      dispatch(loginSuccessAction);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      <Layouts error={error} />
    </Formik>
  );
};

export default Login;
