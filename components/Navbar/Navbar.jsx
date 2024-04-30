'use client';
import Dropdown from './Dropdown';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import getTokens from '@/backend/getTokens';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Togglebtn from '../ToggleBtn/Togglebtn';
const NavBar = () => {
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

  // console.log(accessToken, refreshToken);

  return (
    <div className="Navbar relative ">
      <nav className="fixed top-0 left-0 right-0 md:bg-[#0000001a] shadow-sm backdrop-blur-md z-10 p-4">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between   md:block">
              {/* LOGO */}
              <Link href="/">
                <div className="text-2xl text-foreground font-bold ">
                  Hosteller
                </div>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden flex gap-2 justify-center items-center">
                <Togglebtn />
                {refreshToken && (
                  <div
                    className={` mr-2 inline-block ${navbar ? 'hidden' : ''}`}
                  >
                    <Avatar className="text-white h-6 w-6">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                )}
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <div>
                      <Cross1Icon className="text-white h-4 w-4 " />
                    </div>
                  ) : (
                    <>
                      <div className="flex gap-4 ">
                        <div className="f">
                          <HamburgerMenuIcon className="text-white h-6 w-6 " />
                        </div>
                      </div>
                    </>
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
                    className="md:text-foreground   md:px-6 text-center border-b-2 md:border-b-0 border-purple-900 hover:underline md:hover:bg-transparent"
                  >
                    {/* <Link
                      className="no-underline font-semibold py-2 px-4 rounded-lg hover:bg-[#ffffff33] hover:shadow-md hover:backdrop-blur-md"
                      href={link.url}
                      onClick={() => setNavbar(!navbar)}
                    >
                      {link.text}
                    </Link> */}
                    <Link href={link.url}>
                      <Button variant="link">{link.text}</Button>
                    </Link>
                  </li>
                ))}
                {refreshToken === undefined && (
                  <>
                    <li className="md:text-primary text-primary py-2 md:px-6 text-center border-b-2 md:border-b-0 border-purple-900 hover:underline  md:hidden ">
                      <Link href="/student/signin">
                        <Button variant="link"> Studnet Login / Signup </Button>
                      </Link>
                    </li>
                    <li className="md:text-primary text-primary py-2 md:px-6 text-center border-b-2 md:border-b-0 border-purple-900 hover:underline md:hover:bg-transparent md:hidden ">
                      <Link href="/admin/signin">
                        <Button variant="link"> Admin LogIn</Button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {refreshToken == undefined ? (
            <div className="hidden md:flex gap-2">
              <Togglebtn />
              <Dropdown />
            </div>
          ) : (
            <div className=" gap-4 hidden  md:flex   ">
              <Togglebtn />

              <Link href="/student/dashboard">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
              {/*
              <Button onClick={logoutHandler} className="hidden md:block">
                LogOut
              </Button> */}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
