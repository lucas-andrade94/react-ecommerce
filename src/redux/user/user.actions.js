import UserActionTypes from "./user.types";

export const googleLoginStart = () => ({
  type: UserActionTypes.GOOGLE_LOGIN_START,
});

export const loginSuccess = (user) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: UserActionTypes.LOGIN_FAILURE,
  payload: error,
});

export const emailLoginStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_LOGIN_START,
  payload: emailAndPassword,
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

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
