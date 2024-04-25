'use client';
import MiniProfile from './MiniProfile';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  // Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  ShoppingCart,
  Users2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  console.log(active);
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* side navbar here */}
      <SideNavBar hadncleActive={hadncleActive} active={active} />
      {/* side navbar here */}
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          {/* BreadCrumb Here  */}
          <BreadCrumb />
          {/* BreadCrumb Here  */}
        </header>
        {/* main text area here  */}
        {active == 'Dashboard' && <DashBoardLandingPage />}
        {active == 'Profile' && <ProfileSection />}
        {active == 'Leave' && <LeaveSection />}
        {active == 'Complaints' && <ComplaintSection />}
        {active == 'Settings' && <SettingsSection />}
        {/* main text area here  */}
      </div>
    </div>
  );
};

export default Dashboard;
