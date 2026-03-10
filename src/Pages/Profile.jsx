import bgImage from '../assets/logoBanner.jpg';

const Profile = () => {
    return (
        <main>
            <HeroSection />
            <ProfileSection />
        </main>
    );
};

//* HeroSection component
const HeroSection = () => {
    return (
        <section className="relative block h-100 overflow-hidden">
            <div className="absolute -top-15 w-full h-full bg-center bg-cover" style={{
                backgroundImage: `url(${bgImage})`
            }
            }>
                <span id="blackOverlay" className="w-full absolute opacity-50 bg-black"></span>
            </div >
            <div className="top-18 bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden " style={{ transform: "translateZ(0px)" }}>
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </section>
    );
};

//* ProfileSection component
const ProfileSection = ({ user, logUser, refetch }) => {
	
    return (
        <section className="relative dark:bg-slate-800">
            <div className="container mx-auto ">
                <div className="relative -mt-34 flex flex-col min-w-0 wrap-break-word bg-base-200 min-h-screen dark:bg-slate-800 w-full shadow-xl rounded-lg">

                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                                {/* Profile Image */}
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">

                                <label htmlFor="Profile-Pic-Update" title="Change image" className="relative cursor-pointer group">
                                <div className="avatar online -m-19.5 -ml-20 lg:-ml-16">
                                <div className="w-24 rounded-full border group-hover:border-none ring group-hover:ring-primary ring-offset-base-100 ring-offset-2">
                                {/* {
                                    user?.photoURL &&
                                    <img alt="..." src={logUser?.image} className="shadow-xl rounded-full h-auto w-[200px] align-middle border-none absolute max-w-[150px] " />
                                } */}
                                </div>
                                </div>
                                </label>

                                {/* {
                                    !user?.photoURL &&
                                <label>
                                <div className="avatar online -m-[78px] -ml-20 lg:-ml-16">
                                <div className="w-24 rounded-full border group-hover:border-none ring group-hover:ring-primary ring-offset-base-100 ring-offset-2">
                                
                                <img
                                className="shadow-xl rounded-full h-auto w-[200px] align-middle border-none absolute max-w-[150px]"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
                                alt="" />
                                </div>
                                </div>
                                </label>
                                } */}

                            </div>
                        </div>


                        
                        {/* User Name & Email */}
                        <div className="text-center lg:mt-12">
                            <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                                {/* {user?.displayName} */} Hasan
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
                                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400">
                                    {/* {user?.email} */} hasan@gmail.com
                                </i>

                            </div>
                            <div className="mb-2 flex lg:justify-end -ml-52 lg:-ml-0 lg:-mt-10">
                                {/* More details Button */}
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                <label className="cursor-pointer text-orange-600 hover:underline" htmlFor="profile_User_More_Info" >More details</label>
                            </div>
                            </div>

                                {/* User ID */}
                                {/* <div>
                                    <div className="lg:py-16 py-5">
                                        <div className=" text-center flex">
                                            <span className="mx-1">{logUser?.role}</span>
                                            {user?.uid && <span className="mx-1">ID : </span>}
                                            <span className="mx-1">{user?.uid?.slice(0,10)}</span>
                                        </div>
                                    </div>
                                </div> */}
                        </div>



                        {/* Payment List */}
                       


                            {/* {
                                logUser?.role === 'Admin' &&
                                <Settings />
                            } */}



                                        
                    </div>
                </div>
            </div>


            

                {/* More Button Modal */}
                {/* <ProfileUserMoreInfoModal user={user} logUser={logUser} refetch={refetch} /> */}

                {/* Profile Pic Update */}
                {/* <ProfilePicUpdate /> */}
        </section>
    );
};

export default Profile;