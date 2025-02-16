import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./Pages/About/About";
import SearchProducts from "./Pages/Products/SearchProducts";
import Details from "./Pages/Products/Details";

// import NotFound from "./pages/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
