import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';
import type { AppDispatch } from '../app/store';

export default function TodoInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a todo..."
        className="border p-2 rounded"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </div>
  );
}
