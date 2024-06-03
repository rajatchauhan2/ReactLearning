import { RouterProvider, createBrowserRouter } from 
"react-router-dom";
import React from 'react';
import './index.css';
import Layout from "./Layout";
import Home from "./components/Home/Home.jsx";
import ReactDOM from 'react-dom/client'
import About from "./components/About/About.jsx";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)