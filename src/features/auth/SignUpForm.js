import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import {signUp, isSignInRequestPendingSelector} from "./authSlice"
import { useSelector ,useDispatch} from "react-redux";
import { unwrapResult } from '@reduxjs/toolkit'
import {
  Link,
  useHistory,
  useLocation
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    
    },
  },
}));

export default function SignUpForm(props) {
  const classes = useStyles()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const isSignUpRequestPending = useSelector(isSignInRequestPendingSelector)
  const dispatch = useDispatch()
  let history = useHistory();
  let location = useLocation();   
  const handleChangeName = (event) => {
    setName(event.target.value)
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  };  

  const handleSignUp =(event) =>{
    dispatch(signUp({name,email, password}))
    .then(unwrapResult)
    .then(originalPromiseResult => {
      let { from } = location.state || { from: { pathname: "/" } };
      history.replace(from);
    })
    .catch(err => {console.error("mostrar error")})
  }  
  const disabledButton = ( password === ""  || email ==="" || isSignUpRequestPending)
  return (
        <>
          <Grid container direction="column">
            <Typography variant="h4" component="h4" color="primary" align="center" >
              Registrarse
            </Typography>
            <form className={classes.root} noValidate autoComplete="off">
              <Grid item container direction="column">
                <TextField id="name" label="Nombre" value={name} onChange={handleChangeName} />
                <TextField id="email" label="Email" value={email} onChange={handleChangeEmail} />
                <TextField type="password" id="password" label="Password" value={password} onChange={handleChangePassword} />
              </Grid>    
            </form>    
            <Grid item container  justify="center">
              <Button variant="contained" size="medium" color="primary" className={classes.margin} disabled={disabledButton} onClick={handleSignUp}>
                Registrarse
              </Button>              
            </Grid>
            <Grid item container  justify="center">
              <Link to="/auth/signin">Iniciar Sesión</Link>  
            </Grid>                   
          </Grid>
        </>
  );
}
