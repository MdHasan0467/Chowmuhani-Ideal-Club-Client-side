// import { div } from "framer-motion/client"
import { useEffect, useState } from "react";
// import EventList from "../components/Events/EventList";
import Aos from "aos";
import { useQuery } from "@tanstack/react-query";
import EventBanner from "../components/Events/EventBanner";
import EventList from "../components/Events/EventList";
import DynamicEvent from "../components/Events/DynamicEvent";

const Events = () => {

    useEffect(() => {
        Aos.init();
    },[])

    const [dynamicEvents, setDynamicEvents] = useState()
    
    //* All events data load
        const { data: eventList = [] } = useQuery({
            queryKey: ['eventList'],
            queryFn: async () => {
                try {
                    const res = await fetch('https://study-zone-server-olive.vercel.app/events');
                    const data = await res.json();
                    console.log('hasan',data)
                        return data?.result;
                } catch (err) {
                    console.error(err);
                }
            },
        })



//* Handle dynamic event data load
    const displayEvent = (data) => {
        fetch(`https://study-zone-server-olive.vercel.app/events/${data?._id}`)
        .then(res => res.json())
        .then(result => setDynamicEvents(result.result))
    }


    return (
        <div>
                    <div className="dark:bg-black pt-52 dark:text-white">
            <EventBanner />
            <div className="lg:grid lg:grid-cols-12 mx-auto gap-y-6 md:gap-10 lg:mx-10">
                <div className="col-span-3">
                    <EventList eventList={eventList} displayEvent={displayEvent} />
                </div>
                
                <div className="lg:col-span-9">
                    <DynamicEvent dynamicEvents={dynamicEvents} eventList={eventList} />
                </div>

            </div>
        </div>
        </div>
    )
}
export default Events;