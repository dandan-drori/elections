export const setTaskHeader = (taskHeader) => {
  return { type: "SET_TASK_HEADER", payload: taskHeader };
};

export const setTaskContent = (taskContent) => {
  return { type: "SET_TASK_CONTENT", payload: taskContent };
};

export const deleteTask = (taskContent) => {
  return { type: "DELETE_TASK", payload: taskContent };
};

export const toggleCompleteTask = (taskContent) => {
  return { type: "TOGGLE_COMPLETE_TASK", payload: taskContent };
};

export const login = () => {
  return { type: "LOGIN" };
};

export const signout = () => {
  return { type: "SIGNOUT" };
};
