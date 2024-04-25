import React from 'react';
import MiniProfile from '../Dashboard/MiniProfile';
import StudentDetails from '../Dashboard/StudentDetails';
import ComplaintTable from '../Dashboard/ComplaintTable';
import RoomNo from '../Dashboard/RoomNo';
import LeaveTable from '../Dashboard/leavesTable';
const Home = () => {
  return (
    <div>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <MiniProfile />
            <StudentDetails />
            <RoomNo />
            No of leaves card here
          </div>
          <ComplaintTable />]
        </div>
        <div>
          <LeaveTable />
        </div>
      </main>
    </div>
  );
};

export default Home;
