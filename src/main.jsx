import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import LogIn from './Pages/LogIn.jsx'
import SignUp from './Pages/SignUp.jsx'
import About from './Pages/About.jsx'
import AddEvent from './Pages/AddEvent.jsx'
import Events from './Pages/Events.jsx'
import FindBlood from './Pages/FindBlood.jsx'
import Gallery from './Pages/Gallery.jsx'
import AddNewMember from './Pages/AddNewMember.jsx'
import IncomeAndCostSharePublicly from './Pages/IncomeAndCostSharePublicly.jsx'
import AddAdminPost from './Pages/AddAdminPost.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import Main from './Layouts/Main.jsx'
import Home from './Pages/Home.jsx'
import Dashboard from './Layouts/Dashboard.jsx'
import Profile from './Pages/Profile.jsx'
import AddMoneySurvey from './Pages/AddMoneySurvey.jsx'
import ProfileTwo from './Pages/DashboardHome.jsx'
import DashboardHome from './Pages/DashboardHome.jsx'



const router = createBrowserRouter ([
 {
  path:'/',
  Component: Main,
  children : [
     {
    path: '/',
    element: <Home />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/add-new-member',
    element: <AddNewMember />
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
    path: '/login',
    element: <LogIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  ]
 },

{
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    {
      path: "dashboard",
      element: <DashboardHome />,
    },
    {
      path: "profile",
      element: <DashboardHome />,
    },
    {
      path: "add/admin/post",
      element: <AddAdminPost />,
    },
    {
    path: 'add/event',
    element: <AddEvent />
  },
  {
    path: 'add/new/member',
    element: <AddNewMember />
  },
    {
    path: 'add/money/survey',
    element: <AddMoneySurvey />
  },
  ],
}
])

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
           <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
)
