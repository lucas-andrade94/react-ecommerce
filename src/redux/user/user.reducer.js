import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  err: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        err: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        err: null,
      };
    case UserActionTypes.LOGIN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        currentUser: null,
        err: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
