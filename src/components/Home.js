import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Preview from "./Preview";

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Header>Elections - data made simple</Header>
        <SubHeader>
          <Visualize>Visualize</Visualize> real-time data and analyze it
        </SubHeader>
        <List>
          <ListItem>
            <StyledLink to="/charts">Start now!</StyledLink>
          </ListItem>
        </List>
        <Preview />
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

const Header = styled.p`
  font-size: 5rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #ff4e00, #ec9f05);
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }
`;

const Visualize = styled.span`
  color: magenta;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubHeader = styled.p`
  color: #ededed;
  font-size: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  color: #ededed;
  font-size: 1.5rem;

  &:hover {
    color: #ccc;
  }
`;

export default Home;
