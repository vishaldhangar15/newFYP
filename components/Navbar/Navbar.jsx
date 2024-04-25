'use client';
import Dropdown from './Dropdown';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import getTokens from '@/backend/getTokens';
import { Button } from '../ui/button';
import logout from '@/backend/logout';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [accessToken, setaccessToken] = useState();
  const [refreshToken, setrefreshToken] = useState();
  const navLinks = [
    {
      id: 1,
      text: 'Home',
      url: '/',
    },
    {
      id: 2,
      text: 'About',
      url: '/#about',
    },
    {
      id: 3,
      text: 'Facillities',
      url: '/#facillities',
    },
  ];
  // getting tokens
  const token = async () => {
    const { accessToken, refreshToken } = await getTokens();
    setaccessToken(accessToken);
    setrefreshToken(refreshToken);
  };
  useEffect(() => {
    token();
  }, []);

  console.log(accessToken, refreshToken);

  const logoutHandler = async () => {
    setNavbar(!navbar);
    const res = await logout();
    if (res.status === 200) {
      toast.success(res.message);
      router.push('/');
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="Navbar relative">
      <nav className="fixed top-0 left-0 right-0 md:bg-[#0000001a] shadow-sm backdrop-blur-md z-10 p-4">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <div className="text-2xl text-white font-bold ">Logo</div>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <div>
                      <Cross1Icon className="text-white h-4 w-4 " />
                    </div>
                  ) : (
                    <div>
                      <HamburgerMenuIcon className="text-white h-4 w-4 " />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex sm:text-base text-lg font-bold">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className="md:text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 border-purple-900 hover:underline md:hover:bg-transparent"
                  >
                    {/* <Link
                      className="no-underline font-semibold py-2 px-4 rounded-lg hover:bg-[#ffffff33] hover:shadow-md hover:backdrop-blur-md"
                      href={link.url}
                      onClick={() => setNavbar(!navbar)}
                    >
                      {link.text}
                    </Link> */}
                    <Button href={link.url} variant="link">
                      {link.text}
                    </Button>
                  </li>
                ))}
                {refreshToken === undefined ? (
                  <>
                    <li className="md:text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 border-purple-900 hover:underline md:hover:bg-transparent md:hidden ">
                      {/* <Link
                        className="no-underline font-semibold py-2 px-4 rounded-lg hover:bg-[#ffffff33] hover:shadow-md hover:backdrop-blur-md"
                        href="/student/signup"
                        onClick={() => setNavbar(!navbar)}
                      >
                        Studnet Login / Signup
                      </Link> */}
                      <Button
                        onClick={() => setNavbar(!navbar)}
                        variant="link"
                        href="/student/signin"
                      >
                        Student Login/ Signup
                      </Button>
                    </li>
                    <li className="md:text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 border-purple-900 hover:underline md:hover:bg-transparent md:hidden ">
                      {/* <Link
                        className="no-underline font-semibold py-2 px-4 rounded-lg hover:bg-[#ffffff33] hover:shadow-md hover:backdrop-blur-md"
                        href="#"
                        onClick={() => setNavbar(!navbar)}
                      >
                        Admin Login
                      </Link> */}
                      <Button
                        onClick={() => setNavbar(!navbar)}
                        variant="link"
                        href="#"
                      >
                        Admin Login
                      </Button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="md:text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 border-purple-900 hover:underline md:hover:bg-transparent md:hidden ">
                      <Button onClick={logoutHandler}>LogOut</Button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {refreshToken == undefined ? (
            <div className="hidden md:block">
              <Dropdown />
            </div>
          ) : (
            <Button onClick={logoutHandler} className="hidden md:block">
              LogOut
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
