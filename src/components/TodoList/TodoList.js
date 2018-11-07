import React from 'react';
import PropTypes from 'prop-types';
import { NewTodo, TodoItem } from 'components';
import './TodoList.scss';

const TodoList = ({ ...props }) => (
	<div className="">
		<div className="todo-list">
			<NewTodo createTodo={props.createTodo} />
			{props.todos.map(todo => (
				<TodoItem
					key={todo.id}
					toggle={() => props.toggleTodo(todo.id)}
					{...todo}
				/>
			))}
		</div>
	</div>
);

TodoList.defaultProps = {
	todos: []
};

TodoList.propTypes = {
	todos: PropTypes.array,
	toggleTodo: PropTypes.func.isRequired,
	createTodo: PropTypes.func.isRequired
};

export default TodoList;
