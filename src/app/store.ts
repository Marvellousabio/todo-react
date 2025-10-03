import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todoSlice';
import alertReducer from '../features/alert/alertSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    alert: alertReducer,
    users: userReducer,
  },
});

// Types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
