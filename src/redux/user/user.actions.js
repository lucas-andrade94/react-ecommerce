import UserActionTypes from "./user.types";

export const googleLoginStart = () => ({
  type: UserActionTypes.GOOGLE_LOGIN_START,
});

export const emailLoginStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_LOGIN_START,
  payload: emailAndPassword,
});

export const loginSuccess = (user) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (err) => ({
  type: UserActionTypes.LOGIN_FAILURE,
  payload: err,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (err) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: err,
});

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (err) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: err,
});
