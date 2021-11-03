import React from "react";

import { LoginAndSignUpContainer } from "./login-and-sign-up.styles";

import Login from "../../components/login/login.component";
import SignUp from "../../components/sign-up/sign-up.component";

const LoginAndRegisterPage = () => {
  return (
    <LoginAndSignUpContainer>
      <Login />
      <SignUp />
    </LoginAndSignUpContainer>
  );
};

export default LoginAndRegisterPage;
