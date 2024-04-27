'use client';
import Link from 'next/link';
import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import Togglebtn from '../ToggleBtn/Togglebtn';
const NewNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link href="/" className="ml-2 font-bold text-xl flex">
              ShadcnUI/React
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Togglebtn />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={'right'}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {navLinks.map((link) => (
                    <Link key={link.id} href={link.url}>
                      <Button variant="link">{link.text}</Button>
                    </Link>
                  ))}
                  <Button className="w-[110px] border" variant="secondary">
                    <Link
                      href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                      target="_blank"
                    >
                      <GitHubLogoIcon className="mr-2 w-5 h-5" />
                      Github
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.url}>
                <Button variant="link">{link.text}</Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <Button className="w-[110px] border" variant="secondary">
              <Link
                href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                target="_blank"
              >
                <GitHubLogoIcon className="mr-2 w-5 h-5" />
                Github
              </Link>
            </Button>
            <Togglebtn />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default NewNavBar;
