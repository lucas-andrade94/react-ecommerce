import React from "react";

import "./login-and-sign-up.styles.scss";
import Login from "../../components/login/login.component";
import SignUp from "../../components/sign-up/sign-up.component";

const LoginAndRegisterPage = () => {
  return (
    <div className="login-and-sign-up">
      <Login />
      <SignUp />
    </div>
  );
};

export default LoginAndRegisterPage;
