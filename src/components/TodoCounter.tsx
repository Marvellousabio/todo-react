import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';

export default function TodoCounter() {
  const activeCount = useSelector(
    (state: RootState) => state.todos.todos.filter(t => !t.completed).length
  );

  return <p>{activeCount} active todos</p>;
}
