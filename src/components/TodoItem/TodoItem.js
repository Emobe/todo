import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, Checkbox } from '@material-ui/core';

const TodoItem = ({ ...props }) => (
	<ListItem button divider className="todo" onClick={props.toggle}>
		<Checkbox
			disableRipple
			tabIndex={-1}
			checked={props.done ? props.done : false}
		/>
		<ListItemText primary={props.name} />
	</ListItem>
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
