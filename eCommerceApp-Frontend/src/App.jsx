import React from 'react';
import './App.css';
import {
  useNavigate,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { toast, ToastContainer } from 'react-toastify';
import { Box, Typography, AppBar, Button } from '@mui/material';
import Home from './Routes/Home/Home';
import Content from './Routes/Content/Content';
import Login from './Routes/Login/Login';
import Register from './Routes/Register/Register';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-center" />
      <RouterProvider router={router} />
    </div>
  );
}

function Root() {
  const navigate = useNavigate();
  const isLogged = () => {
    if (sessionStorage.getItem('token')) return true;
    return false;
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('firstname');
    sessionStorage.removeItem('lastname');
    toast.success('Logged out');
    navigate('/');
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#020F9E',
      },
      secondary: {
        main: '#EE035F',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ height: 45 }}>
        <Box
          maxWidth="xl"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" gap={1} ml={4} mt={0.8}>
            <Typography mt={0.15} mr={2}>
              eComm
            </Typography>
            <Link className="link" to="/">
              {' '}
              Home{' '}
            </Link>
            <Link className="link" to="/content">
              {' '}
              Content{' '}
            </Link>
          </Box>
          <Box display="flex" gap={1} mr={4} mt={0.7}>
            {isLogged() ? (
              <Button sx={{ color: 'black' }} onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Link className="link" to="/login">
                  {' '}
                  Login{' '}
                </Link>
                <Link className="link" to="/register">
                  {' '}
                  Register{' '}
                </Link>
              </>
            )}
          </Box>
        </Box>
      </AppBar>
      <div>
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
