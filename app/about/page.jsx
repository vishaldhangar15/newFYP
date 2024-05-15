import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
function About() {
  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center max-auto ">
        <div className="mt-16  ">
          <div className="about border-4 w-screen  min-h-screen bg-grey/[0.96]  bg-grid-white/[0.2] text-foreground">
            <div className="container    mt-0">
              <h1 className="text-3xl font-bold mb-2 md:text-4xl text-primary text-center">
                About Us
              </h1>
              <p className="mb-8 text-white-400 md:text-lg text-justify">
                Welcome to VJTI Hostel, where we strive to provide a safe,
                comfortable, and nurturing environment for students seeking a
                home away from home. Our hostel is more than just a place to
                stay – it is a community that fosters personal growth, academic
                excellence, and lifelong friendships.
              </p>
              <h2 className="text-2xl font-bold mb-2 md:text-3xl  text-primary text-center">
                Our Mission
              </h2>
              <p className="mb-8 text-white-400 md:text-lg text-center">
                At VJTI Hostel, our mission is to create a supportive and
                inclusive atmosphere that empowers students to thrive
                academically, socially, and personally. We believe that a
                comfortable living environment is crucial for student success,
                and we strive to provide top-notch facilities and services that
                cater to the diverse needs of our residents.
              </p>
              <h2 className="text-2xl font-bold mb-2 md:text-3xl  text-primary text-center">
                Facilities and Services
              </h2>
              <ul className="list-style-type:none pl-6 mb-8 text-white-400 md:text-lg mx-auto max-w-3xl">
                <div className="">
                  <div className="display: flex">
                    <li className="mb-2 px-12">Well-maintained rooms</li>
                    <li className="mb-2 px-10">Study Areas</li>
                  </div>
                  <div className="display: flex">
                    <li className="mb-2 px-12">Dedicated Mess hall</li>
                    <li className="mb-2 px-16">High-speed internet</li>
                  </div>
                  <div className="display: flex">
                    <li className="mb-2 px-12">Laundry facilities</li>
                    <li className="mb-2 px-20">24/7 security </li>
                  </div>
                </div>
              </ul>
              <h2 className="text-2xl font-bold mb-2 md:text-3xl  text-primary text-center">
                Hostel Management System
              </h2>
              <p className="mb-8 text-white-400 md:text-lg text-center">
                Our state-of-the-art hostel management system streamlines the
                process of booking accommodations, applying for mess services,
                and managing your hostel ID card. With our user-friendly
                platform, you can easily:
              </p>
              <ul className="list-disc pl-6 mb-6 text-white-400 md:text-lg mx-auto max-w-3xl">
                <li className="mb-2">Book your hostel room online</li>
                <li className="mb-2">
                  Apply for mess services and manage your meal plan
                </li>
                <li className="mb-2">
                  Obtain your personal hostel ID card for seamless entry and
                  exit
                </li>
                <li className="mb-2">
                  Monitor your meal attendance and account balance
                </li>
              </ul>
              <h2 className="text-2xl font-bold mb-2 md:text-3xl  text-primary text-center">
                Our Team
              </h2>
              <p className="mb-8 text-white-400 md:text-lg text-center">
                At VJTI Hostel, we take pride in our dedicated team of
                professionals who work tirelessly to ensure a comfortable and
                enriching experience for our residents. Our team comprises
                experienced hostel staff, security personnel, and support staff
                who are committed to providing exceptional service and
                addressing any concerns or issues promptly.
              </p>
              <p className="text-foreground md:text-lg text-center">
                Join our vibrant community today and experience the convenience,
                comfort, and camaraderie that VJTI Hostel has to offer. Contact
                us to learn more about our hostel and the application process.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
