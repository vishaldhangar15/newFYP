import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
const AdminRoomNo = ({ NewlyRegistered }) => {
  return (
    <Card x-chunk="dashboard-05-chunk-2">
      <CardHeader className="pb-2">
        <CardDescription>Newly Registered</CardDescription>
        <CardTitle className="text-4xl">{NewlyRegistered}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">
          are pending to be approved
        </div>
      </CardContent>
      <CardFooter>
        <Progress value={100} aria-label="12% increase" />
      </CardFooter>
    </Card>
  );
};

export default AdminRoomNo;
