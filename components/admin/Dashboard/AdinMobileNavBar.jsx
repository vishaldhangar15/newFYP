import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  MessageSquare,
  CalendarCheck,
  NotebookPen,
  Search,
  Settings,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const AdminMobileNavBar = ({ active, hadncleActive }) => {
  const currActive = 'flex items-center gap-4 px-2.5 text-foreground';
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
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="#"
            className={active === 'Dashboard' ? currActive : notActive}
            onClick={() => hadncleActive('Dashboard')}
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="#"
            className={active === 'Complaints' ? currActive : notActive}
            onClick={() => hadncleActive('Complaints')}
          >
            <MessageSquare className="h-5 w-5" />
            Complaints
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            onClick={() => hadncleActive('AdmitStudent')}
          >
            <NotebookPen className="h-5 w-5" />
            Admit Student
          </Link>
          <Link
            href="#"
            className={active === 'AddEvent' ? currActive : notActive}
            onClick={() => hadncleActive('AddEvent')}
          >
            <CalendarCheck className="h-5 w-5" />
            Add Event
          </Link>
          <Link
            href="#"
            className={active === 'Settings' ? currActive : notActive}
            onClick={() => hadncleActive('Settings')}
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default AdminMobileNavBar;
