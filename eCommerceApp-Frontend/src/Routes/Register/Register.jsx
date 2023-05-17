import React from 'react';
import { Grid, CssBaseline, Typography, Box } from '@mui/material';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import RegisterForm from '../../Components/RegisterForm';
import loginbg from '../../assets/login-bg.jpg';
import bungee from '../../Fonts/Bungee-Regular.ttf';

function Register() {
  const globalStyles = `
        @font-face {
            font-family: 'Bungee Regular';
            src: url(${bungee}) format('truetype');
            font-weight: normal;
            font-style: normal;
        }
    `;

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={5}
        md={7}
        sx={{
          backgroundImage: `url(${loginbg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={700}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={35}
          sx={{ backgroundColor: 'rgba(3, 12, 46, 0.3)' }}
        >
          <style>{globalStyles}</style>
          <Box display="flex" alignItems="center" padding={2}>
            <DeveloperBoardIcon
              sx={{ color: 'white', opacity: 0.7, fontSize: 100 }}
            />
            <Typography
              sx={{ opacity: 0.8 }}
              textAlign="center"
              fontFamily="Bungee Regular"
              fontSize={25}
              color="white"
            >
              Your journey in the world of tech is just about to begin
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={7} md={5} elevation={6}>
        <RegisterForm />
      </Grid>
    </Grid>
  );
}

export default Register;
