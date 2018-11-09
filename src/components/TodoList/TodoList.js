import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, Paper, Button } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { TodoItem } from 'components';

const styles = theme => ({
	paper: {
		width: '100%',
		maxWidth: '33vw',
		height: '60vh',
		position: 'relative'
	},
	list: {
		padding: 0
	},
	add: {
		position: 'absolute',
		bottom: '16px',
		right: '16px'
	}
});

const TodoList = ({ ...props }) => (
	<Paper className={props.classes.paper}>
		<List className={props.classes.list}>
			{props.todos.length ? (
				props.todos.map(todo => (
					<TodoItem
						key={todo.id}
						toggle={() => props.toggleTodo(todo.id)}
						name={todo.name}
						done={todo.done ? todo.done : false}
					/>
				))
			) : (
				<span className="done">All caught up!</span>
			)}
		</List>
		<Button variant="fab" color="secondary" className={props.classes.add}>
			<AddIcon />
		</Button>
	</Paper>
);

TodoList.defaultProps = {
	todos: [],
	classes: {}
};

TodoList.propTypes = {
	todos: PropTypes.array,
	toggleTodo: PropTypes.func.isRequired,
	createTodo: PropTypes.func.isRequired,
	classes: PropTypes.any
};

export default withStyles(styles)(TodoList);
