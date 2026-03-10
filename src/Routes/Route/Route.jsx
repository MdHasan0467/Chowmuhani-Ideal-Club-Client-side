import { createBrowserRouter } from "react-router"
import AddNewMember from "../../Pages/AddNewMember";
import AddEvent from "../../Pages/AddEvent";
import Events from "../../Pages/Events";
import FindBlood from "../../Pages/FindBlood";
import Gallery from "../../Pages/Gallery";
import About from "../../Pages/About";
import IncomeAndCostSharePublicly from "../../Pages/IncomeAndCostSharePublicly";
import AddAdminPost from "../../Pages/AddAdminPost";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home";
import LogIn from "../../Pages/LogIn";
import SignUp from "../../Pages/SignUp";
import Dashboard from "../../Pages/Dashboard";


  export const router = createBrowserRouter([
            {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: '/add-new-member',
          element: <AddNewMember />
        },
        {
          path: 'add/event',
          element: <AddEvent />
        },
        {
          path: '/events',
          element: <Events />
        },
        {
          path: '/find-blood',
          element: <FindBlood />
        },
        {
          path: '/gallery',
          element: <Gallery />
        },
        {
          path: '/events',
          element: <Events />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/servey',
          element: <IncomeAndCostSharePublicly />
        },
        {
          path: '/dashboard/add/admin/post',
          element: <AddAdminPost />
        },
        {
          path: '/login',
          element: <LogIn />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        },
            ],
    },
    ])
