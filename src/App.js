import React from 'react';

import './App.css';
import Grid from "@material-ui/core/Grid"
import SignUpForm from "./features/signup/SignUpForm" 
import SignInForm from "./features/signin/SignInForm"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CenterFormContainer from './app/containers/CenterFormContainer';
import MessagesApp from './app/containers/MessagesApp';
import PrivateRoute from './app/components/AuthRoute'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/auth/signin">
          <CenterFormContainer>
            <SignInForm/>
          </CenterFormContainer>
        </Route>
        <Route exact path="/auth/signup">
          <CenterFormContainer>
            <SignUpForm/>
          </CenterFormContainer>
        </Route>
        <PrivateRoute exact path="/">
          <MessagesApp/>
        </PrivateRoute>
      </Switch>   
    </Router>  

  );
}

export default App;
