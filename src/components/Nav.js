import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>Didit</Logo>
        <List>
          <Item>
            <StyledLink to="/">Home</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/tasks">Tasks</StyledLink>
          </Item>
        </List>
      </Container>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 8vh;
  background-color: #806c00;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 5px 2px 3px #aa8f00;
`;

const Logo = styled.p`
  font-size: 1.5rem;
  margin-left: 2rem;
  font-weight: 600;
  color: #ff7100;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 4rem;
  width: 30vw;
`;

const Item = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  color: #d4b300;
  font-size: 1.5rem;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
