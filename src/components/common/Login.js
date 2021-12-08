// *React imports
import React from 'react';
import { styled } from '@mui/material/styles';
import {
  useState
} from 'react';

import { useHistory, Link as RLink } from "react-router-dom";

// *MUI Imports
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// *Local imports
// import logoPath from '../../assets/dbuger-logo.svg';
import AxiosManager from '../config/axios';
import { useUserDispatch, loginUser, useUserState } from "../../context/UserContext";

const PREFIX = 'Login';

const classes = {
  paper: `${PREFIX}-paper`,
  avatar: `${PREFIX}-avatar`,
  form: `${PREFIX}-form`,
  submit: `${PREFIX}-submit`,
  margin: `${PREFIX}-margin`,
  textField: `${PREFIX}-textField`,
  root: `${PREFIX}-root`,
  withoutLabel: `${PREFIX}-withoutLabel`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.paper}`]: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  [`& .${classes.avatar}`]: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  [`& .${classes.form}`]: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  [`& .${classes.submit}`]: {
    margin: theme.spacing(3, 0, 2),
  },

  [`& .${classes.margin}`]: {
    margin: theme.spacing(1),
  },

  [`& .${classes.textField}`]: {
    width: '100%',
  },

  [`& .${classes.root}`]: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  [`& .${classes.withoutLabel}`]: {
    marginTop: theme.spacing(3),
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function Login() {


  const loginInitialState = {
    email: '',
    password: ''
  }

  const [loginData, setloginData] = useState(loginInitialState)

  var userDispatch = useUserDispatch();
  let history = useHistory();

  const { email: emailState } = useUserState();

  const userLogueado = emailState !== undefined;
  if (userLogueado) {
    history.push("/app");
  }

  function SaveInputValue(e) {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  }

  async function handleLogin(e) {
    e.preventDefault();

    const data = {
      email: loginData.email,
      password: loginData.password,
    };

    console.log("Datos para enviar al login :", data);

    await AxiosManager.post("/login", data).then((res) => {
      console.log("llega de la api despues de login", res.data.data);

      loginUser(userDispatch, res.data.data.token, res.data.data.email, res.data.data.id, history);

    });

  }


  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <Root>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => {
              handleLogin(e);
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={loginData.email}
              onChange={(e) => {
                SaveInputValue(e);
              }}

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="large">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }}
              type={showPassword ? 'text' : 'password'}
              value={loginData.password}
              onChange={(e) => {
                SaveInputValue(e);
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RLink} to='/register' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Root>
  );

}