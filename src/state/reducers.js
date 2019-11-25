import * as types from "./actionTypes";

const initialUser = {
   newUser: {},
   errorMsg: {},
};

export const RegisterReducer = (state=initialUser,action) => {
    switch(action.type) {
        case types.POST_REGISTRATION:
            return {...state, newUser:action.payload};
        case types.REGISTRATION_ERROR:
            return {...state,errorMsg:action.payload};
        default:
            return state;
    }
}

const initialLoggedInUser = {
    loggedIn: {},
    errorMsg: {},
 };
 
 export const loginReducer = (state=initialLoggedInUser,action) => {
     switch(action.type) {
         case types.POST_LOGIN:
             return {...state, loggedIn:action.payload};
         case types.REGISTRATION_ERROR:
             return {...state,errorMsg:action.payload};
         default:
             return state;
     }
 }