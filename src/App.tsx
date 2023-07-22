import React, { useState } from 'react';
import './App.css';
import { Button } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';


import TodoList, { Todo } from './TodoList';

const todos: Todo[] = [
  {
    id: uuidv4(),
    text: 'Create todo list',
    done: false
  },
  {
    id: uuidv4(),
    text: 'Create local storage',
    done: false
  }
];


function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [initialised, setInitialised] = useState(false);

  const addTodoToState = (todo: string) => {
    setTodoList([...todoList, { id: uuidv4(), text: todo, done: false }])
  }

  const todoDone = (id: string) => {
    const todoIndex = todoList.findIndex(todo => todo.id === id);
    setTodoList([...todoList, {...todoList[todoIndex], done: true}])
  }

  const deleteTodo = (id: string) => {
    const todos = todoList.filter(todo => todo.id !== id);
    setTodoList(todos)
  }

  if (!initialised) {
    setTodoList(todos)
    setInitialised(true);
  }
  return (
    <div className="App">
      <TodoList
        items={todoList}
        onAdd={addTodoToState}
        onDone={todoDone}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;

