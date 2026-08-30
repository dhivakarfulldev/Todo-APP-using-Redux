import { useState } from "react";

const TodoCard = ({ todo, updatetodoStatus, deletetodo, edittodo }) => {
  const [isEdit, setisEdit] = useState(false);
  const [todoName, settodoName] = useState(todo.Todoname);
  const [tododesc, settododesc] = useState(todo.Tododesc);

  const handleUpdate = () => {
    edittodo({ Todoname: todoName, Tododesc: tododesc, todoId: todo.id });
    setisEdit(false);
  };

  return (
    <div className="todo-card">
      {isEdit ? (
        <>
          <h3 className="card-text">Name: {todo.name}</h3>
          <input
            className="update-field"
            type="text"
            value={todoName}
            placeholder="Name"
            onChange={(e) => settodoName(e.target.value)}
          />
          <p className="card-text">Description: {todo.desc}</p>
          <input
            className="update-field"
            type="text"
            value={tododesc}
            placeholder="Description"
            onChange={(e) => settododesc(e.target.value)}
          />
        </>
      ) : (
        <>
          <h3 className="card-text">Name: {todo.Todoname}</h3>
          <p className="card-text">Description: {todo.Tododesc}</p>
        </>
      )}
      <div className="card-status">
        <label className="card-text" htmlFor="">
          Status Filter:{" "}
        </label>
        <select
          value={todo.status}
          onChange={(e) =>
            updatetodoStatus({
              todoStatus: e.target.value,
              todoId: todo.id,
            })
          }
          className="todo-card-select"
        >
          <option value="Completed" className="select-green">
            Completed
          </option>
          <option value="Not Completed" className="select-red">
            Not Completed
          </option>
        </select>
        {isEdit && (
          <button onClick={handleUpdate} className="update-name btn">
            Update
          </button>
        )}
      </div>
      <div className="card-btn">
        {!isEdit && (
          <button className="green-btn btn" onClick={() => setisEdit(true)}>
            Edit
          </button>
        )}
        <button
          className="red-btn btn"
          onClick={() => deletetodo({ todoId: todo.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
