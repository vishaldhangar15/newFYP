import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
const ProfilePage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - Photo and other content */}
      <div className="flex-1  p-4">
        {/* Left side content */}
        <div className="flex h-full flex-col ">
          <div className="h-[80%] w-full flex flex-col justify-center items-center ">
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
      <div className="flex-1 p-4  ">
        <div className="max-w-md mx-">
          <h2 className="text-2xl  font-bold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-2">
            <div>
              <label className="text-white font-bold p-2">Name:</label>
              <span className="text-gray-300">John Doe</span>
            </div>
            <div>
              <label className="text-white font-bold p-2">Email:</label>
              <span className="text-gray-300  ">john@example.com</span>
            </div>
            <div>
              <label className="text-white font-bold p-2">Email:</label>
              <span className="text-gray-300">john@example.com</span>
            </div>
            <div>
              <label className="text-white font-bold p-2">Email:</label>
              <span className="text-gray-300">john@example.com</span>
            </div>
            {/* Add more details as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
