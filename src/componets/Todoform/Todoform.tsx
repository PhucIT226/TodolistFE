import React, { useState } from "react";

interface Props {
  onAdd: (title: string) => void;
}

const TodoForm: React.FC<Props> = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-3">
      <input
        type="text"
        value={value}
        className="form-control me-2"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new todo"
        required
      />
      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
