import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions";
import Status from "./Status";

const Task = ({ header, content, isComplete }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <TextWrapper>
        <Header>{header}</Header>
        <Content>{content}</Content>
      </TextWrapper>
      <ActionsWrapper>
        <Status content={content} isComplete={isComplete} />
        <Delete onClick={() => dispatch(deleteTask(content))}>
          <svg
            width="20"
            height="25"
            viewBox="0 0 117 137"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 32.5H105V121.5C105 129.784 98.2843 136.5 90 136.5H26C17.7157 136.5 11 129.784 11 121.5V32.5Z"
              fill="black"
            />
            <path
              d="M34 10C34 4.47715 38.4772 0 44 0H73C78.5228 0 83 4.47715 83 10V14C83 19.5228 78.5228 24 73 24H44C38.4772 24 34 19.5228 34 14V10Z"
              fill="black"
            />
            <rect y="8" width="117" height="16" rx="5" fill="black" />
          </svg>
        </Delete>
      </ActionsWrapper>
    </Container>
  );
};

export default Task;

const Container = styled.div`
  width: 30rem;
  height: 6rem;
  background-color: #aa8f00;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-bottom: 1.5rem;
`;

const Header = styled.p`
  font-size: 1.5em;
  font-weight: 500;
  color: #ededed;
`;

const Content = styled.p`
  font-size: 1em;
  color: #050505;
  max-width: 26rem;
  word-wrap: break-word;
`;

const Delete = styled.button`
  width: 2rem;
  height: 2rem;
  padding: 0.2rem;
  border: none;
  cursor: pointer;
  background-color: #aa8f00;
`;

const ActionsWrapper = styled.div`
  padding: 0.2rem;
  background-color: #aa8f00;
`;
