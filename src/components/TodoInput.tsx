import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';
import { showAlert } from '../features/alert/alertSlice';
import type { AppDispatch } from '../app/store';

export default function TodoInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
       dispatch(showAlert({ message: 'Todo added!', type: 'success' }));
      setText('');
    } else {
      dispatch(showAlert({ message: 'Please enter a todo!', type: 'error' }));
    }
  };

  return (
    <div className="flex gap-2 my-4 mx-auto">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a todo..."
        className="border p-2 rounded w-full"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </div>
  );
}
