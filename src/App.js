import React from 'react';

import './App.css';
import SignUpForm from "./features/auth/SignUpForm" 
import SignInForm from "./features/auth/SignInForm"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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
        <Route exact path="/">
          <MessagesApp/>
        </Route>
        <Route path="*">
            <Redirect to="/"/>
        </Route>        
      </Switch>   
    </Router>  

  );
}

export default App;
