import { useState } from 'react';

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('');
  return (
    <form action="">
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
