import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import api from "../api";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [newId, setNewId] = useState(0);

  const showHidePassword = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const getLastId = async () => {
    let id = 0;
    const response = await api.get("/users");
    response.data.forEach((user) => {
      if (user.id > id) {
        id = user.id;
      }
    });
    setNewId(+id + 1);
  };

  const handleSubmit = async () => {
    const indexOfAt = email.search("@");
    const name = email.slice(0, indexOfAt);
    const uppercasedName = name.charAt(0).toUpperCase() + name.slice(1);
    const response = await api.post("/users", [
      {
        id: newId,
        name: uppercasedName,
        email,
        password,
      },
    ]);
    console.log(response);
  };

  useEffect(() => {
    getLastId();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Form>
          <FormHeader>Sign Up</FormHeader>
          <Label>Email: </Label>
          <Input
            type="email"
            placeholder="email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Password: </Label>
          <Input
            type={isPasswordHidden ? "password" : "text"}
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CheckboxContainer>
            <ShowPassword type="checkbox" onClick={showHidePassword} />
            <ShowPasswordText>Show Password</ShowPasswordText>
          </CheckboxContainer>
          <Submit type="submit" onClick={handleSubmit} />
          <Login>
            already have an account? <LoginLink to="/login">Login</LoginLink>
          </Login>
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
  width: 25%;
  height: 75%;
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
  margin-bottom: 1rem;

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

const ShowPassword = styled.input``;

const ShowPasswordText = styled.span`
  margin-left: 0.5rem;
`;

const Login = styled.p`
  margin-top: 1rem;
`;

const LoginLink = styled(Link)`
  &::visited {
    color: #ff0044;
  }
`;

export default Signup;
