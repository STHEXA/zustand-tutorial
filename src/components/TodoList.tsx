import { useState } from "react";
import { useTodoStore } from "../store/todo";

export default function TodoList() {
  const [text, setText] = useState("");
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };
  return (
    <div>
      <h2>Todoリスト</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.title}
            </label>
            <button onClick={() => removeTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
