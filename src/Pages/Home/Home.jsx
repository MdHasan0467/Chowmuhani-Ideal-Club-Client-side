import GetInvolved from "../../components/Home/getInvolved";
import Hero from "../../components/Home/Hero";
import Stat from "../../components/Home/Stat";
// import Carousel from "../../components/Home/Carousel";
// import OurCauses from "../../components/Home/OurCauses";
// import OurMission from "../../components/Home/OurMission";
import Footer from "../../Shared/Footer/Footer";
import MemberShipForm from "../MemberShipForm";


const Home = () => {
  return (
    <div>
      <Hero />
      <Stat />
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