import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  Home,
  PanelLeft,
  Package2,
  MessageSquare,
  User,
  Settings,
  AudioLines,
} from 'lucide-react';
import Link from 'next/link';
const MobileSidebar = ({ hadncleActive, active }) => {
  const curr = 'flex items-center gap-4 px-2.5 text-foreground';

  const notActive =
    'flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground';
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">Hosteller</span>
          </Link>
          <Link href="#" className={active === 'Dashboard' ? curr : notActive}>
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="#"
            onClick={() => hadncleActive('Complaints')}
            className={active === 'Complaints' ? curr : notActive}
          >
            <MessageSquare className="h-5 w-5" />
            Complaint
          </Link>
          <Link
            href="#"
            onClick={() => hadncleActive('Leave')}
            className={active === 'Leave' ? curr : notActive}
          >
            <AudioLines className="h-5 w-5" />
            Leave
          </Link>
          <Link
            href="#"
            onClick={() => hadncleActive('Profile')}
            className={active === 'Profile' ? curr : notActive}
          >
            <User className="h-5 w-5" />
            Profile
          </Link>
          <Link
            href="#"
            onClick={() => hadncleActive('Settings')}
            className={active === 'Settings' ? curr : notActive}
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
