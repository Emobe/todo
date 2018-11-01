import * as constants from './constants';
import { makeActionCreator } from 'utils';

export const createTodo = makeActionCreator(constants.CREATE_TODO, 'todo');
export const updateTodo = makeActionCreator(constants.UPDATE_TODO, 'todo');
export const removeTodo = makeActionCreator(constants.REMOVE_TODO, 'index');
export const toggleTodo = makeActionCreator(constants.TOGGLE_TODO, 'id');
