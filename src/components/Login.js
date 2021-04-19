import React from "react";
import styled from "styled-components";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { login } from "../redux/actions";
import useForm from "../hooks/useForm";
import { validate } from "../helpers";
import api from "../api";

const Login = () => {
  const { state } = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const {
    values,
    errors,
    showHidePassword,
    isPasswordHidden,
    handleChange,
    handleSubmit,
    apiResponse,
  } = useForm(validate, login, api);

  if (isAuthenticated) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <Wrapper>
      <Container>
        <Form>
          <FormHeader>Log In</FormHeader>
          {apiResponse && <Response>{apiResponse}</Response>}
          <Label>Email: </Label>
          <Input
            type="email"
            name="email"
            placeholder="email@gmail.com"
            value={values.email}
            onChange={handleChange}
            required
            errors
          />
          {errors.email && <Error>{errors.email}</Error>}
          <Label>Password: </Label>
          <Input
            type={isPasswordHidden ? "password" : "text"}
            name="password"
            placeholder="*******"
            value={values.password}
            onChange={handleChange}
            required
            errors
          />
          {errors.password && <Error>{errors.password}</Error>}
          <CheckboxContainer>
            <ShowPassword type="checkbox" onClick={showHidePassword} />
            <ShowPasswordText>Show Password</ShowPasswordText>
          </CheckboxContainer>
          <Submit type="submit" onClick={handleSubmit} />
          <Signup>
            Don't have an account? <SignupLink to="/signup">Signup</SignupLink>
          </Signup>
        </Form>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2a2400;
  text-align: center;
  padding: 2rem;
  padding-top: 7rem;

  @media (max-width: 768px) {
    padding: 2rem;
    padding-top: 6rem;
  }
`;

const Form = styled.form`
  text-align: initial;
  display: inline-block;
  min-width: 20rem;
  margin: 0 auto;
  background-color: #fefefe;
  border-radius: 1rem;
  padding: 1rem;
`;

const FormHeader = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  color: #ff0044;
`;

const Label = styled.div`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  border: 2px solid #ff0044;
  width: 100%;
  height: 1rem;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  color: #ff0044;
  font-size: 1.2rem;
  margin-bottom: ${({ errors }) => (errors ? "0.5rem" : "1rem")};

  &:focus {
    outline: none;
    border-color: #050505;
  }
`;

const Submit = styled.input`
  padding: 0.5rem 2rem;
  font-size: 1.1rem;
  border: 1px solid #ff0044;
  border-radius: 0.5rem;
  background-color: #ff0044;
  cursor: pointer;
  color: #fefefe;
  font-weight: 600;

  &:hover {
    color: #ff0044;
    background-color: #fefefe;
  }
`;

const CheckboxContainer = styled.div`
  margin-bottom: 1rem;
`;

const ShowPassword = styled.input`
  cursor: pointer;
`;

const ShowPasswordText = styled.span`
  margin-left: 0.5rem;
`;

const Signup = styled.p`
  margin-top: 1rem;
`;

const SignupLink = styled(Link)`
  &::visted {
    color: #ff0044;
  }
`;

const Error = styled.p`
  color: #ff0000;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.8em;
`;

const Response = styled.p`
  color: #ff0000;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1em;
`;

export default Login;
