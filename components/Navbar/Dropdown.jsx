import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

const Dropdown = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-foreground px-4 py-2 ">
          Get In
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {/* <DropdownMenuLabel>Get In</DropdownMenuLabel>
          <DropdownMenuSeparator /> */}
          <Link href="/student/signin">
            <DropdownMenuItem>Student Login/Signup</DropdownMenuItem>
          </Link>
          <Link href="/admin/signin">
            <DropdownMenuItem>Admin Login</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
