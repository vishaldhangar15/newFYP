'use client';
import AdminSideBar from './AdminSideBar';
import AdminMiniProfile from './AdminMiniProfile';
import AdminMobileNavBar from './AdinMobileNavBar';
import AdminDetails from './AdminDetails';
import AdminBreadCrumb from './AdminBreadCrumb';
import AdminRoomNo from './AdminRoomNo';
import AdminComplaintTable from './AdminComplaintTable';
import AdminLeveTable from './AdminLeveTable';
import AdminDashboardLandingPage from './AdminDashboardLandingPage';
import AdminComplaintSection from '../complaintSection/AdminComplaintSection';
import AdmitStudent from '../AdmitStudent/AdmitStudent';
import AddEvent from '../AddEvent/AddEvent';
import AdminSettings from '../AdminSettings/AdminSettings';
import { useState } from 'react';
const AdminDashboard = () => {
  const [active, setActive] = useState('Dashboard');
  const hadncleActive = (link) => {
    setActive(link);
  };
  return (
    <div className="flex mt-16 min-h-screen w-full flex-col bg-muted/40">
      {/* navbar here       */}
      <AdminSideBar hadncleActive={hadncleActive} active={active} />
      {/* navbar here       */}

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          {/* mobile navbar sheet here  */}
          <AdminMobileNavBar hadncleActive={hadncleActive} active={active} />
          {/* mobile navbar sheet here  */}
          {/* admin breadcrumb here  */}
          <AdminBreadCrumb active={active} />
          {/* admin breadcrumb here  */}
        </header>
        {/* maint content area here  */}
        {active === 'Dashboard' && <AdminDashboardLandingPage />}
        {active === 'Complaints' && <AdminComplaintSection />}
        {active === 'AdmitStudent' && <AdmitStudent />}
        {active === 'AddEvent' && <AddEvent />}
        {active === 'Settings' && <AdminSettings />}
      </div>
    </div>
  );
};

export default AdminDashboard;
