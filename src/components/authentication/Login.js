import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import { Formik } from "formik";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import { StyledRegister } from "../../styles";
import logo from "../../imgs/logo.png";
import { NavLink } from "react-router-dom";




export const Login = props => {
    console.log("props from Login",props);
  const {userDetails,} = props;

  return (
    <StyledRegister>
       <figure>
        <img alt="logo" src={logo} />
      </figure>
      <div>
      <Formik
        initialValues={userDetails}
        validate={userDetails => {
          let errors = {};
          if (!userDetails.username) {
            errors.username = "Please provide a username!";
          }
          if (!userDetails.password) {
            errors.password = "Please provide a password!";
          } else if (userDetails.password.length < 9) {
            errors.password = "Your password must be more than 8 characters!";
          } else if (userDetails.password.length > 11) {
            errors.password = "Your password must be less than 12 characters!";
          }
          return errors;
        }}
        onSubmit={(userDetails, actions) => {
          props.postLogin(userDetails, props);
          console.log(userDetails);
          actions.resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <h4>Login to continue</h4>
            <label>Username</label>
            <input
              value={values.username}
              type="text"
              name="username"
              onChange={handleChange}
            />
            <span
              style={{
                color: "red",
                background: "rgba(255, 255, 255, 0.0)",
                padding: "0.5em",
                margin: "0.5em"
              }}
            >
              {" "}
              {errors.username && touched.username && errors.username}
            </span>
            <label>Password</label>
            <input
              value={values.password}
              type="password"
              name="password"
              onChange={handleChange}
            />
            <span
              style={{
                color: "red",
                background: "rgba(255, 255, 255, 0.0)",
                padding: "0.5em",
                margin: "0.5em"
              }}
            >
              {" "}
              {errors.password && touched.password && errors.password}
            </span>
            <button
              type="submit"
              onClick={() => {
                store.addNotification({
                  title: "Trying to login?",
                  message: "A moment while we check your details",
                  type: "info", // 'default', 'success', 'info', 'warning'
                  container: "top-right", // where to position the notifications
                  animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
                  animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
                  dismiss: {
                    duration: 3000
                  }
                });
              }}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
      </div>
      <p>
        <span>or <br/></span>
        <NavLink to="/login">Sign in</NavLink>
      </p>
    </StyledRegister>
  );
};

export default connect(
  state => state,
  actionCreators
)(Login);
