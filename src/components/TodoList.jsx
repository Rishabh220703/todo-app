import React from "react";
import { useGetTodosQuery } from "../features/todos/todosApi";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { data: todos, isLoading, isError } = useGetTodosQuery();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading todos.</p>

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.slice(0, 10).map((todo) => (//Display first 10 todos
                    <TodoItem key={todo.id} todo={todo} />))}
            </ul>
        </div>
    );
};

export default TodoList;