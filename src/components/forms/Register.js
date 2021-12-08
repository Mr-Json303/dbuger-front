import * as React from 'react';
import { Avatar, Box, Button, Checkbox, CircularProgress, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography, } from '@mui/material'
import { LockOutlined as LockOutlinedIcon, } from '@mui/icons-material'
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors'
import { useForm } from 'react-hook-form';
import { Link as RLink, useHistory } from 'react-router-dom';
import { useUserDispatch, loginUser, useUserState } from "../../context/UserContext";


import axiosMng from '../config/axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const { register, handleSubmit, formState: { errors, }, watch } = useForm({ reValidateMode: 'onChange' });

  const [submitting, setSubmitting] = React.useState(false);

  var userDispatch = useUserDispatch();
  let history = useHistory();

  const { email: emailState } = useUserState();

  const userLogueado = emailState !== undefined;
  if (userLogueado) {
    history.push("/app");
  }

  function onSubmit(data) {
    setSubmitting(true);
  }

  React.useEffect(() => {
    if (submitting) {
      const data = watch();
      axiosMng.post('/register', {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        password: data.password
      })
        .then(res => {
          console.log('res data: ', res.data.data);
          loginUser(userDispatch, res.data.data.token, res.data.data.email, res.data.data.id, history);

        }).catch(err => {
          console.log('algo salio mal: ', err);
        })
    }
  }, [submitting])


  return (<>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    {...register("firstName", { required: 'This field is required' })}
                    error={errors.firstName ? true : false}
                    helperText={errors.firstName && errors.firstName.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    {...register("lastName", { required: 'This field is required' })}
                    error={errors.lastName ? true : false}
                    helperText={errors.lastName && errors.lastName.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    {...register("email", {
                      required: 'This field is required',
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message: 'This input is invalid'
                      }
                    })}
                    error={errors.email ? true : false}
                    helperText={errors.email && errors.email.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    {...register("password", { required: 'This field is required' })}
                    error={errors.password ? true : false}
                    helperText={errors.password && errors.password.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="repeatPassword"
                    label="Repeat Password"
                    type="password"
                    id="repeatPassword"
                    autoComplete="new-password"
                    {...register("repeatPassword", {
                      required: 'This field is required',
                      validate: (value) => value === watch('password') || 'The passwords don\'t match'
                    })}
                    error={errors.repeatPassword ? true : false}
                    helperText={errors.repeatPassword && errors.repeatPassword.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                loading={false}
                sx={{ mt: 3, mb: 2, position: 'relative', }}
                disabled={submitting}
              >
                Sign Up
                {submitting && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: green[500],
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: '-12px',
                      marginLeft: '-12px',
                    }}
                  />
                )}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link component={RLink} to={'/login'} variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>


  </>);
}