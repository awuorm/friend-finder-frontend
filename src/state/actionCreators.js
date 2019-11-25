import * as types from "./actionTypes";
import axios from "axios";

export const registrationError = error => {
  return { type: types.REGISTRATION_ERROR, payload: error.message };
};

export const postRegister = (userDetails,props) => dispatch => {
    console.log("props from register",userDetails,props);
  axios
    .post(
      "https://friend-finder-backend.herokuapp.com/api/auth/register",
      userDetails
    )
    .then(res => {
      console.log(res);
      dispatch({ type: types.POST_REGISTRATION, payload: res.data });
      props.history.push("/login");
    })
    .catch(error => {
      console.log(error);
      dispatch(registrationError(error));
    });
};


export const loginError = error => {
    return { type: types.LOGIN_ERROR, payload: error.message };
  };
  
  export const postLogin = (userDetails,props) => dispatch => {
      console.log("props from register",userDetails,props);
    axios
      .post(
        "https://friend-finder-backend.herokuapp.com/api/auth/login",
        userDetails
      )
      .then(res => {
        console.log(res);
        dispatch({ type: types.POST_LOGIN, payload: res.data });
        props.history.push("/dashboard");
        window.localStorage.setItem("token",res.data.token);
      })
      .catch(error => {
        console.log(error);
        dispatch(loginError(error));
      });
  };
