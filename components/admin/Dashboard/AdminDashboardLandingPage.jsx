import AdminMiniProfile from './AdminMiniProfile';
import AdminDetails from './AdminDetails';
import AdminRoomNo from './AdminRoomNo';
import AdminComplaintTable from './AdminComplaintTable';
import AdminLeveTable from './AdminLeveTable';
import { getComplaints } from '@/backend/admin';
import { getRegisteredStudents } from '@/backend/admin';
import { useEffect, useState } from 'react';
const AdminDashboardLandingPage = () => {
  const [complaints, setComplaints] = useState([]);
  const [registeredStudents, setRegisteredStudents] = useState([]);
  const fetchComplaints = async () => {
    const res = await getComplaints();
    if (res.status === 200) {
      setComplaints(res.data);
    }
  };
  const getStudentsData = async () => {
    const res = await getRegisteredStudents();
    if (res.status === 200) {
      setRegisteredStudents(res.data);
    }
  };
  useEffect(() => {
    fetchComplaints();
    getStudentsData();
  }, []);

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          {/* admin miniprofile  */}
          <AdminMiniProfile />
          {/* admin details here  */}
          <AdminDetails complaintsNo={complaints.length} />
          {/* admin roomNo here */}
          <AdminRoomNo NewlyRegistered={registeredStudents.length} />
        </div>
        {/* admin complant table  */}
        <AdminComplaintTable complaints={complaints} />
      </div>
      <div>
        {/* admin leave table  */}
        <AdminLeveTable registeredStudents={registeredStudents} />
      </div>
    </main>
  );
};

export default AdminDashboardLandingPage;
