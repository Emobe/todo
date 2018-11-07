import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewTodo.css';

class NewTodo extends Component {
	static propTypes = {
		createTodo: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.state = { name: '' };
		this.inputRef = React.createRef();
		this.onChange = this.onChange.bind(this);
		this.createTodo = this.createTodo.bind(this);
		this.hitEnter = this.hitEnter.bind(this);
	}

	onChange(e) {
		this.setState({ name: e.target.value });
	}

	createTodo() {
		if (this.state.name !== '') {
			this.props.createTodo(this.state.name);
			this.setState({ name: '' });
			this.inputRef.current.focus();
		}
	}

	hitEnter(e) {
		return (e.key === 'Enter') ? this.createTodo() : null;
	}

	render() {
		return (
			<div className="new todo">
				<div className="title">
					<input
						ref={this.inputRef}
						type="text"
						value={this.state.name}
						placeholder="New todo..."
						onChange={this.onChange}
						onKeyPress={this.hitEnter}
					/>
				</div>
				<div className="create" onClick={this.createTodo}>
					+
				</div>
			</div>
		);
	}
}

export default NewTodo;
