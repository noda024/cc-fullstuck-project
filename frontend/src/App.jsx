import { useEffect, useState } from "react";
// import NewItemForm from "./NewItemForm";
// import TodoList from "./TodoList";
import axios from "axios";

console.log(import.meta.env.VITE_API_BASE_URL);
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function App() {
  // [ { id: xxxxxx, title: xxxxxx, completed: true/false }, {}]
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      const fetchTodos = async () => {
        // const res = await fetch(`${baseUrl}/todos`)
        // if (!res.ok) {
        //   throw new Error(/**エラー */)
        // }
        // const data = await res.json()
        const res = await axios.get(`${baseUrl}/todos`);
        setTodos(res.data);
      };
      fetchTodos();
    } catch (err) {
      // エラーハンドリング
    }
  }, []);

  async function addTodo(title) {
    try {
      const res = await axios.post(`${baseUrl}/todos`, { title });
      res.data;
    } catch (err) {
      // エラーハンドリング
    }

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  console.log(todos);
  return (
    <>
      <h1>match</h1>
      {/* <NewItemForm onSubmit={addTodo} /> */}
      <p className="header">返却値の確認(ここできたら疎通完了)</p>
      <p></p>
      {/* <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} /> */}
    </>
  );
}
