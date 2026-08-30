import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import { useEffect, useState } from "react";
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
  const [isloading, setisLoading] = useState(false);
  const state = useSelector((state) => state.todo.todos);
  const filterstate = useSelector((state) => state.todo.filter);
  const dispatch = useDispatch();

  const Gettodo = async () => {
    try {
      setisLoading(true);
      const res = await axios.get("/TodoApp");
      dispatch(getTodo(res.data));
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  const addtodo = async (tododata) => {
    try {
      const res = await axios.post("/TodoApp", {
      Todoname: tododata.todoname,
      Tododesc: tododata.tododesc,
      status: "Not Completed",
    });

    dispatch(addTodo(res.data));
    } catch (error) {
      console.log(error);
      
    }
  };

  const updatetodoStatus = async (tododata) => {
    try {
      dispatch(updateTodostatus(tododata));
    await axios.put(`/TodoApp/${tododata.todoId}`, {
      status: tododata.todoStatus,
    });
    } catch (error) {
      console.log(error);
      
    }
  };

  const deletetodo = async (tododata) => {
    try {
      dispatch(deleteTodo(tododata));
    await axios.delete(`/TodoApp/${tododata.todoId}`);
    } catch (error) {
      console.log(error);
      
    }
  };

  const edittodo = async (tododata) => {
   try {
     dispatch(editTodo(tododata));
    const res = await axios.put(`TodoApp/${tododata.todoId}`, {
      Todoname: tododata.Todoname,
      Tododesc: tododata.Tododesc,
    });
    console.log(res.data);
   } catch (error) {
    console.log(error);
    
   }
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
        {isloading ? (
          <p className="loader">Loading....</p>
        ) : (
          <Main
            todos={filtertodos}
            filter={filterstate}
            updatetodoStatus={updatetodoStatus}
            deletetodo={deletetodo}
            edittodo={edittodo}
            dispatch={dispatch}
          />
        )}
      </div>
    </>
  );
};

export default App;
