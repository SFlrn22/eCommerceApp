import LoginForm from '../../Components/LoginForm';
import {Grid, CssBaseline, Typography, Box} from "@mui/material"
const Login = () => {
    return(
        <Grid container component='main' justifyContent={'center'}>
            <CssBaseline />
            <Grid item xs={6} sm={6} md={12}>
                <LoginForm/>
            </Grid>
        </Grid>
    )
}

export default Login;