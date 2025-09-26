import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos, filter } = useSelector((state: RootState) => state.todos);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'ACTIVE') return !todo.completed;
    if (filter === 'COMPLETED') return todo.completed;
    return true;
  });

  return (
    <ul className="mb-4">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
