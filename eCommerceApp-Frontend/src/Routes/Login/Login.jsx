import React from 'react';
import { Grid, CssBaseline } from '@mui/material';
import LoginForm from '../../Components/LoginForm';

function Login() {
  return (
    <Grid container component="main" justifyContent="center">
      <CssBaseline />
      <Grid item xs={6} sm={6} md={12}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}

export default Login;
