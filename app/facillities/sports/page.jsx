import React from 'react';
import NavBar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';

const Page = () => {
  return (
    <div>
      <NavBar />
      <section className="border-b text-foreground body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div
            className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex center justify-center"
            style={{
              boxShadow: '11px 11px 22px #171b22, -11px -11px 22px #576780',
            }}
          >
            <Image
              width={720}
              height={600}
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="https://thumbs.dreamstime.com/b/soccer-team-practicing-football-ground-teenagers-playing-field-182546504.jpg"
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-5 hover:shadow-[11px_11px_28px_#272e3a,-11px_-11px_28px_#475468] border border-gray-600 transition-shadow duration-300">
                <svg
                  className="w-6 h-6"
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
                <p className="text-foreground mb-4 pt-10 md:text-lg">
                  At VJTI Hostel, we believe in promoting a healthy and active
                  lifestyle for our residents. That&apos;s why we offer access
                  to a wide range of sports facilities, gyms, and
                  grounds/courts, ensuring that you have ample opportunities to
                  engage in physical activities and stay fit.
                </p>
                <p className="text-foreground mb-4 md:text-lg">
                  Our on-site gymnasium is equipped with state-of-the-art
                  exercise equipment, including treadmills, exercise bikes,
                  weight machines, and free weights. Whether you&apos;re looking
                  to build strength, improve cardiovascular health, or simply
                  maintain an active lifestyle, our gym has everything you need.
                </p>
                <p className="text-foreground mb-4 md:text-lg">
                  For those who love outdoor sports, we have dedicated grounds
                  and courts for various activities. Our basketball and tennis
                  courts are well-maintained and perfect for practicing your
                  skills or engaging in friendly matches with your fellow
                  residents.
                </p>
                <p className="text-foreground mb-4 md:text-lg">
                  If you&apos;re a fan of team sports, our multipurpose field
                  can accommodate a variety of games, including soccer, cricket,
                  and more. You can join our sports clubs or organize your own
                  games with friends, fostering a sense of community and
                  camaraderie.
                </p>
                <p className="text-foreground mb-4 md:text-lg">
                  In addition to these facilities, we also offer group fitness
                  classes led by experienced instructors. From yoga and Zumba to
                  kickboxing and dance, there&apos;s something for everyone to
                  enjoy.
                </p>
                <p className="text-foreground mb-4 md:text-lg">
                  At VJTI Hostel, we believe that a healthy mind resides in a
                  healthy body. By providing access to these sports facilities,
                  gyms, and grounds/courts, we aim to promote a balanced
                  lifestyle that nurtures both your physical and mental
                  well-being.
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
