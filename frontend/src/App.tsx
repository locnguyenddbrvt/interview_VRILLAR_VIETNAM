import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./RootLayout";
import Page404 from "./404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Page404 />,
    children: [],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
