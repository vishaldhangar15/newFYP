import NavBar from '@/components/Navbar/Navbar';
import SignupPage from '@/components/student/signup/signup';
const page = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen  text-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <SignupPage />
      </div>
    </div>
  );
};

export default page;
