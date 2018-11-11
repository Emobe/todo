import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, Paper, Button } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { TodoItem, TodoModal } from 'components';

const styles = theme => ({
	paper: {
		height: '70vh',
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

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.openAddModal = this.openAddModal.bind(this);
		this.closeAddModal = this.closeAddModal.bind(this);
	}

	static propTypes = {};

	state = {
		addModal: false
	};

	openAddModal() {
		this.setState({ addModal: true });
	}

	closeAddModal() {
		this.setState({ addModal: false });
	}

	render() {
		const { classes, todos, toggleTodo, createTodo } = this.props;
		return (
			<Paper className={classes.paper}>
				<List className={classes.list}>
					{todos.length ? (
						todos.map(todo => (
							<TodoItem
								key={todo.id}
								toggle={() => toggleTodo(todo.id)}
								name={todo.name}
								done={todo.done ? todo.done : false}
							/>
						))
					) : (
						<span className="done">All caught up!</span>
					)}
				</List>
				<Button
					variant="fab"
					color="secondary"
					className={classes.add}
					onClick={this.openAddModal}
				>
					<AddIcon />
				</Button>
				<TodoModal
					open={this.state.addModal}
					onClose={this.closeAddModal}
					create={createTodo}
				/>
			</Paper>
		);
	}
}

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
