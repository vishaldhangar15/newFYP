import AdminSideBar from './AdminSideBar';
import AdminMiniProfile from './AdminMiniProfile';
import AdminMobileNavBar from './AdinMobileNavBar';
import AdminDetails from './AdminDetails';
import AdminBreadCrumb from './AdminBreadCrumb';
import AdminRoomNo from './AdminRoomNo';
import AdminComplaintTable from './AdminComplaintTable';
import AdminLeveTable from './AdminLeveTable';

const AdminDashboard = () => {
  return (
    <div className="flex mt-16 min-h-screen w-full flex-col bg-muted/40">
      {/* navbar here       */}
      <AdminSideBar />
      {/* navbar here       */}

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          {/* mobile navbar sheet here  */}
          <AdminMobileNavBar />
          {/* mobile navbar sheet here  */}
          {/* admin breadcrumb here  */}
          <AdminBreadCrumb />
          {/* admin breadcrumb here  */}
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {/* admin miniprofile  */}
              <AdminMiniProfile />
              {/* admin details here  */}
              <AdminDetails />
              {/* admin roomNo here */}
              <AdminRoomNo />
            </div>
            {/* admin complant table  */}
            <AdminComplaintTable />
          </div>
          <div>
            {/* admin leave table  */}
            <AdminLeveTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
