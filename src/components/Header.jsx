import { useState } from "react";

const Header = ({ addtodo }) => {
  const [todoName, settodoName] = useState("");
  const [tododesc, settododesc] = useState("");

  const handleTodo = () => {
    addtodo({
      todoname: todoName,
      tododesc: tododesc,
    });

    settodoName("");
    settododesc("");
  };
  return (
    <div className="todo-header">
      <h3>Todo</h3>
      <input
        type="text"
        value={todoName}
        placeholder="Todo Name"
        onChange={(e) => settodoName(e.target.value)}
      />
      <input
        type="text"
        value={tododesc}
        placeholder="Todo Description"
        onChange={(e) => settododesc(e.target.value)}
      />
      <button className="todo-btn" onClick={handleTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default Header;
