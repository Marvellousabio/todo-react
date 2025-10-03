import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todos/todoSlice';
import type { AppDispatch } from '../app/store';
import { CheckSquare, X } from 'lucide-react';
import { showAlert } from '../features/alert/alertSlice';

interface Props {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoItem({ id, text, completed }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <li className="flex justify-between items-center border-b py-2">
      <CheckSquare className="cursor-pointer" onClick={() => dispatch(toggleTodo(id))}/>
      <span
        
        className={`cursor-pointer ${completed ? 'line-through text-gray-400' : ''}`}
      >
        {text}
      </span>
     
        <X onClick={() => {dispatch(deleteTodo(id));dispatch(showAlert({ message: 'Todo deleted', type: 'success' }))} }
        className=" ml-4" />
        
      
    </li>
  );
}
