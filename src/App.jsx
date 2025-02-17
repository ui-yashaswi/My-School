import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SearchProducts from "./Pages/Products/SearchProducts";
import Details from "./Pages/Products/Details";
import Login from "./Pages/LogIn/Login";
import EnterOtp from "./Pages/LogIn/EnterOtp";
import Logindetails from "./Pages/Products/Logindetails";

// import NotFound from "./pages/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/enterotp",
      element: <EnterOtp />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/products",
      element: <SearchProducts />,
    },
    {
      path: "/details",
      element: <Details />,
    },
    {
      path: "/logindetails",
      element: <Logindetails />,
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
