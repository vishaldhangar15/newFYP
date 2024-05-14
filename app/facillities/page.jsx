import React from 'react';
import NavBar from '@/components/Navbar/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';

const Page = () => {
  return (
    <div>
      <NavBar />
      <section className="text-muted-foreground body-font border-b">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-primary mb-4">
              Facilities We Provide
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-foreground text-opacity-80">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mb-10 -mt-4 space-x-2 md:space-y-0 space-y-6 justify-evenly">
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center cursor-pointer transition-shadow duration-200 hover:shadow-[11px_11px_28px_#272e3a,-11px_-11px_28px_#475468] border rounded-lg">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <svg
                  className="w-10 h-10"
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
                <p className="leading-relaxed text-base">
                  At VJTI Hostel, we prioritize the safety and security of our
                  residents above all else. That is why we have implemented a
                  comprehensive security system to ensure that you feel safe and
                  protected at all times. Our hostel is equipped with
                  surveillance cameras.
                </p>
                <Link
                  className="mt-3 text-primary inline-flex items-center"
                  href="/facillities/security"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center cursor-pointer transition-shadow duration-200 hover:shadow-[11px_11px_28px_#272e3a,-11px_-11px_28px_#475468] border border-gray-600 rounded-lg">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <svg
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="#ffa7a7"
                    d="M218.3 8.5c12.3-11.3 31.2-11.3 43.4 0l208 192c6.7 6.2 10.3 14.8 10.3 23.5H336c-19.1 0-36.3 8.4-48 21.7V208c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64V416H112c-26.5 0-48-21.5-48-48V256H32c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8.1-35.2l208-192zM352 304V448H544V304H352zm-48-16c0-17.7 14.3-32 32-32H560c17.7 0 32 14.3 32 32V448h32c8.8 0 16 7.2 16 16c0 26.5-21.5 48-48 48H544 352 304c-26.5 0-48-21.5-48-48c0-8.8 7.2-16 16-16h32V288z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-foreground text-lg title-font font-medium mb-3">
                  Home Like Environment
                </h2>
                <p className="leading-relaxed text-base">
                  At VJTI Hostel, we understand the importance of feeling at
                  home, even when you are away from home. That is why we have
                  created a warm and welcoming environment that fosters a strong
                  sense of community among our residents.
                </p>
                <Link
                  className="mt-3 text-primary inline-flex items-center"
                  href="/facillities/home"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center cursor-pointer transition-shadow duration-200 hover:shadow-[11px_11px_28px_#272e3a,-11px_-11px_28px_#475468] border border-gray-600 rounded-lg">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <svg
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fbbb1c"
                    d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-foreground text-lg title-font font-medium mb-3">
                  Sports
                </h2>
                <p className="leading-relaxed text-base">
                  At VJTI Hostel, we believe in promoting a healthy and active
                  lifestyle for our residents. That is why we offer access to a
                  wide range of sports facilities, gyms, and grounds or courts,
                  ensuring that you have ample opportunities to engage in
                  physical activities and stay fit.
                </p>
                <Link
                  className="mt-3 text-primary inline-flex items-center"
                  href="/facillities/sports"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
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
