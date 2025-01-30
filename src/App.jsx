import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './app/store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}
export default App
