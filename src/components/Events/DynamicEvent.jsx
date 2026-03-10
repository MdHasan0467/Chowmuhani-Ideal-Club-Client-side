// import { useContext } from "react";
// import { AuthContext } from "../../Context/AuthProvider";


const DynamicEvent = ({dynamicEvents, eventList}) => {
    // const {loading} = useContext(AuthContext)

    // if(loading) {
    //     return <p className="text-center">Loading...</p>
    // }
    return (
        <div>
                {dynamicEvents?.image ?
                <div>
                    {/* Text Content */}
                    <div className="my-3 border-b p-3">
                        <h1 className="text-center font-semibold text-2xl">{dynamicEvents?.title}</h1>
                        <p className="text-center font-normal text-gray-400">{dynamicEvents?.description}</p>

                        <p className="mt-auto text-xs dark:text-gray-400">{dynamicEvents?.uploadedTime?.slice(0,15)}
                            <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">{dynamicEvents?.uploadedDay?.slice(0,15)}</a>
                        </p>
                    </div>
                    {/* Images */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {dynamicEvents?.image &&
                    <img src={dynamicEvents?.image} alt="" className="w-full h-40" />
                    }
                    {dynamicEvents?.image2 &&
                    <img src={dynamicEvents?.image2} alt="" className="w-full h-40" />
                    }
                    {dynamicEvents?.image3 &&
                    <img src={dynamicEvents?.image3} alt="" className="w-full h-40" />
                    }
                    {dynamicEvents?.image4 &&
                    <img src={dynamicEvents?.image4} alt="" className="w-full h-40" />
                    }
                    {dynamicEvents?.image5 &&
                    <img src={dynamicEvents?.image5} alt="" className="w-full h-40" />
                    }
                    {dynamicEvents?.image6 &&
                    <img src={dynamicEvents?.image6} alt="" className="w-full h-40" />
                    }
                    {dynamicEvents?.image7 &&
                    <img src={dynamicEvents?.image7} alt="" className="w-full h-40" />
                    }
                    {dynamicEvents?.image8 &&
                    <img src={dynamicEvents?.image8} alt="" className="w-full h-40" />
                    }
                    {dynamicEvents?.image9 &&
                    <img src={dynamicEvents?.image9} alt="" className="w-full h-40" />
                    }
                    {dynamicEvents?.image10 &&
                    <img src={dynamicEvents?.image10} alt="" className="w-full h-40" />
                    }
                </div>
                </div>
                :
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {eventList[0]?.image &&
                    <img src={eventList[0]?.image} alt="" className="w-full h-40" />
                    }
                    {eventList[0]?.image2 &&
                    <img src={eventList[0]?.image2} alt="" className="w-full h-40" />
                    }
                    {eventList[0]?.image3 &&
                    <img src={eventList[0]?.image3} alt="" className="w-full h-40" />
                    }
                    {eventList[0]?.image4 &&
                    <img src={eventList[0]?.image4} alt="" className="w-full h-40" />
                    }
                    {eventList[0]?.image5 &&
                    <img src={eventList[0]?.image5} alt="" className="w-full h-40" />
                    }
                    {eventList[0]?.image6 &&
                    <img src={eventList[0]?.image6} alt="" className="w-full h-40" />
                    }
                    {eventList[0]?.image7 &&
                    <img src={eventList[0]?.image7} alt="" className="w-full h-40" />
                    }
                    {eventList[0]?.image8 &&
                    <img src={eventList[0]?.image8} alt="" className="w-full h-40" />
                    }
                    {eventList[0]?.image9 &&
                    <img src={eventList[0]?.image9} alt="" className="w-full h-40" />
                    }
                    {eventList[0]?.image10 &&
                    <img src={eventList[0]?.image10} alt="" className="w-full h-40" />
                    }
                </div>
                }
        </div>
    );
};

export default DynamicEvent;