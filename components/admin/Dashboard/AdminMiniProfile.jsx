import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const AdminMiniProfile = () => {
  return (
    <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
      <CardHeader className="pb-3">
        <CardTitle>Admin</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Add or delete student , and see complaints and add events
        </CardDescription>
      </CardHeader>
      <CardFooter> </CardFooter>
    </Card>
  );
};

export default AdminMiniProfile;
