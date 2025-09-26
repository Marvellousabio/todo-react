import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todos/todoSlice';
import type { AppDispatch } from '../app/store';

interface Props {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoItem({ id, text, completed }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <li className="flex justify-between items-center border-b py-2">
      <span
        onClick={() => dispatch(toggleTodo(id))}
        className={`cursor-pointer ${completed ? 'line-through text-gray-400' : ''}`}
      >
        {text}
      </span>
      <button
        onClick={() => dispatch(deleteTodo(id))}
        className="text-red-500 ml-4"
      >
        ❌
      </button>
    </li>
  );
}
