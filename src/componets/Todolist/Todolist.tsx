import React from "react";
import type { Todo } from "../../type/types";
import TodoItem from "../Todoitem/Todoitem";

interface Props {
  todos: Todo[];
  onToggle: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
