import * as Constants from './constants';
import * as Actions from './actions';

describe('Todo Actions', () => {
	it('should create action to add a todo', () => {
		const todo = 'Finish todo list';
		const expected = {
			type: Constants.CREATE_TODO,
			todo
		};

		const result = Actions.createTodo(todo);

		expect(result).toEqual(expected);
	});

	it('should create action to mark todo as done', () => {
		const id = '12_£dsf';
		const expected = {
			type: Constants.TOGGLE_TODO,
			id
		};

		const result = Actions.toggleTodo(id);

		expect(result).toEqual(expected);
	});
});
