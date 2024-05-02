import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { logoutAdmin } from '@/backend/admin';
const AdminLogOutSection = () => {
  const router = useRouter();
  const logoutHandler = async () => {
    const res = await logoutAdmin();
    if (res.status === 200) {
      toast.success(res.message);
      router.push('/');
    } else {
      toast.error(res.message);
    }
  };
  return (
    <Card x-chunk="dashboard-04-chunk-1">
      <CardHeader className="">
        {/* <CardTitle>Store Name</CardTitle> */}
        <CardDescription className="text-foreground">
          Log Out from the Application{' '}
        </CardDescription>
      </CardHeader>
      {/* <CardContent>
        <form>
          <Input placeholder="Store Name" />
        </form>
      </CardContent> */}
      <CardFooter className="border-t px-6 py-4">
        {/* log out dialog  */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Log Out</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to log out ??
              </AlertDialogTitle>
              {/* <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription> */}
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>
                <Button onClick={logoutHandler} className="">
                  LogOut
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};

export default AdminLogOutSection;
