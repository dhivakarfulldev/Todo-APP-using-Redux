import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/ReduxStore.jsx";
import axios from "axios";

axios.defaults.baseURL = "https://6a736dc04d741b02b1f8758b.mockapi.io/api";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
);
