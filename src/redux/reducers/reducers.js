import { combineReducers } from "redux";

const tasks = (
  state = [
    { header: "header", content: "content", isComplete: false },
    { header: "header2", content: "content2", isComplete: false },
  ],
  { type, payload }
) => {
  switch (type) {
    case "SET_TASK_HEADER":
      return [...state, { header: payload }];
    case "SET_TASK_CONTENT":
      return [...state, { content: payload }];
    case "DELETE_TASK":
      return state.filter((task) => task.content !== payload);
    case "TOGGLE_COMPLETE_TASK":
      return state.map((task) =>
        task.content === payload
          ? { ...task, isComplete: !task.isComplete }
          : task
      );
    default:
      return state;
  }
};
const reducer = combineReducers({ tasks });

export default reducer;
