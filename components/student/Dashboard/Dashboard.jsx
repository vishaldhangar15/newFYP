'use client';
import MiniProfile from './MiniProfile';
import React, { useEffect, useState, createContext } from 'react';
import usePageRefreshEffect from '@/public/customRefreshHook';
import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import SideNavBar from './SideNavBar';
import BreadCrumb from './BreadCrumb';
import { getStudentData } from '@/backend/student';
import Home from '../Home/Home';
import DashBoardLandingPage from '../DashBoardLandingPage/DashBoardLandingPage';
import ProfileSection from '../ProfileSection/ProfileSection';
import LeaveSection from '../LeaveSection/LeaveSection';
import ComplaintSection from '../ComplaintSection/ComplaintSection';
import SettingsSection from '../SettingsSection/SettingsSection';
import MobileSidebar from './MobileSidebar';

const Dashboard = () => {
  const [student, setStudent] = useState('');
  const [active, setActive] = useState();
  const hadncleActive = (link) => {
    setActive(link);
  };
  const getdata = async () => {
    const res = await getStudentData();
    // console.log(res);

    setStudent(res?.data);
  };

  useEffect(() => {
    setActive('Dashboard');
    getdata();
  }, []);
  // console.log(student);
  // console.log(active);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* side navbar here */}
      <SideNavBar hadncleActive={hadncleActive} active={active} />
      {/* side navbar here */}
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          {/* mobile sidebar here  */}
          <MobileSidebar hadncleActive={hadncleActive} active={active} />
          {/* mobile sidebar here  */}
          {/* BreadCrumb Here  */}
          <BreadCrumb active={active} />
          {/* BreadCrumb Here  */}
        </header>
        {/* main text area here  */}
        {student !== null ? (
          <React.Fragment>
            {active === 'Dashboard' && (
              <DashBoardLandingPage
                active={active}
                hadncleActive={hadncleActive}
                student={student}
              />
            )}
            {active === 'Profile' && <ProfileSection student={student} />}
            {active === 'Leave' && <LeaveSection />}
            {active === 'Complaints' && <ComplaintSection />}
            {active === 'Settings' && <SettingsSection />}
          </React.Fragment>
        ) : (
          <>
            <div className="flex items-center justify-center h-screen w-full ">
              <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            </div>
          </>
        )}

        {/* main text area here  */}
      </div>
    </div>
  );
};

export default Dashboard;
