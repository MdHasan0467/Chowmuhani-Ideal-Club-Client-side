import CricketBlood from "../components/Home/CricketBlood";
import GetInvolved from "../components/Home/getInvolved";
import Hero from "../components/Home/Hero";
import NextWorkPlan from "../components/Home/NextWorkPlan";
import RecentWorks from "../components/Home/RecentWorks";
import Stat from "../components/Home/Stat";
import UserAdviceForNextPlan from "../components/Home/UserAdviceForNextPlan";
import YouthSocialWork from "../components/Home/YouthSocialWork";
// import Carousel from "../components/Home/Carousel";
// import OurCauses from "../components/Home/OurCauses";
// import OurMission from "../components/Home/OurMission";
import Footer from "../Shared/Footer/Footer";
import BloodBloog from "../components/Home/BloodBloog";
import AdminPosts from "./AdminPosts";
import MemberShipForm from "./MemberShipForm";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import DonationSupport from "./DonationSupport";
import EmergencyBloodRequest from "./EmergencyBloodRequest";


const Home = () => {
  return (
    <div>
      <Hero />
      <Stat />
      <EmergencyBloodRequest />
      <DonationSupport />
      <AdminPosts />
      <RecentWorks />
      <UpcomingEvents />
      <NextWorkPlan />
      <UserAdviceForNextPlan />
      <BloodBloog />
      <YouthSocialWork />
      <CricketBlood />
      <MemberShipForm />
      {/* <Carousel /> */}
      {/* <OurMission />
        <OurCauses /> */}
          <GetInvolved />
          <Footer />
    </div>
  );
};

export default Home;

