import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleCompleteTask } from "../redux/actions";

const Status = ({ content, isComplete }) => {
  const dispatch = useDispatch();

  let test = isComplete ? "#AAFF00" : "none";

  return (
    <CheckMark
      onClick={() => {
        dispatch(toggleCompleteTask(content));
      }}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 198 178"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="20.2626"
          y="94.4085"
          width="93"
          height="32"
          transform="rotate(38.7672 20.2626 94.4085)"
          stroke="black"
          stroke-width="8"
          fill={test}
        />
        <rect
          x="172.179"
          y="0.0458679"
          width="31.5556"
          height="200"
          transform="rotate(37.789 172.179 0.0458679)"
          stroke="black"
          stroke-width="8"
          fill={test}
        />
      </svg>
    </CheckMark>
  );
};

const CheckMark = styled.button`
  width: 2rem;
  height: 2rem;
  padding: 0.2rem;
  border: none;
  cursor: pointer;
  background-color: #aa8f00;
  outline: none;
`;

export default Status;
