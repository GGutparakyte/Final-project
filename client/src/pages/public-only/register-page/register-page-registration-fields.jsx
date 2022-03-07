import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  TextField,
  Container,
  Box,
  Typography,
  Grid,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { useFormikContext } from 'formik';
import AuthService from '../../../services/auth-service';
import AuthForm from '../../../components/auth-form';
import routes from '../../../routing/routes';

const title = ['Lorem Ipsum'];

const StyledTextField = styled(TextField)(() => ({
  border: 'none',
  borderBottom: '1px solid black',
  '& .MuiInputLabel-root': {
    color: 'black',
  },
  '& label.Mui-focused': {
    color: 'red',
  },
  '& input': {
    color: 'black',
  },
  '& input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 100px grey inset',
    WebkitTextFillColor: 'black',
  },
  '& .MuiInputBase-root.MuiInput-root:before': { // spalva pries paspaudziant
    borderColor: 'black',
  },
  '& .MuiInputBase-root.MuiInput-root:after': { // spalva po paspaudziant
    borderColor: 'black',
  },
}));

const RegistrationFields = () => {
  const [emailCheckLoading, setEmailCheckLoading] = useState(false);
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    values,
    isSubmitting,
    isValid,
    dirty,
    setFieldValue,
    setValues,
  } = useFormikContext();

  const handleEmailChange = (e) => {
    if (values.emailChecked) {
      setValues({
        ...values,
        email: e.target.value,
        emailChecked: false,
        emailAvailable: false,
      }, true);
    } else {
      handleChange(e);
    }
  };

  const handleEmailBlur = (e) => {
    handleBlur(e);
    if (!errors.email) {
      (async () => {
        try {
          setEmailCheckLoading(true);
          const emailAvailable = await AuthService.checkEmail(values.email);
          setFieldValue('emailAvailable', emailAvailable);
        } catch (error) {
          setFieldValue('emailAvailable', false);
        } finally {
          setFieldValue('emailChecked', true, true);
          setEmailCheckLoading(false);
        }
      })();
    }
  };

  let emailEndornment;
  if (emailCheckLoading) {
    emailEndornment = <CircularProgress size={24} />;
  } else if (!values.emailChecked) {
    emailEndornment = null;
  } else if (values.emailAvailable) {
    emailEndornment = <CheckCircleIcon color="success" />;
  } else {
    emailEndornment = <ErrorIcon color="error" />;
  }

  return (
    <AuthForm
      title="Registruotis"
      linkTo={routes.LoginPage}
      linkTitle="Jau turite paskyrą? Prisijunkite"
      onSubmit={handleSubmit}
      isValid={isValid && dirty}
      loading={isSubmitting}
      sx={{ flexGrow: 1 }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          pt: {
            xs: '5%',
            sm: '5%',
            md: '5%',
            lg: '15%',
          },
          mx: 'auto',
        }}
      >
        <Box sx={{
          mb: {
            xs: '30px',
            sm: '30px',
            md: '30px',
            lg: '50px',
          },
        }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontSize: {
                xs: '48px',
                sm: '58px',
                md: '64px',
                lg: '64px',
              },
              textAlign: 'center',
              mb: {
                xs: '1%',
                sm: '1%',
                md: '1%',
                lg: '5%',
              },
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box sx={{
          mb: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <Typography
            component="h1"
            variant="h6"
            sx={{
              mb: '10%',
              fontSize: {
                xs: '24px',
                sm: '24px',
                md: '28px',
                lg: '32px',
              },
            }}
          >
            Welcome to Lorem Ipsum
          </Typography>
          <Container>
            <Box>
              <Grid container spacing={2}>
                <Grid item lg={12} md={12} xs={12}>
                  <StyledTextField
                    sx={{ borderBottom: 'none' }}
                    name="name"
                    label="Name"
                    variant="standard"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    disabled={isSubmitting}
                    fullWidth
                  />
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                  <StyledTextField
                    sx={{ borderBottom: 'none' }}
                    name="email"
                    label="E-mail"
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    disabled={isSubmitting}
                    fullWidth
                    variant="standard"
                    autoComplete="email"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {emailEndornment}
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                  <StyledTextField
                    sx={{ borderBottom: 'none' }}
                    name="password"
                    label="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    disabled={isSubmitting}
                    fullWidth
                    variant="standard"
                    autoComplete="password"
                    type="password"
                  />
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                  <StyledTextField
                    sx={{ borderBottom: 'none' }}
                    name="passwordConfirmation"
                    label="Repeat password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordConfirmation}
                    error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
                    helperText={touched.passwordConfirmation && errors.passwordConfirmation}
                    disabled={isSubmitting}
                    fullWidth
                    variant="standard"
                    autoComplete="repeatpassword"
                    type="password"
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Container>
    </AuthForm>
  );
};

export default RegistrationFields;
