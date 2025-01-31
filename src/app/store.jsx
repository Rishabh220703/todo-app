import { configureStore, createSlice } from '@reduxjs/toolkit';
import { todosApi } from '../features/todos/todosApi';

const todoInputSlice = createSlice({
    name: 'todoInput',
    initialState: '',
    reducers: {
        setTitle: (state, action) => action.payload,
        clearTitle: () => '',
    },
});

export const { setTitle, clearTitle } = todoInputSlice.actions;

const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer,
        todoInput: todoInputSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware),
});

export default store;