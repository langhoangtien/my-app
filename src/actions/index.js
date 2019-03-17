export const actionAddTodo = todo => ({
  type: "ADD_TODO",
  todo: {
    text: todo.text,
    completed: false
  }
});

export const actionDecrement = {
  type: "DECREMENT"
};
