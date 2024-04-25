import NavBar from '@/components/Navbar/Navbar';
import SignIn from '@/components/student/signin/signin';
const page = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen  text-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <SignIn />
      </div>
    </div>
  );
};

export default page;
