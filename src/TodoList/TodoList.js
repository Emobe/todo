import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTodo, updateTodo, removeTodo, toggleTodo } from "actions";
import * as selectors from "selectors";
import Todo from "Todo/Todo";
import NewTodo from "NewTodo/NewTodo";
import "./TodoList.css";

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    createTodo: PropTypes.func.isRequired
  };

  static defaultProps = {
    todos: [],
    createTodo: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      open: null
    };
  }

  open(index) {
    this.setState({ open: index });
  }

  close() {
    this.setState({ open: null });
  }

  render() {
    const todos = this.props.todos.map((todo, index) => (
      <Todo
        key={index}
        toggle={() => this.props.toggleTodo(todo.id)}
        {...todo}
      >
			</Todo>
    ));

    return (
      <div className="todo-list">
        <NewTodo createTodo={this.props.createTodo} />
        {todos}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: selectors.getTodos(state)
});

const mapDispatchToProps = {
  createTodo,
  updateTodo,
  removeTodo,
  toggleTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
