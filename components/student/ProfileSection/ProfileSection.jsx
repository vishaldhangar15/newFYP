import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProfilePage = ({ student }) => {
  const name = student?.firstName + ' ' + student?.lastName;

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - Photo and other content */}
      <div className="flex-1  p-4">
        {/* Left side content */}
        <div className="flex h-full flex-col ">
          <div className="h-[80%] w-full flex flex-col justify-center items-center ">
            <div>
              <label className="text-primary text-4xl  font-bold p-2">
                My Profile
              </label>
            </div>
            <div>
              <Avatar className="w-48 h-48 m-16 ">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" />
              </div>
            </div>
          </div>

          {/* Add other content here */}
        </div>
      </div>
      {/* Right side - Details */}
      <div className="flex-1 p-4 ">
        <div className="max-w-md mx- ">
          <Card className=" bg-transparent">
            <CardHeader>
              <CardTitle className="text-green-700 text-2xl font-bold p-2 ">
                Details:
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <div className="flex flex-col gap-6">
                  <div>
                    <label className="text-foreground text-lg  font-bold p-2">
                      Name:
                    </label>
                    <span className="text-foreground "> {name} </span>
                  </div>
                  <div>
                    <label className="text-foreground text-lg font-bold p-2">
                      Email:
                    </label>
                    <span className="text-foreground">{student?.email}</span>
                  </div>
                  <div>
                    <label className="text-foreground text-lg font-bold p-2">
                      Registration No.:
                    </label>
                    <span className="text-foreground"> {student?.regNo} </span>
                  </div>
                  <div>
                    <label className="text-foreground text-lg font-bold p-2">
                      Phone No.:
                    </label>
                    <span className="text-foreground">{student?.phoneNo}</span>
                  </div>
                  <div>
                    <label className="text-foreground text-lg font-bold p-2">
                      Parents Phone No.:
                    </label>
                    <span className="text-foreground">
                      {student?.parentPhoneNo}
                    </span>
                  </div>
                  <div>
                    <label className="text-foreground text-lg font-bold p-2">
                      Year:
                    </label>
                    <span className="text-foreground">
                      {student?.yearOfStudy}
                    </span>
                  </div>
                  <div>
                    <label className="text-foreground text-lg font-bold p-2">
                      Branch:
                    </label>
                    <span className="text-foreground">Electronics</span>
                  </div>
                </div>
              </p>
            </CardContent>
            <CardFooter>
              {/* <p>
                <Button className="bg-green-700 ">Update Profile</Button>
              </p> */}
            </CardFooter>
          </Card>

          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
