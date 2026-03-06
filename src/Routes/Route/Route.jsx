import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "../../Pages/Home/Home";



const Route = () => {
    const router = createBrowserRouter([
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
      ],
    },
    ])
  return <RouterProvider router={router} />;
};

export default Route;