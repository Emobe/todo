import {createReducer} from 'utils';
import shortid from 'shortid';
import * as constants from './constants';

const initialState = [
  {
    id: '_wIENFJRF',
    name: 'Finish todo list',
    done: false
  },
  {
    id: 'IWaSwKKfQ',
    name: 'Go to the gym',
    done: false
  },
  {
    id: 'oqMWY0MoR',
    name: 'Get potatoes',
    done: false
  }
];

const reducer = createReducer(initialState, {
  [constants.CREATE_TODO]: (state, {todo}) => {
    return [...state, {id: shortid.generate(), name: todo, done: false}];
  },
  [constants.REMOVE_TODO]: (state, {index}) => {
    return [...state.slice(0, index).concat(state.slice(index + 1))];
  },
  [constants.TOGGLE_TODO]: (state, {id}) => {
    return state.map(
      todo => (todo.id === id ? {...todo, done: !todo.done} : todo)
    );
  }
});

export default reducer;
