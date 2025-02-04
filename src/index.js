import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import * as reducers from "./state/reducers";
import { BrowserRouter as Router } from "react-router-dom";

const monsterReducer = combineReducers({
  registration: reducers.RegisterReducer,
  login: reducers.loginReducer,
  questions: reducers.questionsReducer,
  matched: reducers.matchesReducers,
  matchedTrue: reducers.trueMatchReducers,
  sentMessages: reducers.postMessagesReducer,
  userMessages: reducers.getMessagesReducer
});

const store = createStore(
  monsterReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App/>
      {/* <Route exact path="/" render={props => <App {...props} /> }  /> */}
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
