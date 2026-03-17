import DonationSupport from "../../Pages/DonationSupport";
import VolunteerCTA from "./VolunteerCTA";


const DonationAndVolunteerCTA = () => {
    return (
        <div className="grid md:grid-cols-2"> 
            <div className="md:col-span-1">
                <DonationSupport />
            </div>
            <div className="md:col-span-1 md:mt-20">
               <VolunteerCTA />
            </div>
            
        </div>
    );
};

export default DonationAndVolunteerCTA;