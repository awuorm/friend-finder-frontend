import * as types from "./actionTypes";
import axios from "axios";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import axiosWithAuth from "../utils/axiosWithAuth";
import Axios from "axios";

export const getMessagesError = error => {
  return {type: types.GET_MESSAGES_ERROR, payload: error.message};
}

export const getMessages = () => dispatch => {
  axiosWithAuth()
  .get("https://friend-finder-backend.herokuapp.com/api/restricted/msgs")
  .then(res => {
    dispatch({type: types.GET_MESSAGES, payload: res.data});
    console.log(res.data);
  })
  .catch(error => {
    dispatch(getMessagesError(error));
    store.addNotification({
      title: "Something went terribly wrong",
      message: error.message,
      type: "danger", // 'default', 'success', 'info', 'warning'
      container: "top-right", // where to position the notifications
      animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
      dismiss: {
        duration: 3000
      }
    });
    console.log("error from matches", error);
  });
}

export const postMessagesError = error => {
  return {type: types.POST_MESSAGES_ERROR, payload: error.message};
}

export const postMessages = (msg) => dispatch => {
  axiosWithAuth()
  .post("https://friend-finder-backend.herokuapp.com/api/restricted/msgs", msg)
  .then(res => {
    dispatch({type: types.POST_MESSAGES, payload: res.data});
    console.log(res.data);
  })
  .catch(error => {
    dispatch(postMessagesError(error));
    store.addNotification({
      title: "Something went terribly wrong",
      message: error.message,
      type: "danger", // 'default', 'success', 'info', 'warning'
      container: "top-right", // where to position the notifications
      animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
      dismiss: {
        duration: 3000
      }
    });
    console.log("error from matches", error);
  });
};

export const trueMatchesErrror = error => {
  return { type: types.GET_TRUE_MATCH_ERROR, payload: error.message };
};

export const getTrueMatches = () => dispatch => {
  axiosWithAuth()
    .get("https://friend-finder-backend.herokuapp.com/api/restricted/matches/true")
    .then(res => {
      dispatch({ type: types.GET_TRUE_MATCH, payload: res.data });
      console.log(res.data);
    })
    .catch(error => {
      dispatch(matchesError(error));
      store.addNotification({
        title: "Something went terribly wrong",
        message: error.message,
        type: "danger", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      console.log("error from matches", error);
    });
};

export const postMatchError = error => {
  return { type: types.POST_MATCH_ERROR, payload: error.message };
};

export const postMatch = matchedUser => dispatch => {
  axiosWithAuth()
    .post("https://friend-finder-backend.herokuapp.com/api/restricted/matches", matchedUser)
    .then(res => {
      console.log(res.data);
      store.addNotification({
        title: "You have been matched!",
        message: res.data.success,
        type: "success", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      dispatch({ type: types.POST_MATCH, payload: res.data });
    })
    .catch(error => {
      store.addNotification({
        title: "Something went terribly wrong",
        message: error.message,
        type: "danger", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      console.log("error from post answers", error);
      dispatch(postMatchError(error));
    });
};

export const matchesError = error => {
  return { type: types.MATCHES_ERROR, payload: error.message };
};

export const getMatches = () => dispatch => {
  axiosWithAuth()
    .get("https://friend-finder-backend.herokuapp.com/api/restricted/matches")
    .then(res => {
      dispatch({ type: types.GET_MATCHES, payload: res.data });
      console.log(res.data);
      // store.addNotification({
      //   title: "Find your matches!",
      //   message: "just  a moment",
      //   type: "success", // 'default', 'success', 'info', 'warning'
      //   container: "top-right", // where to position the notifications
      //   animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
      //   animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
      //   dismiss: {
      //     duration: 3000
      //   }
      // });
    })
    .catch(error => {
      dispatch(matchesError(error));
      store.addNotification({
        title: "Something went terribly wrong",
        message: error.message,
        type: "danger", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      console.log("error from matches", error);
    });
};

export const answersError = error => {
  return { type: types.ANSWERS_ERROR, payload: error.message };
};

export const answersPost = (answers, props) => dispatch => {
  axiosWithAuth()
    .post("https://friend-finder-backend.herokuapp.com/api/restricted/answers", answers)
    .then(res => {
      console.log(res.data);
      store.addNotification({
        title: "Answers have been recorded!",
        message: res.data.success,
        type: "success", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      dispatch({ type: types.POST_ANSWERS, payload: res.data });
      props.history.push("/dash/matches");
    })
    .catch(error => {
      store.addNotification({
        title: "Something went terribly wrong",
        message: error.message,
        type: "danger", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      console.log("error from post answers", error);
      dispatch(answersError(error));
    });
};

export const questionsError = error => {
  return { type: types.QUESTIONS_ERROR, payload: error.message };
};

export const getQuestions = () => dispatch => {
  axiosWithAuth()
    .get("https://friend-finder-backend.herokuapp.com/api/restricted/questions")
    .then(res => {
      // console.log("questions from server",res.data);
      dispatch({ type: types.GET_QUESTIONS, payload: res.data });
    })
    .catch(error => {
      dispatch(questionsError(error));
    });
};

export const registrationError = error => {
  return { type: types.REGISTRATION_ERROR, payload: error.message };
};

export const postRegister = (userDetails, props) => dispatch => {
  console.log("props from register", userDetails, props);
  axios
    .post("https://friend-finder-backend.herokuapp.com/api/auth/register", userDetails)
    .then(res => {
      store.addNotification({
        title: "Registration successful!",
        message: res.data.success,
        type: "success", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      console.log(res);
      dispatch({ type: types.POST_REGISTRATION, payload: res.data });
      props.history.push("/login");
    })
    .catch(error => {
      store.addNotification({
        title: "Something went terribly wrong",
        message: error.message,
        type: "danger", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      console.log(error);
      dispatch(registrationError(error.message));
    });
};

export const loginError = error => {
  return { type: types.LOGIN_ERROR, payload: error.message };
};

export const postLogin = (userDetails, props) => dispatch => {
  console.log("props from register", userDetails, props);
  axios
    .post("https://friend-finder-backend.herokuapp.com/api/auth/login", userDetails)
    .then(res => {
      console.log(res);
      store.addNotification({
        title: "Login successful!",
        message: res.data.success,
        type: "success", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      dispatch({ type: types.POST_LOGIN, payload: res.data });
      props.history.push("/dash/questions");
      window.localStorage.setItem("token", res.data.token);
    })
    .catch(error => {
      store.addNotification({
        title: "Something went terribly wrong",
        message: error.message,
        type: "danger", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      console.log(error);
      dispatch(loginError(error.message));
    });
};
