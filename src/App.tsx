import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import TodoCounter from './components/TodoCounter';
import Alert from './components/alert';

export default function App() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <Alert />
      <TodoInput />
      <TodoList />
      <FilterButtons />
      <TodoCounter />
    </div>
  );
}
