import React, { useState } from 'react';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { Grid, IconButton, TextField } from '@mui/material';
import { Add } from '@mui/icons-material/'

export type Todo = {
    id: string,
    text: string,
    done: boolean
}


export type TodoListProps = {
    items: Todo[]
    onAdd: (todo: string) => void
    onDone: (id: string) => void
    onDelete: (id: string) => void
}

const TodoList = ({ items, onAdd, onDone, onDelete }: TodoListProps) => {

    const [todoField, setTodoField] = useState<string>('');

    const todoFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => setTodoField(event.target.value)
    const addButtonClick = () => {
        onAdd(todoField);
        setTodoField('');
    }

    return (
        <Grid container>
            <Grid xs={4}>
                <div>
                    <TextField onChange={todoFieldChange} value={todoField} />
                    <IconButton onClick={addButtonClick} data-testid="todo-add">
                        <Add />
                    </IconButton>
                </div>
                <List>
                    {items.map(item => (
                        <ListItem data-testid="todo-list-item" key={item.text}>
                            {item.text}
                            <IconButton onClick={() => onDelete(item.id)} data-testid={`todo-delete-${item.id}`}>
                                <Add />
                            </IconButton>
                            <IconButton onClick={() => onDone(item.id)} data-testid={`todo-done-${item.id}`}>
                                <Add />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </Grid >
    )
}

export default TodoList;
