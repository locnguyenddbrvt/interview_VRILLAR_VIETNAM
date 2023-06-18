import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Page404 from "./404";
import DriversRanking from "./components/DriversRanking/DriversRanking";
import DriverDetail from "./components/DriverDetail/DriverDetail";
import RacesResult from "./pages/RacesResult";
import Home from "./pages/Home";
import Teams from "./pages/Teams";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/drivers-ranking",
        element: <DriversRanking />,
      },
      {
        path: "/driver/:driverid/:driverId",
        element: <DriverDetail />,
      },
      {
        path: "/races-result",
        element: <RacesResult />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
