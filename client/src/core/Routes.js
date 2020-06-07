import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import SignUp from "../auth/SignUp";
import Signin from "../auth/Signin";
import Activate from "../auth/Activate";
import Private from "./Private";
import Admin from "./Admin";
import PrivateRoute from '../auth/PrivateRoute'
import AdminRoute from '../auth/AdminRoute'
import Forgot from "../auth/Forgot";
import Reset from "../auth/Reset";


const Routes = () => {

  return(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact></Route>
      <Route path='/signup' component={SignUp} exact></Route>
      <Route path='/signin' component={Signin} exact></Route>
      <Route path='/auth/activate/:token' component={Activate} exact></Route>
      <PrivateRoute path='/private' component={Private} exact></PrivateRoute>
      <AdminRoute path='/admin' component={Admin} exact></AdminRoute>
      <Route path='/auth/password/forgot' component={Forgot} exact></Route>
      <Route path='/auth/password/reset/:token' component={Reset} exact></Route>
    </Switch>
  </BrowserRouter>
  )};

export default Routes;
