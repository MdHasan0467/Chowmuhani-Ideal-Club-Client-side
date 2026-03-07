import GetInvolved from "../../components/Home/getInvolved";
import Hero from "../../components/Home/Hero";
import OurCauses from "../../components/Home/OurCauses";
import OurMission from "../../components/Home/OurMission";
import Footer from "../../Shared/Footer/Footer";
import MemberShipForm from "../MemberShipForm";


const Home = () => {
  return (
    <div>
      <Hero />
      <MemberShipForm />
      <OurMission />
        <OurCauses />
          <GetInvolved />
          <Footer />
    </div>
  );
};

export default Home;