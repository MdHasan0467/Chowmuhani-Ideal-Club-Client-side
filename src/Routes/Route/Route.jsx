import { createBrowserRouter } from "react-router"
import Main from "../../Layouts/Main"
import Home from "../../Pages/Home"
import AddNewMember from "../../Pages/AddNewMember"
import DonationSupport from "../../Pages/DonationSupport"
import BloodVolunteers from "../../Pages/BloodVolunteers"
import EmergencyBloodRequest from "../../Pages/EmergencyBloodRequest"
import UserAdviceForNextPlan from "../../components/Home/UserAdviceForNextPlan"
import Events from "../../Pages/Events"
import FindBlood from "../../Pages/FindBlood"
import Gallery from "../../Pages/Gallery"
import NewDonorForm from "../../components/NewMemberShip/NewDonorForm"
import HospitalPartners from "../../Pages/HospitalPartners"
import About from "../../Pages/About"
import IncomeAndCostSharePublicly from "../../Pages/IncomeAndCostSharePublicly"
import LogIn from "../../Pages/LogIn"
import SignUp from "../../Pages/SignUp"
import Dashboard from "../../Layouts/Dashboard"
import DashboardHome from "../../Pages/DashboardHome"
import AddAdminPost from "../../Pages/AddAdminPost"
import AddEvent from "../../Pages/AddEvent"
import AddPlayGame from "../../Pages/AddPlayGame"
import AddMoneySurvey from "../../Pages/AddMoneySurvey"
import AddBloodDonor from "../../Pages/AddBloodDonor"
import ControlCarousel from "../../Pages/ControlCarousel"
import OurNextPlan from "../../Pages/OurNextPlan"
import EmergencyBloodRequestsAdmin from "../../Pages/EmergencyBloodRequestsAdmin"
import ControleUserAdvices from "../../Pages/ControleUserAdvices"
import ControleAboutPage from "../../Pages/ControleAboutPage"
import BanUser from "../../Pages/BanUser"
import DonationCertificate from "../../Pages/DonationCertificate"
import Trash from "../../Pages/Trash"
// import AddNewMember from "../../Pages/AddNewMember";
// import AddEvent from "../../Pages/AddEvent";
// import Events from "../../Pages/Events";
// import FindBlood from "../../Pages/FindBlood";
// import Gallery from "../../Pages/Gallery";
// import About from "../../Pages/About";
// import IncomeAndCostSharePublicly from "../../Pages/IncomeAndCostSharePublicly";
// import AddAdminPost from "../../Pages/AddAdminPost";
// import Main from "../../Layouts/Main";
// import Home from "../../Pages/Home";
// import LogIn from "../../Pages/LogIn";
// import SignUp from "../../Pages/SignUp";
// import Dashboard from "../../Pages/Dashboard";


export const router = createBrowserRouter ([
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
