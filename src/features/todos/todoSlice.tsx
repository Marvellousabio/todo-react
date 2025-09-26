import { createSlice } from '@reduxjs/toolkit';
import  type { PayloadAction } from '@reduxjs/toolkit';

export type Filter = 'ALL' | 'ACTIVE' | 'COMPLETED';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  filter: Filter;
}

const initialState: TodosState = {
  todos: [{ id: 1, text: 'Learn Redux Toolkit', completed: false }],
  filter: 'ALL',
};

let nextId = 2;

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ id: nextId++, text: action.payload, completed: false });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(t => t.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter } = todosSlice.actions;
export default todosSlice.reducer;
