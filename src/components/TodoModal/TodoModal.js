import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
	Modal,
	Typography,
	TextField,
	Grid,
	Button,
	Snackbar
} from '@material-ui/core';

const styles = theme => ({
	paper: {
		position: 'absolute',
		background: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		padding: theme.spacing.unit * 4,
		display: 'flex',
		flexDirection: 'column',
		height: '25vh',
		justifyContent: 'space-around',
		width: '20vw'
	}
});

const TodoModal = ({ ...props }) => {
	const [name, setName] = useState('');
	const [todoNotif, setTodoNotif] = useState(false);
	return (
		<Modal className="" open={props.open} onClose={props.onClose}>
			<div className={props.classes.paper}>
				<Typography variant="h6">Add Todo</Typography>
				<TextField
					value={name}
					placeholder="Enter Todo..."
					label="Todo"
					onChange={e => setName(e.target.value)}
				/>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => {
						props.create(name);
						setTodoNotif(true);
					}}
				>
					Add
				</Button>
				<Snackbar
					anchor={{ vertical: 'bottom', horizontal: 'left' }}
					open={todoNotif}
					message={<span>Todo Added!</span>}
					autoHideDuration={3000}
					onClose={() => setTodoNotif(false)}
				/>
			</div>
		</Modal>
	);
};

TodoModal.propTypes = {
	classes: PropTypes.object.isRequired,
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(TodoModal);
