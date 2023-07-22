import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList, { TodoListProps } from '.';
import { v4 as uuidv4 } from 'uuid';
import userEvent from '@testing-library/user-event';

describe('Todo List', () => {
    const props = {
        items: [
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
        ],
        onAdd: jest.fn(),
        onDone: jest.fn(),
        onDelete: jest.fn()
    };
    beforeEach(() => {
        render(<TodoList {...props} />)
    })
    it('should render while empty', () => {
    });
    it('should render correct items', () => {
        const items = screen.getAllByTestId('todo-list-item');
        expect(items).toHaveLength(2);
        screen.getByText(props.items[0].text);
        screen.getByText(props.items[1].text);

    });

    it('should call add when add button has been clicked', () => {
        const todoId = props.items[0].id
        const addButton = screen.getByTestId('todo-add')
        userEvent.click(addButton);
        expect(props.onAdd).toHaveBeenCalled();
    });
    it('should call delete when delete button has been clicked', () => {
        const todoId = props.items[0].id
        const deleteButton = screen.getByTestId(`todo-delete-${todoId}`)
        userEvent.click(deleteButton);
        expect(props.onDelete).toHaveBeenCalledWith(todoId);
    });
    it('should call done when done button has been clicked', () => {
        const todoId = props.items[0].id
        const doneButton = screen.getByTestId(`todo-done-${todoId}`)
        userEvent.click(doneButton);
        expect(props.onDone).toHaveBeenCalledWith(todoId);
    });
});