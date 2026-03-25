// import CricketBlood from "../components/Home/CricketBlood";
// import GetInvolved from "../components/Home/getInvolved";
import Hero from "../components/Home/Hero";
// import NextWorkPlan from "../components/Home/NextWorkPlan";
import RecentWorks from "../components/Home/RecentWorks";
import Stat from "../components/Home/Stat";
import UserAdviceForNextPlan from "../components/Home/UserAdviceForNextPlan";
import YouthSocialWork from "../components/Home/YouthSocialWork";
// import Carousel from "../components/Home/Carousel";
// import OurCauses from "../components/Home/OurCauses";
// import OurMission from "../components/Home/OurMission";
import Footer from "../Shared/Footer/Footer";
import BloodBloog from "../components/Home/BloodBloog";
// import AdminPosts from "./AdminPosts";
import MemberShipForm from "./MemberShipForm";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import DonationSupport from "./DonationSupport";
import EmergencyBloodRequest from "./EmergencyBloodRequest";
// import TopDonorLeaderboard from "./TopDonorLeaderboard";
// import DonorSuccessStories from "../components/Home/DonorSuccessStories";
// import DonorStoryPost from "../components/Home/DonorStoryPost";
import WhyDonateBlood from "../components/Home/WhyDonateBlood";
import BloodTypeGuide from "../components/Home/BloodTypeGuide";
import ImpactSection from "../components/Home/ImpactSection";
import { Helmet } from "react-helmet-async";
import ScrollTopButton from "../components/Home/ScrollTopButton";
import NewMemberShip from "./NewMemberShip";
import LgDeviceRightSide from "../components/Home/LgDeviceRightSide";
import BloodGroupSelector from "../components/LgDeviceRightSide/BloodGroupSelector";
import ShareButton from "../components/Home/ShareButton";
// import DonationAndVolunteerCTA from "../components/Home/DonationAndVolunteerCTA";
// import VolunteerCTA from "../components/Home/VolunteerCTA";


const Home = () => {
  return (
    <div>
            {/* Page title */}
            <Helmet>
              <title>DIC / Home</title>
            </Helmet>
      <div className="md:grid md:grid-cols-4">
        <div className="md:col-span-3"><Hero /></div>
        <div className="md:col-span-1 md:flex hidden">
          <LgDeviceRightSide />
        </div>
      </div>
      <div className="md:hidden"><BloodGroupSelector /></div>
      <DonationSupport />
      <ImpactSection />
      {/* <DonationAndVolunteerCTA /> */}
      {/* <Stat /> */}
      {/* <VolunteerCTA /> */}
      <EmergencyBloodRequest />
      <WhyDonateBlood />
      <BloodTypeGuide />


      {/* <DonorSuccessStories /> */}
      {/* <DonorStoryPost /> */}
      {/* <TopDonorLeaderboard /> */}
      {/* <AdminPosts /> */}
      <RecentWorks />
      <UpcomingEvents />
      {/* <NextWorkPlan /> */}
      <UserAdviceForNextPlan />
      <BloodBloog />
      <YouthSocialWork />
      {/* <CricketBlood /> */}
      <NewMemberShip />
      {/* <Carousel /> */}
      {/* <OurMission />
      <OurCauses /> */}
      {/* <GetInvolved /> */}
      <Footer />
      <ShareButton />
      <ScrollTopButton />
    </div>
  );
};

export default Home;

