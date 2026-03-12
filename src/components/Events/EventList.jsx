import Aos from "aos";
import { useEffect } from "react";


const EventList = ({eventList, displayEvent}) => {
    useEffect(() => {
        Aos.init();
    },[])
    return (
        <div>
                <div className="mb-8 space-x-5 dark:border-violet-400 mx-5 md:mx-0">
                    <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400">সামাজিক কাজ</button>
                    <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400">খেলাধুলা</button>
                </div>

                <div className="lg:flex lg:flex-col lg:divide-y lg:divide-gray-700 grid grid-cols-3 ml-10 md:ml-2">
                    
                    {
                        eventList?.map((data, idx) => 
                        <div data-aos="zoom-in" key={idx} className="lg:flex px-1 py-4">
                        <img onClick={()=>displayEvent(data)} alt="" className="shrink-0 cursor-pointer object-cover 
                        w-20 lg:w-20 lg:h-20 mr-4 dark:bg-gray-500" src={data?.image} />
                        <div className="flex flex-col grow mt-2 md:mt-0">
                            <a onClick={()=>displayEvent(data)} href="#" className="font-serif hover:underline text-sm">
                                {data?.title}
                            </a>
                            <p onClick={()=>displayEvent(data)} className="mt-auto text-xs dark:text-gray-400">
                                
                                <div className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">
                                <span className="hidden md:flex">{data?.description}</span>
                                {data?.description.length >= 20 ?
                                <span className="md:hidden">{data?.description.slice(0,20)}...</span>
                                :
                                <span className="md:hidden">{data?.description}</span>
                                }
                                </div>
                            </p>
                            <p className="mt-auto text-xs dark:text-gray-400">
                                {data?.uploadedTime?.slice(0,15)}
                                <span className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">{data?.uploadedDay?.slice(0,15)}</span>
                            </p>
                        </div>
                    </div> 
                    
                    )}
                    
                </div>
        </div>
    );
};

export default EventList;