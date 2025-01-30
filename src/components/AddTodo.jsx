import React, { useState } from "react";
import { useAddTodoMutation } from "../features/todos/todosApi";

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const [addTodo] = useAddTodoMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title) {
            await addTodo({ title, completed: false });
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add To-Do</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter To-Do"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;
