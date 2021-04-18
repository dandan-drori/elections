import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Charts = () => {
  const chartsData = useSelector((state) => state.charts);

  return (
    <Wrapper>
      <Container>
        <Header>Charts</Header>
        <List>
          {chartsData.map(({ header, content }) => (
            <ChartBox>
              <ChartHeader>{header}</ChartHeader>
              <Content>{content}</Content>
            </ChartBox>
          ))}
        </List>
      </Container>
    </Wrapper>
  );
};
export default Charts;

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2a2400;
  text-align: center;
  padding-top: 7rem;

  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`;

const Header = styled.p`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ff4e00, #ec9f05);
  color: transparent;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const ChartBox = styled.div`
  border: 2px solid magenta;
  padding: 3.5rem 3rem;
  margin: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ChartHeader = styled.p`
  color: #fefefe;
  font-size: 1.5em;
  line-height: 1.4;
`;

const Content = styled.p`
  color: #fefefe;
  font-size: 1.2em;
  line-height: 1.6;
`;
