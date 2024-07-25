import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./assets/Page/Home";
import Root from "./assets/Page/Root";
import About_Page from "./assets/Page/About_Page";
import Skills from "./assets/Components/Skills";
import Projects from "./assets/Components/Projects";
import Contract from "./assets/Components/Contract";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About_Page></About_Page>,
      },

      {
        path: "/skills",
        element: <Skills></Skills>,
      },

      {
        path: "/projects",
        element: <Projects></Projects>,
      },

      {
        path: "/contact",
        element: <Contract></Contract>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
