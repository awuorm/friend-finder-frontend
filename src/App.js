import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";
import { Route } from "react-router-dom";
import Register from "./components/authentication/Register";
import ReactNotification from "react-notifications-component";
import Login from "./components/authentication/Login";
import { Dashboard } from "./components/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";

export function App(props) {
  console.log(props);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: ""
  });
  return (
    <div className="App">
      <ReactNotification />
      Hello from app!
      <Route
        exact
        path="/register"
        render={props => (
          <Register
            {...props}
            userDetails={userDetails}
            setUserDetails={setUserDetails}
          />
        )}
      />
      <Route
        exact
        path="/login"
        render={props => (
          <Login
            {...props}
            userDetails={userDetails}
            setUserDetails={setUserDetails}
          />
        )}
      />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default connect(state => state, actionCreators)(App);
