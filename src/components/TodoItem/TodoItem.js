import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

const TodoItem = ({ ...props }) => (
	<div className="todo" onClick={props.toggle}>
		<label>
			<input readOnly checked={props.done} type="checkbox" />
			<span className="name">{props.name}</span>
		</label>
	</div>
);

TodoItem.defaultProps = {
	date: new Date()
};

TodoItem.propTypes = {
	name: PropTypes.string.isRequired,
	date: PropTypes.instanceOf(Date),
	toggle: PropTypes.func.isRequired,
	done: PropTypes.bool.isRequired
};

export default TodoItem;
