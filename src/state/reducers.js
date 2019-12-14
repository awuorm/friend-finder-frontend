import * as types from "./actionTypes";

const initialPostMessage = {
  sentMsg: {},
  sentMsgError: {}
};

export const postMessagesReducer = (state = initialPostMessage, action) => {
switch(action.type) {
  case types.POST_MESSAGES: 
  return {...state, sentMsg: action.payload};
  case types.POST_MESSAGES_ERROR: 
  return {...state, sentMsgError: action.payload};
  default:
    return state;
}
};

const initialMessages = {
    msgs: [],
    msgsError: {}
};

export const getMessagesReducer = (state = initialMessages, action) => {
  switch(action.type) {
    case types.GET_MESSAGES: 
    return {...state, msgs: action.payload};
    case types.GET_MESSAGES_ERROR: 
    return {...state, msgsError: action.payload};
    default:
      return state;
  }
};

const matchedTrue = {
  trueMatch: [],
  trueMatchError: {}
};

export const trueMatchReducers = (state = matchedTrue, action) => {
  switch (action.type) {
    case types.GET_TRUE_MATCH:
      return { ...state, trueMatch: action.payload };
    case types.GET_TRUE_MATCH_ERROR:
      return { ...state, trueMatchError: action.payload };
    default:
      return state;
  }
};

const initialMatches = {
  matches: [],
  matchesError: {}
};

export const matchesReducers = (state = initialMatches, action) => {
  switch (action.type) {
    case types.GET_MATCHES:
      return { ...state, matches: action.payload };
    case types.MATCHES_ERROR:
      return { ...state, matchesError: action.payload };
    default:
      return state;
  }
};

const initialQuestions = {
  qstns: [],
  qstnsError: {}
};

export const questionsReducer = (state = initialQuestions, action) => {
  switch (action.type) {
    case types.GET_QUESTIONS:
      return { ...state, qstns: action.payload };
    case types.QUESTIONS_ERROR:
      return { ...state, qstnsError: action.payload };
    default:
      return state;
  }
};

const initialUser = {
  newUser: {},
  errorMsg: {}
};

export const RegisterReducer = (state = initialUser, action) => {
  switch (action.type) {
    case types.POST_REGISTRATION:
      return { ...state, newUser: action.payload };
    case types.REGISTRATION_ERROR:
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};

const initialLoggedInUser = {
  loggedIn: {},
  errorMsg: {}
};

export const loginReducer = (state = initialLoggedInUser, action) => {
  switch (action.type) {
    case types.POST_LOGIN:
      return { ...state, loggedIn: action.payload };
    case types.REGISTRATION_ERROR:
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};
