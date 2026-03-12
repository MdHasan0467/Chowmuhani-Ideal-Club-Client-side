import Lottie from "lottie-react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import EventAnimation from "../../assets/Animations/animation_event.json";
import { useEffect } from "react";
import AOS from 'aos';

const EventBanner = () => {
    const [isBorderVisible, setIsBorderVisible] = useState(false);


    

    useEffect(() => {
        AOS.init();
    },[])


    const handleClick = () => {
      setIsBorderVisible(!isBorderVisible);
    };


    return (
        <div>
            <div className="container grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-4xl font-bold leading-none text-orange-600">
                        চৌমুহনী আইডিয়াল ক্লাব
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                    এটি একটি অরাজনৈতিক এবং সামাজিক সংগঠন
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to='/dashboard/add/event' 
                        className="px-8 py-3 text-lg font-semibold rounded bg-orange-400 text-gray-100 hover:bg-black hover:text-white 
                        hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] dark:bg-white dark:text-black dark:hover:shadow-[0_20px_50px_rgb(255_88_12)] 
                        hover:-translate-y-2 duration-700 transition-all">
                        Add An Event
                        </Link>

                    </div>
                </div>

                {/* Lottie files */}
                <div className="lg:flex items-center h-32 justify-center hidden">
                {/* <Lottie data-aos="fade-right" animationData={EventAnimation} loop={true}></Lottie> */}
                </div>
            </div>
        </div>
    );
};

export default EventBanner;