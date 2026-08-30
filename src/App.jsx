import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  editTodo,
  getTodo,
  updateTodostatus,
  addTodo,
} from "./slices/todoSlice";

const App = () => {
  const state = useSelector((state) => state.todo.todos);
  const filterstate = useSelector((state) => state.todo.filter);
  const dispatch = useDispatch();

  const Gettodo = async () => {
    const res = await axios.get("/TodoApp");
    dispatch(getTodo(res.data));
  };

  const addtodo = async (tododata) => {
    const res = await axios.post("/TodoApp", {
      Todoname: tododata.todoname,
      Tododesc: tododata.tododesc,
      status: "Not Completed",
    });

    dispatch(addTodo(res.data));
  };

  const updatetodoStatus = async (tododata) => {
    dispatch(updateTodostatus(tododata));
    await axios.put(`/TodoApp/${tododata.todoId}`, {
      status: tododata.todoStatus,
    });
  };

  const deletetodo = async (tododata) => {
    dispatch(deleteTodo(tododata));
    await axios.delete(`/TodoApp/${tododata.todoId}`);
  };

  const edittodo = async (tododata) => {
    dispatch(editTodo(tododata));
    const res = await axios.put(`TodoApp/${tododata.todoId}`, {
      Todoname: tododata.Todoname,
      Tododesc: tododata.Tododesc,
    });
    console.log(res.data);
  };

  const filtertodos = state.filter((todo) => {
    if (filterstate === "All") return todo;
    return todo.status === filterstate;
  });

  useEffect(() => {
    Gettodo();
  }, []);

  return (
    <>
      <div className="todo-container">
        <h1>Todo App</h1>
        <Header addtodo={addtodo} />
        <Main
          todos={filtertodos}
          filter={filterstate}
          updatetodoStatus={updatetodoStatus}
          deletetodo={deletetodo}
          edittodo={edittodo}
          dispatch={dispatch}
        />
      </div>
    </>
  );
};

export default App;
