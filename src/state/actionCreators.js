import * as types from "./actionTypes";
import axios from "axios";

export const registrationError = error => {
  return { type: types.REGISTRATION_ERROR, payload: error.message };
};

export const postRegister = formValues => dispatch => {
  axios
    .post(
      "https://friend-finder-backend.herokuapp.com/api/auth/login",
      formValues
    )
    .then(res => {
      console.log(res);
      dispatch({ type: types.POST_REGISTRATION, payload: res.data });
    })
    .catch(error => {
      console.log(error);
      dispatch(registrationError(error));
    });
};
