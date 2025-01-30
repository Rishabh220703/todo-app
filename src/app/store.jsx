import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from '../features/todos/todosApi';

const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware),
});

export default store;