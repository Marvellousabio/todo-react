import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import TodoCounter from './components/TodoCounter';

export default function App() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TodoInput />
      <TodoList />
      <FilterButtons />
      <TodoCounter />
    </div>
  );
}
