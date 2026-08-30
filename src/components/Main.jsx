import { filterTodo } from "../slices/todoSlice";
import TodoCard from "./TodoCard";

const Main = ({
  todos,
  dispatch,
  filter,
  updatetodoStatus,
  deletetodo,
  edittodo,
}) => {
  return (
    <div className="main-container">
      <div className="main-top">
        <h3 className="top-text">My Todos</h3>
        <div>
          <label className="top-text" htmlFor="">
            Status Filter:{" "}
          </label>
          <select
            className="todo-select"
            value={filter}
            onChange={(e) => dispatch(filterTodo(e.target.value))}
          >
            <option value="All" className="select-violet">
              All
            </option>
            <option value="Completed" className="select-green">
              Completed
            </option>
            <option value="Not Completed" className="select-red">
              Not Completed
            </option>
          </select>
        </div>
      </div>
      {todos.length === 0 ? (
        <h1 className="bottom-text">Welcome to Todo App!</h1>
      ) : (
        <div className="main-bottom">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              updatetodoStatus={updatetodoStatus}
              deletetodo={deletetodo}
              edittodo={edittodo}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
