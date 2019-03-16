const intinialState = {
  list: [],
};
export default (state = intinialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(state.list);
      state.list.push(action.todo);
      return state;

    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
