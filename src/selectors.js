export const getTodos = state => state;
export const getTodo = (state, id) => state.find(todo => todo.id === id);
