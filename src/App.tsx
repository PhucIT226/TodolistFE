import React, { useEffect, useState } from "react";
import axios from "axios";
import type { Todo } from "./type/types";
import TodoForm from "./componets/Todoform/Todoform";
import TodoList from "./componets/Todolist/Todolist";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios
      .get<Todo[]>(API_URL)
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addTodo = (title: string) => {
    axios
      .post<Todo>(API_URL, { title })
      .then((res) => setTodos((prev) => [...prev, res.data]))
      .catch((err) => console.error(err));
  };

  const toggleTodo = (todo: Todo) => {
    axios
      .put<Todo>(`${API_URL}/${todo._id}`, {
        completed: !todo.completed,
      })
      .then((res) =>
        setTodos((prev) => prev.map((t) => (t._id === todo._id ? res.data : t)))
      )
      .catch((err) => console.error(err));
  };

  const deleteTodo = (id: string) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => setTodos((prev) => prev.filter((t) => t._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="text-center mb-4">To Do List</h1>
              <TodoForm onAdd={addTodo} />
              <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
