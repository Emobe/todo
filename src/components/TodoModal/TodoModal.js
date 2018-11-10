import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '@material-ui/core';

class TodoModal extends Component {
	propTypes = {};

	state = {
		open: 0,
		todo: ''
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Modal className="">
				hello i am Modal
				<br />
				sdfgsdfs
				<br />
			</Modal>
		);
	}
}

export default TodoModal;
