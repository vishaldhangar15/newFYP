import NavBar from '@/components/Navbar/Navbar';
import Dashboard from '@/components/student/Dashboard/Dashboard';
const page = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-16">
        <Dashboard />
      </div>
    </div>
  );
};

export default page;
