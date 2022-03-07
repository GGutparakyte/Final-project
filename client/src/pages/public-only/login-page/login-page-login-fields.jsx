import React from 'react';
import { styled } from '@mui/material/styles';
import {
  TextField,
  Grid,
  Box,
  Container,
  Typography,
  Alert,
} from '@mui/material';
import { useFormikContext } from 'formik';
import routes from '../../../routing/routes';
import AuthForm from '../../../components/auth-form';

const title = ['Lorem Ipsum'];

const StyledTextField = styled(TextField)(() => ({
  border: 'none',
  borderBottom: '1px solid black',
  '& label.Mui-focused': {
    color: 'red',
  },
  '& input': {
    color: 'black',
  },
  '& .MuiInputBase-root.MuiInput-root:before': { // spalva pries paspaudziant
    borderColor: 'black',
  },
  '& .MuiInputBase-root.MuiInput-root:after': { // spalva po paspaudziant
    borderColor: 'black',
  },
}));

const LoginFields = ({ error }) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    isValid,
  } = useFormikContext();

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        pt: {
          xs: '5%',
          sm: '5%',
          md: '5%',
          lg: '5%',
        },
        m: 'auto',
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
            mb: {
              xs: '4%',
              sm: '6%',
              md: '8%',
              lg: '8%',
            },
            fontSize: {
              xs: '24px',
              sm: '24px',
              md: '28px',
              lg: '32px',
            },
          }}
        >
          {`Welcome to ${title}`}
        </Typography>
        <Container>
          <AuthForm
            component="form"
            title="Prisijungti"
            linkTo={routes.RegisterPage}
            linkTitle="Neturite paskyros? Registruokitės"
            loading={isSubmitting}
            isValid={isValid && dirty}
            onSubmit={handleSubmit}
            sx={{ flexGrow: 1 }}
            isNavigateTo
          >
            <Box>
              <Alert severity="error" sx={{ visibility: error ? 'visible' : 'hidden' }}>
                {error}
              </Alert>
              <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <StyledTextField
                    sx={{ borderBottom: 'none' }}
                    name="email"
                    variant="standard"
                    label="E-mail"
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    fullWidth
                    autoComplete="email"
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <StyledTextField
                    sx={{ borderBottom: 'none' }}
                    name="password"
                    variant="standard"
                    label="Password"
                    type="password"
                    value={values.password}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    autoComplete="current-password"
                  />

                  <Typography
                    sx={{
                      fontSize: '16px',
                      textAlign: 'right',
                      fontWeight: 400,
                      color: '#232020',
                      mt: '4%',
                      mr: '10px',
                    }}
                  >
                    Forgot Password ?
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </AuthForm>
        </Container>
      </Box>
    </Container>

  );
};
export default LoginFields;
