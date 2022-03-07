import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import AuthService from '../../../services/auth-service';
import { login } from '../../../store/auth';
import Layouts from './register-page-layout';

const initialValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  subscribed: true,
  emailChecked: false,
  emailAvailable: false,
};

const validationSchema = yup.object({
  name: yup.string()
    .required('Is required')
    .min(2, 'At least 2 letters')
    .max(32, 'Most 32 letters'),
  email: yup.string()
    .required('Is required')
    .email('Is not valid email')
    .test('email-validator', 'Email unavailable', (_, context) => {
      const { emailChecked, emailAvailable } = context.parent;
      if (!emailChecked) return true;

      return emailAvailable;
    }),
  password: yup.string()
    .required('Is required')
    .min(8, 'At least 8 symbols')
    .max(32, 'Most 32 symbols')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Atleast one capital letter')
    .matches(/^.*\d+.*$/, 'Atleast one number'),
  passwordConfirmation: yup.string()
    .required('Is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  emailChecked: yup.boolean().oneOf([true]),
  emailAvailable: yup.boolean().oneOf([true]),
});

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = async ({
    email, name, password, passwordConfirmation,
  }) => {
    const user = await AuthService.register({
      email,
      name,
      password,
      repeatPassword: passwordConfirmation,
    });
    dispatch(login({ user }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      <Layouts />
    </Formik>
  );
};

export default Login;
