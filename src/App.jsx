import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SearchProducts from "./Pages/Products/SearchProducts";
import Details from "./Pages/Products/Details";
import Login from "./Pages/LogIn/Login";
import EnterOtp from "./Pages/LogIn/EnterOtp";
import Cartdetails from "./Pages/Products/Cartdetails";
import AllProducts from "./Pages/Products/AllProducts";
import Profile from "./Pages/Profile/Profile";
import CreateAc from "./Pages/SignIn/CreateAc";
import DecorServ from "./Pages/HomeNav.jsx/DecorServ";
import SmartWall from "./Pages/HomeNav.jsx/SmartWall";

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
      path: "/search",
      element: <SearchProducts />,
    },
    {
      path: "/allproducts",
      element: <AllProducts />,
    },
    {
      path: "/details",
      element: <Details />,
    },
    {
      path: "/cartdetails",
      element: <Cartdetails />,
    },
    {
      path: "/creataccount",
      element: <CreateAc />,
    },

    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/services/decoration",
      element: <DecorServ/>
    },
    {
      path: "/services/smartwall",
      element: <SmartWall/>
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
