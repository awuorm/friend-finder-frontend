import * as types from "./actionTypes";

const initialUser = {
   newUser: {}
};

export const RegisterReducer = (state=initialUser,action) => {
    switch(action.type) {
        case types.POST_REGISTRATION:
            return {...state, newUser:action.payload}
        default:
            return state;
    }
}