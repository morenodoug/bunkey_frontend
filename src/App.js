import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Grid from "@material-ui/core/Grid"
import SignUpForm from "./features/signup/SignUpForm" 
import SignInForm from "./features/signin/SignInForm" 
function App() {
  return (
    <Grid container direction="column" >
      <Grid item >
        <h1>asdasd</h1>
      </Grid>
      <Grid item container justify="center" >
        <Grid item md={4}  >
          <SignUpForm/>
        </Grid>             
      </Grid>

      <Grid item container justify="center" >
        <Grid item md={4}  >
          <SignInForm/>
        </Grid>             
      </Grid>      
    </Grid>
  );
}

export default App;
