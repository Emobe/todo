import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

class Todo extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
    toggle: PropTypes.func.isRequired
  };

  static defaultProps = {
    name: '',
    description: '',
    date: new Date()
  };

  render() {
    return (
      <div className="todo" onClick={this.props.toggle}>
        <label htmlFor="id">
          <input type="checkbox" />
          <span className="name">{this.props.name}</span>
        </label>
      </div>
    );
  }
}

export default Todo;
