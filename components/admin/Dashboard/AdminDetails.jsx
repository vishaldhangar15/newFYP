import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const AdminDetails = ({ complaintsNo }) => {
  return (
    <Card x-chunk="dashboard-05-chunk-1">
      <CardHeader className="pb-2">
        <CardDescription>Total Active Complaints</CardDescription>
        <CardTitle className="text-4xl">{complaintsNo}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">
          Complaints are pending
        </div>
      </CardContent>
      <CardFooter>
        <Progress value={100} aria-label="25% increase" />
      </CardFooter>
    </Card>
  );
};

export default AdminDetails;
