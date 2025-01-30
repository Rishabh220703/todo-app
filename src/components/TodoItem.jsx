import React from 'react';
import { useUpdateTodoMutation, useDeleteTodoMutation } from '../features/todos/todosApi';

const TodoItem = ({ todo }) => {
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    const toggleCompletion = async () => {
        try {
            await updateTodo({ id: todo.id, title: todo.title, completed: !todo.completed });
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteTodo(todo.id);
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <li>
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer'
                }}
                onClick={toggleCompletion}
            >
                {todo.title}
            </span>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default TodoItem;