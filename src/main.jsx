import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { router } from './Routes/Route/Route.jsx'



// const router = createBrowserRouter ([
//  {
//   path:'/',
//   Component: Main,
//   children : [
//      {
//     index: true,
//     Component: Home
//   },
//   {
//     path: 'home',
//     Component: Home
//   },
//   {
//     path: 'add/new/member',
//     Component: AddNewMember // ভিতরে NewMemberShip কম্পোনেন্ট দেওয়া আছে।
//   },
//   {
//     path: 'donation/support',
//     Component: DonationSupport
//   },
//   {
//     path: 'blood/volunteers',
//     Component: BloodVolunteers
//   },
//   {
//     path: 'emergency/blood/Request',
//     Component: EmergencyBloodRequest
//   },
//   {
//     path: 'user/advice/for/next/plan',
//     Component: UserAdviceForNextPlan
//   },
//   {
//     path: 'events',
//     Component: Events
//   },
//   {
//     path: 'find-blood',
//     Component: FindBlood
//   },
//   {
//     path: 'gallery',
//     Component: Gallery
//   },
//   {
//     path: 'become/a/blood/donor',
//     Component: NewDonorForm
//   },
//   {
//     path: 'hospital/partners',
//     Component: HospitalPartners
//   },
//   {
//     path: 'about',
//     Component: About
//   },
//   {
//     path: 'income/and/cost/share/publicly',
//     Component: IncomeAndCostSharePublicly
//   },

//     {
//     path: 'login',
//     Component: LogIn
//   },
//   {
//     path: 'signup',
//     Component: SignUp
//   },
//   ]
//  },

// {
//   path: "dashboard",
//   Component: Dashboard,
//   children: [
//     {
//       path: "dashboard",
//       Component: DashboardHome
//     },
//     {
//       path: "profile",
//       Component: DashboardHome
//     },
//     {
//       path: "add/admin/post",
//       Component: AddAdminPost
//     },
//     {
//     path: 'add/event',
//     Component: AddEvent
//   },
//     {
//     path: 'add/play/game',
//     Component: AddPlayGame
//   },
//   {
//     path: 'add/new/member',
//     Component: AddNewMember
//   },
//     {
//     path: 'add/money/survey',
//     Component: AddMoneySurvey
//   },
//     {
//     path: 'add/blood/donor',
//     Component: AddBloodDonor
//   },
//   {
//     path: 'carousel',
//     Component: ControlCarousel
//   },
//   {
//     path: 'next/plan',
//     Component: OurNextPlan
//   },
//   {
//     path: 'emergency/blood/requests/admin',
//     Component: EmergencyBloodRequestsAdmin
//   },
//   {
//     path: 'controle/user/advices',
//     Component: ControleUserAdvices
//   },
//   {
//     path: 'controle/about/Page',
//     Component: ControleAboutPage
//   },
//   {
//     path: 'ban/user',
//     Component: BanUser
//   },
//   {
//     path: 'blood/donation/certificate',
//     Component: DonationCertificate
//   },
//   {
//     path: 'trash',
//     Component: Trash
//   },
//   ],
// }
// ])

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
