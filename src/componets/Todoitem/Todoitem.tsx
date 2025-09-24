import React from "react";
import type { Todo } from "../../type/types";

interface Props {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center mb-4">
      <span
        className={
          todo.completed ? "text-decoration-line-through text-muted" : ""
        }
      >
        {todo.title}
      </span>
      <div>
        <button
          className="btn btn-sm btn-warning me-2"
          onClick={() => onToggle(todo)}
        >
          Toggle
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(todo._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
