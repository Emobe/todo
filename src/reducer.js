import { createReducer } from 'utils';
import * as constants from './constants';
import shortid from 'shortid';

//const initialState = [];

const initialState = [
  {
    id: '_wIENFJRF',
    name: 'Finish todo list'
  },
  {
    id: 'IWaSwKKfQ',
    name: 'Go to the gym'
  },
  {
    id: 'oqMWY0MoR',
    name: 'Get potatoes'
  }
];


const reducer = createReducer(initialState, {
  [constants.CREATE_TODO]: (state, { todo }) => {
    return [...state, { id: shortid.generate(), name: todo, done: false}];
  },
  [constants.REMOVE_TODO]: (state, { index }) => {
    return [...state.slice(0, index).concat(state.slice(index + 1))];
  },
  [constants.TOGGLE_TODO]: (state, { id }) => {
    return state.map(
      todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)
    );
  }
});

export default reducer;
