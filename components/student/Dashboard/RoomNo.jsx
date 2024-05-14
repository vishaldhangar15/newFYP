import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
const RoomNo = ({ RoomNo }) => {
  // set the first char of the room no as the block name
  const blockName = RoomNo?.charAt(0) + ' ' + 'Block';
  return (
    <div>
      {' '}
      <Card x-chunk="dashboard-05-chunk-2">
        <CardHeader className="pb-2">
          <CardDescription>This Month</CardDescription>
          <CardTitle className="text-4xl">{RoomNo}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">{blockName}</div>
        </CardContent>
        <CardFooter>
          <Progress value={100} aria-label="12% increase" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default RoomNo;
