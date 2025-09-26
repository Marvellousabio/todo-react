import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todoSlice';
import alertReducer from '../features/alert/alertSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    alert: alertReducer,
  },
});

// Types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
