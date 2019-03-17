const intinialState = {
  list: [{ text: "Task 1", completed: false, id: "ABCDEFGHIJ" }]
};
const generateId = () => {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

export default (state = intinialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      action.id = generateId();
      state.list.push(action.todo);
      return { ...state };
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
