import { connect } from 'react-redux';
import { createTodo, toggleTodo } from 'actions';
import * as selectors from 'selectors';
import { TodoList } from 'components';

const mapStateToProps = state => ({
	todos: selectors.getTodos(state)
});

const mapDispatchToProps = {
	createTodo,
	toggleTodo
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);
