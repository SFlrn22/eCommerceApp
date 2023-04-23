import './Login.css';
import loginbg from '../../assets/login-bg.jpg';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {

    const [username, updateUsername] = useState("");
    const [password, updatePassword] = useState("");
    
    const validate = () => {
        if ((username === '' || username === null) && (password === '' || password === null)){
            toast.warning("Missing inputs", {
                position: toast.POSITION.TOP_CENTER
            });
            return false
        } else if (username === '' || username === null) {
            toast.warning("Missing username", {
                position: toast.POSITION.TOP_CENTER
            });
            return false
        } else if (password === '' || password === null) {
            toast.warning("Missing password");
            return false
        }
        return true
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if(validate()){
            const inputObject = {
                "userName" : username,
                "password" : password
            };
            axios.post('https://localhost:7179/api/Login', inputObject)
            .then((res) => {
                if(res.statusText == "OK") {
                    toast.success("Logged in")
                    sessionStorage.setItem('username', username);
                    sessionStorage.setItem('email', res['data'].email);
                    sessionStorage.setItem('firstname', res['data'].firstName);
                    sessionStorage.setItem('lastname', res['data'].lastName);
                } else {
                    toast.error("Wrong Credentials");
                }
            })
            .catch((err) => {
                toast.error(`Login failed, error: ${err.message}`)
            })
        }  
    }

    return (
        <div className="login-container">
            <div className='login-left-side'>
                <img src={loginbg} alt="photo" className='log-bg' />
            </div>
            <div className='login-right-side'>
                <form onSubmit={handleLogin} className='login-form'>
                    <div className='form-card'>
                        <div className='card-header'>
                            <h2>Login</h2>
                        </div>
                        <div className='card-body'>
                            <div className='form-group'>
                                <label>Username</label>
                                <input value={username} onChange={e => updateUsername(e.target.value)} className='form-field'></input>
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input type='password' value={password} onChange={e => updatePassword(e.target.value)} className='form-field'></input>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <button type='submit' className='submit-btn'>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;