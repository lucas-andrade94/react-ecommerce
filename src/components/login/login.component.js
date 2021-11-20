import React, { Component } from "react";
import { connect } from "react-redux";

import { LoginContainer, Title, Buttons } from "./login.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleLoginStart,
  emailLoginStart,
} from "../../redux/user/user.actions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { emailLoginStart } = this.props;
    const { email, password } = this.state;

    emailLoginStart(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleLoginStart } = this.props;

    return (
      <LoginContainer>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <Buttons>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              isGoogleSignIn
              onClick={googleLoginStart}
            >
              Sign in with Google
            </CustomButton>
          </Buttons>
        </form>
      </LoginContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleLoginStart: () => dispatch(googleLoginStart()),
  emailLoginStart: (email, password) =>
    dispatch(emailLoginStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(Login);
