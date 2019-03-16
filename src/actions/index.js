export const actionAddTodo = todo => ({
  type: 'ADD_TODO',
  todo: {
    value: todo.value,
    completed: false,
  },
});

export const actionDecrement = {
  type: 'DECREMENT',
};
