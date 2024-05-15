'use client';
import EventCard from './EventCard';
import { getEvnets } from '@/backend/getEvents';
import { useState, useEffect } from 'react';
const EventSection = () => {
  const [event, setEvent] = useState([]);
  const getdata = async () => {
    const res = await getEvnets();
    setEvent(res?.data);
  };
  useEffect(() => {
    getdata();
  }, []);
  // console.log(event);
  return (
    <div className="">
      <div className="text-primary text-center text-3xl font-extrabold">
        {' '}
        Event Section
        <div>
          {event.length > 0 ? (
            <div className="flex  flex-wrap ">
              {event.map((data) => (
                <EventCard key={data?._id} data={data} />
              ))}
            </div>
          ) : (
            <p className="text-center">No events</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
