import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/LandingPage/Hero';
import ImageGallery from '@/components/Gallery/Gallery';
import Footer from '@/components/Footer/Footer';
import NewNavBar from '@/components/Navbar/NewNavBar';
import ContactUs from '@/components/ContactUs/ContactUs';
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-6 sm:mt-0 ">
        <Hero />
      </div>
      <ImageGallery />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default page;
