import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import {signIn} from "../auth/authSlice"
import { useSelector ,useDispatch} from "react-redux";
import { unwrapResult } from '@reduxjs/toolkit'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    
    },
  },
}));


export default function SignInForm(props){


    const classes = useStyles()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const dispatch = useDispatch()
    const handleChangeEmail = (event) => {
      setEmail(event.target.value.trim())
    };
  
    const handleChangePassword = (event) => {
      setPassword(event.target.value.trim())
    };  

    const handleSignIn =(event) =>{
      dispatch(signIn({email, password}))
      .then(unwrapResult)
      .then(originalPromiseResult => {console.log(originalPromiseResult)})
      .catch(err => {console.log(err)})
    }
    
    const disabledButton = ( password === ""  || email ==="")
    return (
          <>
            <Grid container direction="column">
              <Typography variant="h4" component="h4" color="primary" align="center" >
                Iniciar sesión
              </Typography>
  
              <form className={classes.root} noValidate autoComplete="off">
                <Grid item container direction="column">
                  <TextField id="email" label="Email" value={email} onChange={handleChangeEmail} />
                  <TextField type="password" id="password" label="Password" value={password} onChange={handleChangePassword} />
                </Grid>    
              </form>    
              <Grid item container  justify="center">
                <Button variant="contained" size="medium" color="primary" className={classes.margin} disabled={disabledButton} onClick={handleSignIn}>
                    Iniciar sesión
                </Button>              
              </Grid>
                 
            </Grid>
          </> )     
} 