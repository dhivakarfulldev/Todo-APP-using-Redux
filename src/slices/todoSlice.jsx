import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    filter: "All",
  },
  reducers: {
    getTodo: (state, actions) => {
      state.todos = actions.payload;
    },
    addTodo: (state, actions) => {
      state.todos = [...state.todos, actions.payload];
    },
    updateTodostatus: (state, actions) => {
      state.todos = state.todos.map((todo) =>
        todo.id === actions.payload.todoId
          ? { ...todo, status: actions.payload.todoStatus }
          : todo,
      );
    },
    deleteTodo: (state, actions) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== actions.payload.todoId,
      );
    },
    editTodo: (state, actions) => {
      state.todos = state.todos.map((todo) =>
        todo.id === actions.payload.todoId
          ? {
              ...todo,
              Todoname: actions.payload.Todoname,
              Tododesc: actions.payload.Tododesc,
            }
          : todo,
      );
    },
    filterTodo: (state, actions) => {
      state.filter = actions.payload;
    },
  },
});

export const {
  getTodo,
  addTodo,
  updateTodostatus,
  deleteTodo,
  editTodo,
  filterTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
