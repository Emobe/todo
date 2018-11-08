import React from 'react';
import PropTypes from 'prop-types';
import { NewTodo, TodoItem, Add } from 'components';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import './TodoList.scss';

const TodoList = ({ ...props }) => (
	<div className="todo-list">
		{props.todos.length ? (
			props.todos.map(todo => (
				<TodoItem
					key={todo.id}
					toggle={() => props.toggleTodo(todo.id)}
					{...todo}
				/>
			))
		) : (
			<span className="done">All caught up!</span>
		)}
		<Add />
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
