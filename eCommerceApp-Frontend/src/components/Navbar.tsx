import { AppBar, Stack, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { StyledToolbar, StyledLink } from '../styles/StyledNav';

function Navbar() {
  const navigate = useNavigate();

  const isLogged = (): boolean => {
    if (sessionStorage.getItem('token')) return true;
    return false;
  };

  const handleLogout = (): void => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('firstname');
    sessionStorage.removeItem('lastname');
    navigate('/');
    toast.success('Logged out');
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h5" sx={{ userSelect: 'none' }}>
            eCommApp
          </Typography>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          {isLogged() ? (
            <StyledLink to="/" onClick={handleLogout}>
              Logout
            </StyledLink>
          ) : (
            <>
              <StyledLink to="/login">Login</StyledLink>
              <StyledLink to="/register">Register</StyledLink>
            </>
          )}
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
}
export default Navbar;
