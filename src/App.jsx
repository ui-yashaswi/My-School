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
import SkillHub from "./Pages/HomeNav.jsx/SkillHub";
import HobbyBox from "./Pages/HomeNav.jsx/HobbyBox";
import GameOnWall from "./Pages/HomeNav.jsx/GameOnWall";
import PrimePack from "./Pages/HomeNav.jsx/PrimePack";
import YourServices from "./Pages/Home/Sections/ArtAndPaint/YourServices";
import DrawAndEarn from "./Pages/Home/Sections/ArtAndPaint/DrawAndEarn";
import PrintGall from "./Pages/HomeNav.jsx/PrintGall";
import PreSchool from "./Pages/Home/Sections/SchoolPackage/PreSchool";
import PrimarySchool from "./Pages/Home/Sections/SchoolPackage/PrimarySchool";
import PrePrimary from "./Pages/Home/Sections/SchoolPackage/PrePrimary";
import HighSchool from "./Pages/Home/Sections/SchoolPackage/HighSchool"
import DIY from "./Pages/Home/Sections/DrawingCraft/DIY";
import DrawingSpace from "./Pages/Home/Sections/DrawingCraft/DrawingSpace";

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
      element: <DecorServ />,
    },
    {
      path: "/services/smartwall",
      element: <SmartWall />,
    },
    {
      path: "/services/skillhub",
      element: <SkillHub/>,
    },
    {
      path: "/services/hobbybox",
      element: <HobbyBox/>,
    },
    {
      path: "/services/gameonwall",
      element: <GameOnWall/>,
    },
    {
      path: "/services/primepack",
      element: <PrimePack/>,
    },
    {
      path: "/services/printgallery",
      element: <PrintGall/>
    },

    {
      path: "/arts-and-paints",
      element: <YourServices/>,
    },
    {
      path: "/draw-and-earn",
      element: <DrawAndEarn/>
    },
    {
      path: "/preschool",
      element: <PreSchool/>
    },
    {
      path: "/primaryschool",
      element: <PrimarySchool/>
    },
    {
      path: "/preprimaryschool",
      element: <PrePrimary/>
    },
    {
      path: "/highschool",
      element: <HighSchool/>
    },
    {
      path: "/doityourself",
      element: <DIY/>
    },
    {
      path: "/drawingspace",
      element: <DrawingSpace/>
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
