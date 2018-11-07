import * as Constants from './constants';
import reducer from './reducer';

describe('Todo Reducer', () => {
	it('should return intialState', () => {
		const initialState = [];

		const result = reducer(undefined, {});

		expect(result).toEqual(initialState);
	});

	it('should add a todo to state', () => {
		const todo = 'Complete unit testing';
		const action = {
			type: Constants.CREATE_TODO,
			todo
		};
		const expected = [{ name: todo, done: false }];

		const result = reducer(undefined, action);

		expect(result).toMatchObject(expected);
	});

	it('should mark todo as done', () => {
		const todo = { id: '123', name: 'Test', done: false };
		const initialState = [todo];
		const action = { type: Constants.TOGGLE_TODO, id: '123' };

		const expected = [{ ...todo, done: true }];

		const result = reducer(initialState, action);

		expect(result).toMatchObject(expected);
	});
});
