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
// import Profile from './Pages/Profile.jsx'
import AddMoneySurvey from './Pages/AddMoneySurvey.jsx'
// import ProfileTwo from './Pages/DashboardHome.jsx'
import DashboardHome from './Pages/DashboardHome.jsx'
import AddBloodDonor from './Pages/AddBloodDonor.jsx'
import AddPlayGame from './Pages/AddPlayGame.jsx'
import ControlCarousel from './Pages/ControlCarousel.jsx'
import OurNextPlan from './Pages/OurNextPlan.jsx'
import ControleUserAdvices from './Pages/ControleUserAdvices.jsx'
import ControleAboutPage from './Pages/ControleAboutPage.jsx'
import BanUser from './Pages/BanUser.jsx'
import Trash from './Pages/Trash.jsx'
import EmergencyBloodRequestsAdmin from './Pages/EmergencyBloodRequestsAdmin.jsx'
import HospitalPartners from './Pages/HospitalPartners.jsx'
import DonationCertificate from './Pages/DonationCertificate.jsx'
import DonationSupport from './Pages/DonationSupport.jsx'
import EmergencyBloodRequest from './Pages/EmergencyBloodRequest.jsx'
import UserAdviceForNextPlan from './components/Home/UserAdviceForNextPlan.jsx'
import BecomeABloodDonor from './Pages/BecomeABloodDonor.jsx'
import NewDonorForm from './components/NewMemberShip/NewDonorForm.jsx'
import BloodVolunteers from './Pages/BloodVolunteers.jsx'



const router = createBrowserRouter ([
 {
  path:'/',
  Component: Main,
  children : [
     {
    index: true,
    Component: Home
  },
  {
    path: 'home',
    Component: Home
  },
  {
    path: 'add/new/member',
    Component: AddNewMember // ভিতরে NewMemberShip কম্পোনেন্ট দেওয়া আছে।
  },
  {
    path: 'donation/support',
    Component: DonationSupport
  },
  {
    path: 'blood/volunteers',
    Component: BloodVolunteers
  },
  {
    path: 'emergency/blood/Request',
    Component: EmergencyBloodRequest
  },
  {
    path: 'user/advice/for/next/plan',
    Component: UserAdviceForNextPlan
  },
  {
    path: 'events',
    Component: Events
  },
  {
    path: 'find-blood',
    Component: FindBlood
  },
  {
    path: 'gallery',
    Component: Gallery
  },
  {
    path: 'become/a/blood/donor',
    Component: NewDonorForm
  },
  {
    path: 'hospital/partners',
    Component: HospitalPartners
  },
  {
    path: 'about',
    Component: About
  },
  {
    path: 'income/and/cost/share/publicly',
    Component: IncomeAndCostSharePublicly
  },

    {
    path: 'login',
    Component: LogIn
  },
  {
    path: 'signup',
    Component: SignUp
  },
  ]
 },

{
  path: "dashboard",
  Component: Dashboard,
  children: [
    {
      path: "dashboard",
      Component: DashboardHome
    },
    {
      path: "profile",
      Component: DashboardHome
    },
    {
      path: "add/admin/post",
      Component: AddAdminPost
    },
    {
    path: 'add/event',
    Component: AddEvent
  },
    {
    path: 'add/play/game',
    Component: AddPlayGame
  },
  {
    path: 'add/new/member',
    Component: AddNewMember
  },
    {
    path: 'add/money/survey',
    Component: AddMoneySurvey
  },
    {
    path: 'add/blood/donor',
    Component: AddBloodDonor
  },
  {
    path: 'carousel',
    Component: ControlCarousel
  },
  {
    path: 'next/plan',
    Component: OurNextPlan
  },
  {
    path: 'emergency/blood/requests/admin',
    Component: EmergencyBloodRequestsAdmin
  },
  {
    path: 'controle/user/advices',
    Component: ControleUserAdvices
  },
  {
    path: 'controle/about/Page',
    Component: ControleAboutPage
  },
  {
    path: 'ban/user',
    Component: BanUser
  },
  {
    path: 'blood/donation/certificate',
    Component: DonationCertificate
  },
  {
    path: 'trash',
    Component: Trash
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
