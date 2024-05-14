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
  console.log(event);
  return (
    <div className="">
      <div className="text-primary text-center text-3xl font-extrabold">
        {' '}
        Event Section
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {event.map((data) => (
            <EventCard key={data?._id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
