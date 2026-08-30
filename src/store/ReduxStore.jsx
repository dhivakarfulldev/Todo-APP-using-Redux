import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../slices/todoSlice.jsx";
export const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});
