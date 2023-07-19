import React from 'react';

type Todo = {
    text: string,
    done: boolean
}

const Todos: Todo[] = [
    {
        text: 'Create todo list',
        done: false
    },
    {
        text: 'Create local storage',
        done: false
    }
]

type TodoListProps = {
    items: Todo[]
}


const TodoList = () => {
    return (
        <div>
            List
        </div>
    )
}

export default TodoList;
