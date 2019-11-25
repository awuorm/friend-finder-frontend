import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";
import { Route, NavLink } from "react-router-dom";
import Register from "./components/authentication/Register";
import ReactNotification from "react-notifications-component";
import Login from "./components/authentication/Login";
import { Dashboard } from "./components/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import { StyledApp, StyledBanner } from "./styles";
import logo from "../src/imgs/logo.png";
import friends_logo from "../src/imgs/friends_logo.jpg";

export function App(props) {
  console.log(props);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: ""
  });
  return (
    <StyledApp>
      <ReactNotification />
      <figure>
        <img alt="logo" src={logo} />
      </figure>
      <StyledBanner>
        {/* <figure>
          <img alt="friends-logo" src={friends_logo}/>
        </figure> */}
        <p>Friends forever?</p>
        <span>Let's help you find your people.<br/></span>
        <span>
          Create an account <NavLink to="/register">Register</NavLink>{" "}
       <br/> </span>
        <span> or<br/></span>
        <span>
         <NavLink to="/login">Sign in</NavLink>
        </span>
      </StyledBanner>
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
    </StyledApp>
  );
}

export default connect(state => state, actionCreators)(App);
