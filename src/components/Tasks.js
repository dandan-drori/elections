import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Task from "./Task";

const Tasks = () => {
  const tasksData = useSelector((state) => state.tasks);
  const reversedTasksData = tasksData.slice().reverse();

  return (
    <Wrapper>
      <Container>
        <Header>My Tasks</Header>
        <AddTask>+</AddTask>
        {tasksData.length < 1 ? (
          <>
            <NoTasks>No tasks :(</NoTasks>
            <AddMore>Add more using the "+" button</AddMore>
          </>
        ) : (
          <List>
            {reversedTasksData.map((task, index) => (
              <Task
                key={index}
                content={task.content}
                header={task.header}
                isComplete={task.isComplete}
              />
            ))}
          </List>
        )}
      </Container>
    </Wrapper>
  );
};

export default Tasks;

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
    padding-top: 4rem;
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
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoTasks = styled.div`
  color: #ededed;
  font-size: 2rem;
  margin-bottom: 3rem;
  margin-top: 4rem;
`;

const AddMore = styled.div`
  color: #ededed;
  font-size: 2rem;
`;

const AddTask = styled.button`
  font-size: 3em;
  margin-bottom: 2rem;
  color: #ededed;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  background-color: #806c00;
  outline: none;
  border-radius: 50%;
  border: none;
`;
