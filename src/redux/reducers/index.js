import { combineReducers } from "redux";
import store from "../store";

const { auth: authState, charts: chartsState } = store;

const auth = (state = authState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true };
    case "SIGNOUT":
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

const charts = (state = chartsState, { type, payload }) => {
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
const reducer = combineReducers({ auth, charts });

export default reducer;
