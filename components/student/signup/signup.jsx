'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { registerStudent } from '@/backend/student';

const SignUp = () => {
  const [setstudentDetails, setSetstudentDetails] = useState({});

  const handlechange = (e) => {
    setSetstudentDetails({
      ...setstudentDetails,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    event.preventDefault();
    const res = await registerStudent(setstudentDetails);
    console.log(res);
    if (res.status === 200) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };
  return (
    <Card className="mx-auto mt-16  max-w-sm  md:max-w-lg">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="firstName">First name</Label>
              <Input onChange={handlechange} id="firstName" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input onChange={handlechange} id="lastName" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={handlechange}
              id="email"
              type="email"
              placeholder="m@example.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Registration Number</Label>
            <Input onChange={handlechange} id="regNo" type="string" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Phone No</Label>
            <Input onChange={handlechange} id="phoneNo" type="string" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Parent Phone No</Label>
            <Input onChange={handlechange} id="parentPhoneNo" type="string" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Transaction ID</Label>
            <Input onChange={handlechange} id="transactionId" type="string" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Year Of Study</Label>
            <Input onChange={handlechange} id="yearOfStudy" type="string" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input onChange={handlechange} id="password" type="password" />
          </div>
          <Button onClick={handleSubmit} type="submit" className="w-full">
            Create an account
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/student/signin" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignUp;
