import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/todos/todoSlice';
import type { Filter } from '../features/todos/todoSlice';
import type { RootState, AppDispatch } from '../app/store';


export default function FilterButtons() {
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector((state: RootState) => state.todos.filter);

  const filters: Filter[] = ['ALL', 'ACTIVE', 'COMPLETED'];

  return (
    <div className="flex gap-2 mb-4">
      {filters.map(f => (
        <button
          key={f}
          onClick={() => dispatch(setFilter(f))}
          className={`px-3 py-1 rounded ${
            filter === f ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
