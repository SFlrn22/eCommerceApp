import { Box, Button, Typography, TextField } from '@mui/material';
import { useState, React } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const navigate = useNavigate();

  const handleNoAcc = () => {
    navigate('/register');
  };

  const validate = () => {
    if (
      (username === '' || username === null) &&
      (password === '' || password === null)
    ) {
      toast.warning('Missing inputs', {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (username === '' || username === null) {
      toast.warning('Missing username', {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (password === '' || password === null) {
      toast.warning('Missing password');
      return false;
    }
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      const inputObject = {
        userName: username,
        password,
      };
      axios
        .post('https://localhost:7179/api/Login', inputObject)
        .then((res) => {
          if (res.statusText === 'OK') {
            toast.success('Logged in');
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('email', res.data.user.email);
            sessionStorage.setItem('firstname', res.data.user.firstName);
            sessionStorage.setItem('lastname', res.data.user.lastName);
            sessionStorage.setItem('token', res.data.token);
            navigate('/');
          }
        })
        .catch((err) => {
          toast.error(`Login failed, error: ${err.message}`);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={600}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={12}
          padding={5}
          borderRadius={5}
          boxShadow="5px 5px 10px #ccc"
          sx={{
            ':hover': {
              boxShadow: '10px 10px 20px #ccc',
            },
          }}
        >
          <Typography variant="h5" padding={5} textAlign="center">
            Login
          </Typography>
          <TextField
            size="small"
            margin="normal"
            type="text"
            variant="outlined"
            label="Username"
            value={username}
            onChange={(e) => updateUsername(e.target.value)}
          />
          <TextField
            size="small"
            margin="normal"
            type="password"
            variant="outlined"
            label="Password"
            value={password}
            onChange={(e) => updatePassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ marginTop: 3, borderRadius: 5 }}
          >
            Login
          </Button>
          <Button sx={{ marginTop: 3, borderRadius: 5 }} onClick={handleNoAcc}>
            Don&apos;t have an account?
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default LoginForm;
