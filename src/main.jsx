import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
// import Home from './Pages/Home/Home.jsx'
import App from './App.jsx'
import LogIn from './Pages/Authentications/LogIn/LogIn.jsx'
import SignUp from './Pages/Authentications/SignUp/SignUp.jsx'
import About from './Pages/About.jsx'
import AddEvent from './Pages/AddEvent.jsx'
import Events from './Pages/Events.jsx'
import FindBlood from './Pages/FindBlood.jsx'
import Gallery from './Pages/Gallery.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import AddNewMember from './Pages/AddNewMember.jsx'
import IncomeAndCostSharePublicly from './Pages/Home/IncomeAndCostSharePublicly.jsx'
import AddAdminPost from './Pages/Home/AddAdminPost.jsx'



const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />
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
    path: '/add-new-member',
    element: <AddNewMember />
  },
  {
    path: '/add-event',
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
    path: '/add-admin-post',
    element: <AddAdminPost />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
