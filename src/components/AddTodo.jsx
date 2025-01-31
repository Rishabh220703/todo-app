import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAddTodoMutation } from "../features/todos/todosApi";
import { setTitle, clearTitle } from "../app/store";

const AddTodo = () => {
    const dispatch = useDispatch();
    const title = useSelector((state) => state.todoInput);
    const [addTodo] = useAddTodoMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title) {
            await addTodo({ title, completed: false });
            dispatch(clearTitle());
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add To-Do</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => dispatch(setTitle(e.target.value))}
                placeholder="Enter To-Do"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;
