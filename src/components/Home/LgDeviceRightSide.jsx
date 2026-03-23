// import Icon from "../../IconSVG/Icon";
import AutoSlider from "../LgDeviceRightSide/AutoSlider";
import BloodGroupSelector from "../LgDeviceRightSide/BloodGroupSelector";

const LgDeviceRightSide = () => {

    return (
        <div className="mt-6">
            {/* Top Section (Slider) */}
            <div><AutoSlider /></div>
            {/* Middle Section (Blood select & donate) */}
            <div><BloodGroupSelector /></div>
            
            {/* Bottom Section (_blank) */}
            <div className="grid grid-cols-4 w-80 p-5 overflow-hidden relative rounded-xl shadow-lg">
                <div className="w-10 h-10 overflow-hidden relative rounded-xl shadow-lg m-4 text-center cursor-pointer hover:scale-125 duration-300 transition ease-in-out border border-gray-200"></div>
                <div className="w-10 h-10 overflow-hidden relative rounded-xl shadow-lg m-4 text-center cursor-pointer hover:scale-125 duration-300 transition ease-in-out border border-gray-200"></div>
                <div className="w-10 h-10 overflow-hidden relative rounded-xl shadow-lg m-4 text-center cursor-pointer hover:scale-125 duration-300 transition ease-in-out border border-gray-200"></div>
                <div className="w-10 h-10 overflow-hidden relative rounded-xl shadow-lg m-4 text-center cursor-pointer hover:scale-125 duration-300 transition ease-in-out border border-gray-200"></div>
                <div className="w-10 h-10 overflow-hidden relative rounded-xl shadow-lg m-4 text-center cursor-pointer hover:scale-125 duration-300 transition ease-in-out border border-gray-200"></div>
                <div className="w-10 h-10 overflow-hidden relative rounded-xl shadow-lg m-4 text-center cursor-pointer hover:scale-125 duration-300 transition ease-in-out border border-gray-200"></div>
                <div className="w-10 h-10 overflow-hidden relative rounded-xl shadow-lg m-4 text-center cursor-pointer hover:scale-125 duration-300 transition ease-in-out border border-gray-200"></div>
                <div className="w-10 h-10 overflow-hidden relative rounded-xl shadow-lg m-4 text-center cursor-pointer hover:scale-125 duration-300 transition ease-in-out border border-gray-200"></div>
                <div className="w-10 h-10 overflow-hidden relative rounded-xl shadow-lg m-4 text-center cursor-pointer hover:scale-125 duration-300 transition ease-in-out border border-gray-200"></div>
                <div className="w-10 h-10 overflow-hidden relative rounded-xl shadow-lg m-4 text-center cursor-pointer hover:scale-125 duration-300 transition ease-in-out border border-gray-200"></div>
                <div className="w-10 h-10 overflow-hidden relative rounded-xl shadow-lg m-4 text-center cursor-pointer hover:scale-125 duration-300 transition ease-in-out border border-gray-200"></div>
                <div className="w-10 h-10 overflow-hidden relative rounded-xl shadow-lg m-4 text-center cursor-pointer hover:scale-125 duration-300 transition ease-in-out border border-gray-200"></div>
            </div>
            
        </div>
    );
};

export default LgDeviceRightSide;