import React, { useState } from "react";
import { connect } from "react-redux";

import { LoginContainer, Title, Buttons } from "./login.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleLoginStart,
  emailLoginStart,
} from "../../redux/user/user.actions";

const Login = ({ emailLoginStart, googleLoginStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailLoginStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <LoginContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <Buttons>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" isGoogleSignIn onClick={googleLoginStart}>
            Sign in with Google
          </CustomButton>
        </Buttons>
      </form>
    </LoginContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleLoginStart: () => dispatch(googleLoginStart()),
  emailLoginStart: (email, password) =>
    dispatch(emailLoginStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(Login);
