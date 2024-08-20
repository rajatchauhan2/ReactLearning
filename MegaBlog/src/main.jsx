/* eslint-disable react/jsx-no-undef */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from './store/strore.js'

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
</StrictMode>,
);
