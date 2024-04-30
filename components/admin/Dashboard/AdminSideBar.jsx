import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import {
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
  NotebookPen,
  calenderch,
  MessageSquare,
  CalendarCheck,
} from 'lucide-react';
const AdminSideBar = ({ hadncleActive, active }) => {
  const activeLink =
    'flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8';
  const notActiveLink =
    'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8';

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={active === 'Dashboard' ? activeLink : notActiveLink}
                onClick={() => hadncleActive('Dashboard')}
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={
                  active === 'AdmitStudent' ? activeLink : notActiveLink
                }
                onClick={() => hadncleActive('AdmitStudent')}
              >
                <NotebookPen className="h-5 w-5" />
                <span className="sr-only">Admit Student</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Admit Student</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={active === 'Complaints' ? activeLink : notActiveLink}
                onClick={() => hadncleActive('Complaints')}
              >
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Complaints</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Complaints</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={active === 'AddEvent' ? activeLink : notActiveLink}
                onClick={() => hadncleActive('AddEvent')}
              >
                <CalendarCheck className="h-5 w-5" />
                <span className="sr-only">Add Event </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Add Event</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={active === 'Settings' ? activeLink : notActiveLink}
                onClick={() => hadncleActive('Settings')}
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default AdminSideBar;
