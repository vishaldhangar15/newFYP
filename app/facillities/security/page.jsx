import React from 'react';
import NavBar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';

const Page = () => {
  return (
    <div>
      <NavBar />
      <section className="text-foreground border-b border-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div
            className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex center justify-center"
            style={{
              boxShadow: '11px 11px 22px #171b22, -11px -11px 22px #576780',
            }}
          >
            <Image
              alt="feature"
              width={720}
              height={600}
              className="object-cover object-center h-full w-full"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div
                className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-5"
                style={{
                  boxShadow: '11px 11px 28px #272e3a, -11px -11px 28px #475468',
                }}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="#10bcf6"
                    d="M302.2 5.4c10.7-7.2 24.8-7.2 35.5 0L473.7 96H592c26.5 0 48 21.5 48 48V272c0-61.9-50.1-112-112-112s-112 50.1-112 112v24.6c-19.1 11.1-32 31.7-32 55.4H320.3l-.3 0c-35.3 0-64 28.7-64 64v96h64v0H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48H166.3L302.2 5.4zM80 208v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zm0 128v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zm240-72a88 88 0 1 0 0-176 88 88 0 1 0 0 176zm16-120v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H320c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16s16 7.2 16 16zm192 96c-17.7 0-32 14.3-32 32v48h64V272c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32V272z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-foreground text-lg title-font font-medium mb-3">
                  Security
                </h2>
                <p className="text-foreground mb-4 md:text-lg">
                  At VJTI Hostel, we prioritize the safety and security of our
                  residents above all else. That&apos;s why we&apos;ve
                  implemented a comprehensive security system to ensure that you
                  feel safe and protected at all times.
                </p>
                <p className="text-foreground mb-4 md:text-lg">
                  Our hostel is equipped with 24/7 surveillance cameras
                  strategically placed throughout the premises, allowing our
                  security team to monitor and respond to any potential threats
                  or incidents promptly.
                </p>
                <p className="text-foreground mb-4 md:text-lg">
                  Access to the hostel is strictly controlled, with a secure
                  entry system that requires residents to present their personal
                  hostel ID cards for entry and exit. This ensures that only
                  authorized individuals can enter the premises, providing an
                  added layer of security.
                </p>
                <p className="text-foreground mb-4 md:text-lg">
                  Our dedicated security personnel are trained professionals who
                  are always on duty, conducting regular patrols and maintaining
                  a vigilant presence. They are readily available to assist you
                  with any security concerns or emergencies that may arise.
                </p>
                <p className="text-foreground mb-4 md:text-lg">
                  In addition to our physical security measures, we also
                  prioritize the emotional and mental well-being of our
                  residents. Our team is trained to handle sensitive situations
                  with care and discretion, ensuring that you feel supported and
                  protected at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer footerbg1="gray-800" footerbg2="gray-700" />
    </div>
  );
};

export default Page;
