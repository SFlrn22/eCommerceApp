import {Box, Button, Typography, TextField} from "@mui/material"
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

    const [firstname, updateFirstname] = useState("");
    const [lastname, updatelastName] = useState("");
    const [username, updateUsername] = useState("");
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    const navigate = useNavigate();

    const handleHaveAccClick = () => {
        navigate('/login');
    };

    const validate = () => {
        if((firstname === '' || firstname === null) && (lastname === '' || lastname === null) && (username === '' || username === null) && (email === '' || email === null) && (password === '' || password === null))
        {
            toast.warning("Missing inputs", {
                position: toast.POSITION.TOP_CENTER
            });
            return false;
        } else if(firstname === '' || firstname === null) {
            toast.warning("Missing firstname", {
                position: toast.POSITION.TOP_CENTER
            });
            return false;
        } else if(lastname === '' || lastname === null) {
            toast.warning("Missing lastname", {
                position: toast.POSITION.TOP_CENTER
            });
            return false;
        } else if(username === '' || username === null) {
            toast.warning("Missing username", {
                position: toast.POSITION.TOP_CENTER
            });
            return false;
        } else if(email === '' || email === null) {
            toast.warning("Missing email", {
                position: toast.POSITION.TOP_CENTER
            });
            return false;
        } else if(password === '' || password === null) {
            toast.warning("Missing password", {
                position: toast.POSITION.TOP_CENTER
            });
            return false;
        }
        return true;
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if(validate()){
            const inputObject = {
                "firstname": firstname,
                "lastname": lastname,
                "userName" : username,
                "email" : email,
                "password" : password
            };
            console.log(inputObject);
    }}

    return (
        <div>
            <form onSubmit={handleRegister}>
                <Box 
                  display={"flex"} 
                  flexDirection={"column"} 
                  maxWidth={600}
                  alignItems={"center"}
                  justifyContent={"center"}
                  margin={"auto"}
                  marginTop={5}
                  padding={5}
                  borderRadius={5}
                  boxShadow={"5px 5px 10px #ccc"}
                  sx={{":hover": {
                    boxShadow:"10px 10px 20px #ccc"
                  }}}
                  >
                    <Typography 
                       variant="h5" 
                       padding={5} 
                       textAlign={"center"}
                       >
                        Register
                    </Typography>
                    <TextField 
                       size="small" 
                       margin={"normal"} 
                       type="text" 
                       variant="outlined" 
                       label="Firstname"
                       value={firstname} 
                       onChange={e => updateFirstname(e.target.value)}
                    />
                    <TextField 
                       size="small" 
                       margin={"normal"} 
                       type="text" 
                       variant="outlined" 
                       label="Lastname"
                       value={lastname} 
                       onChange={e => updatelastName(e.target.value)}
                    />
                    <TextField 
                       size="small" 
                       margin={"normal"} 
                       type="text" 
                       variant="outlined" 
                       label="Username"
                       value={username} 
                       onChange={e => updateUsername(e.target.value)}
                    />
                    <TextField 
                       size="small"
                       margin={"normal"} 
                       type="email" 
                       variant="outlined" 
                       label="Email"
                       value={email}
                       onChange={e => updateEmail(e.target.value)}
                    />
                    <TextField 
                       size="small"
                       margin={"normal"} 
                       type="password" 
                       variant="outlined" 
                       label="Password"
                       value={password}
                       onChange={e => updatePassword(e.target.value)}
                    />
                    <Button 
                       variant="contained" 
                       color="primary" 
                       type="submit"
                       sx={{ marginTop: 3, borderRadius: 5}}
                        >
                        Register
                    </Button>
                    <Button 
                       sx={{ marginTop: 3, borderRadius: 5}}
                       onClick={handleHaveAccClick}
                        >
                        Already have an account?
                    </Button>
                </Box>
            </form>
        </div>
    );
}

export default RegisterForm;