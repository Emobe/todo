import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

const Todo = ({...props}) => (
  <div className="todo" onClick={props.toggle}>
    <label>
      <input checked={props.done} type="checkbox" />
      <span className="name">{props.name}</span>
    </label>
  </div>
);

Todo.defaultProps = {
  date: new Date()
};

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  toggle: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired
};

export default Todo;
