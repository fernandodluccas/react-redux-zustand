import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/';

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  function handleNewTodo(e: React.FormEvent) {
    e.preventDefault();

    dispatch(add(newTodo));
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        placeholder="novo to-do"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
