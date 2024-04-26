import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useContext } from 'react';
const MiniProfile = ({ firstName, lastName, hadncleActive }) => {
  // name is the combinaion of first name and last name
  const Name = firstName + ' ' + lastName;
  return (
    <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
      <CardHeader className="pb-3">
        <CardTitle>{Name}</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Introducing Our Dynamic Orders Dashboard for Seamless Management and
          Insightful Analysis.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button onClick={() => hadncleActive('Profile')}>View Profile</Button>
      </CardFooter>
    </Card>
  );
};

export default MiniProfile;
