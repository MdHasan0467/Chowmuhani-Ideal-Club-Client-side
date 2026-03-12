import React, { useState } from 'react';
import { BsAwardFill, BsFillDoorOpenFill, BsFillEraserFill, BsFillMotherboardFill, BsHouseGearFill, BsList, BsListNested, BsPersonBadge, BsSearch } from "react-icons/bs";
import { Link } from 'react-router';

const DashboardNavBar = () => {
  const [isHomeBorderVisible, setIsHomeBorderVisible] = useState(false);
    const [isBatchesBorderVisible, setIsBatchesBorderVisible] = useState(false);
    const [isEventsBorderVisible, setIsEventsBorderVisible] = useState(false);
    const [isGalleryBorderVisible, setIsGalleryBorderVisible] = useState(false);
    const [isAboutBorderVisible, setIsAboutBorderVisible] = useState(false);
    const [isBloodBorderVisible, setIsBloodBorderVisible] = useState(false);
    const [isRecommendedBorderVisible, setIsRecommendedBorderVisible] = useState(false);










    const handleClickHome = () => {
    setIsHomeBorderVisible(!isHomeBorderVisible);
    setIsBatchesBorderVisible(false)
    setIsEventsBorderVisible(false)

    setIsGalleryBorderVisible(false)
    setIsAboutBorderVisible(false)
    setIsRecommendedBorderVisible(false)
    setIsBloodBorderVisible(false)
    };

    const handleClickBatches = () => {
    setIsBatchesBorderVisible(!isBatchesBorderVisible);
    setIsHomeBorderVisible(false)
    setIsEventsBorderVisible(false)

    setIsGalleryBorderVisible(false)
    setIsAboutBorderVisible(false)
    setIsRecommendedBorderVisible(false)
    setIsBloodBorderVisible(false)
    };

    const handleClickEvents = () => {
    setIsEventsBorderVisible(!isEventsBorderVisible);
    setIsHomeBorderVisible(false)
    setIsBatchesBorderVisible(false)

    setIsGalleryBorderVisible(false)
    setIsAboutBorderVisible(false)
    setIsRecommendedBorderVisible(false)
    setIsBloodBorderVisible(false)
    };


    const handleClickGallery = () => {
    setIsGalleryBorderVisible(!isGalleryBorderVisible);
    setIsHomeBorderVisible(false)
    setIsBatchesBorderVisible(false)
    setIsEventsBorderVisible(false)

    setIsAboutBorderVisible(false)
    setIsRecommendedBorderVisible(false)
    setIsBloodBorderVisible(false)
    };

    const handleClickAbout = () => {
    setIsAboutBorderVisible(!isAboutBorderVisible);
    setIsHomeBorderVisible(false)
    setIsBatchesBorderVisible(false)
    setIsEventsBorderVisible(false)

    setIsGalleryBorderVisible(false)
    setIsRecommendedBorderVisible(false)
    setIsBloodBorderVisible(false)
    };


    const handleClickBlood = () => {
    setIsBloodBorderVisible(!isBloodBorderVisible);
    setIsHomeBorderVisible(false)
    setIsBatchesBorderVisible(false)
    setIsEventsBorderVisible(false)

    setIsGalleryBorderVisible(false)
    setIsAboutBorderVisible(false)
    setIsRecommendedBorderVisible(false)
    };


    const handleClickRecommended = () => {
    setIsRecommendedBorderVisible(!isRecommendedBorderVisible);
    setIsBloodBorderVisible(false);
    setIsHomeBorderVisible(false)
    setIsBatchesBorderVisible(false)
    setIsEventsBorderVisible(false)

    setIsGalleryBorderVisible(false)
    setIsAboutBorderVisible(false)

    };


    




    const [hamburg, setHamburg] = useState()
    // const [hamburgClose, setHamburgClose] = useState()


    const handleHamburg = () => {
        setHamburg('click')
    }

        //! State for Switch
        const [enabled, setEnabled] = useState(false)

    return (
        <div>
            <div className="navbar bg-base-100 flex ju dark:bg-black dark:text-white">
                
              {/* For Mobile Device */}
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <BsListNested 
                        onClick={handleHamburg} 
                        className={`text-2xl ${hamburg? 'hidden' : 'flex'}`} 
                        />
                        <BsList className={`text-2xl ${hamburg? 'flex' : 'hidden'}`} />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content dark:bg-black dark:text-white 
                    p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/batches'>Batches</Link></li>
                        <li><Link to='/recommended-students-list'>Recommended</Link></li>
                        <li><Link to='/events'>Events</Link></li>
                        {/* <li><Link to='/news'>News</Link></li> */}
                        <li><Link to='/gallery'>Gallery</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                    </div>

                </div>

              {/* For Large Device */}
                <div className="navbar-center hidden  ml-12 lg:flex">
                <ul className="flex px-1">
                    
                    <li className="mx-5">
                        <Link  to='/'
                        // onClick={handleClickHome} 
                        className={`border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500 focus:outline-none  
                        dark:hover:text-[#ff2a95] ${isHomeBorderVisible ? 'animate-border-infinite dark:text-[#ff2a95]' : ''}`}>
                        Home
                        </Link>
                    </li>
                    
                    <li className="mx-5">
                        <Link 
                        // onClick={handleClickBatches}
                         className={`border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500 focus:outline-none 
                          dark:hover:text-[#ff2a95] ${isBatchesBorderVisible ? 'animate-border-infinite dark:text-[#ff2a95]' : ''}`} to='/batches'>
                        Batches
                        </Link>
                    </li>

                    
                    <li className="mx-5">
                        <Link 
                        // onClick={handleClickRecommended} 
                        className={`border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500 focus:outline-none  dark:hover:text-[#ff2a95] ${isRecommendedBorderVisible ? 'animate-border-infinite dark:text-[#ff2a95]' : ''}`} to='/recommended-students-list'>
                        Our Success
                        </Link>
                    </li>
                    
                    <li className="mx-5">
                        <Link 
                        // onClick={handleClickEvents} 
                        className={`border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500 focus:outline-none  dark:hover:text-[#ff2a95] ${isEventsBorderVisible ? 'animate-border-infinite dark:text-[#ff2a95]' : ''}`} to='/events'>
                        Events
                        </Link>
                    </li>
                    
                    
                    <li className="mx-5">
                        <Link 
                        // onClick={handleClickGallery} 
                        className={`border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500 focus:outline-none  dark:hover:text-[#ff2a95] ${isGalleryBorderVisible ? 'animate-border-infinite dark:text-[#ff2a95]' : ''}`} to='/gallery'>
                        Gallery
                        </Link>
                    </li>
                    
                    <li className="mx-5">
                        <Link 
                        // onClick={handleClickAbout} 
                        className={`border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500 focus:outline-none  dark:hover:text-[#ff2a95] ${isAboutBorderVisible ? 'animate-border-infinite dark:text-[#ff2a95]' : ''}`} to='/about'>
                        About
                        </Link>
                    </li>
                    
                    <li className="mx-5">
                        <span className='text-[#a0a0a0] cursor-default'>
                        Dashboard
                        </span>
                    
                    </li>
                    
                    <li className="mx-5">
                        <Link 
                        // onClick={handleClickBlood} 
                        className={`border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500 focus:outline-none  dark:hover:text-[#ff2a95] ${isBloodBorderVisible ? 'animate-border-infinite dark:text-[#ff2a95]' : ''}`} to='/dashboard/search-blood-group'>
                        Find Blood
                        </Link>
                    
                    </li>
                </ul>
                </div>


                
                    
                    {/* Drawer For Mobile Device */}
                <div className="navbar-end p-2 md:hidden">
                <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="ml-10 bg-blue-500 text-white hover:bg-blue-700 p-2">More options</label>
                    </div> 

                    <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        {/* Top blue part where have user info */}
                            <li><Link to='/' className="flex px-10 py-3 lg:mx-3 text-blue-800 bg-white shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-semibold" >
                            <span className="mr-5"><BsHouseGearFill BsAwardFill/></span>
                            <span>Study Zone</span>
                            </Link>
                            </li>


                            <li>
                            <Link to='/dashboard' className="flex lg:mx-3 my-1 hover:text-blue-500 text-semibold mt-10" >
                            <span className=" dark:text-black  shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
                            <BsPersonBadge />
                            </span>
                            <span className="mt-2">Profile</span>
                            </Link>
                            </li>
                                        
                            </ul>
                        </div>
                    </div>
                </div>

                    {/* Drawer For Mobile Device */}
                <div className="navbar-end p-2 md:flex hidden">
                <div className="py-2 flex">
                    <h1 className='mx-2 flex items-center text-gray-400'>Light</h1>
                        {/* <Switch onClick={handleThemeSwitch} checked={enabled} onChange={setEnabled}
                            className={`${enabled ? 'darkLight' : 'darkMood'}
                                relative inline-flex h-[20px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                                pointer-events-none inline-block h-[15px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch> */}
                    <h1 className='mx-2 flex items-center text-gray-400'>Night</h1>
                </div>
                </div>

            </div>
        </div>
    );
};

export default DashboardNavBar;