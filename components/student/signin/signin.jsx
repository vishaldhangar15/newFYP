'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { loginStudent } from '@/backend/student';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter();
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });
  const handlechange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    event.preventDefault();
    const res = await loginStudent(loginDetails);
    console.log('this is res');
    console.log(res);
    if (res.status == 200) {
      toast.success(res.message);
      router.push('/student/dashboard');
    } else {
      toast.error(res.message);
    }
  };
  return (
    <div className="w-full  text-foreground lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={handlechange}
                value={loginDetails.email}
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                onChange={handlechange}
                value={loginDetails.password}
                name="password"
                type="password"
                required
              />
            </div>
            <Button onClick={handleSubmit} type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/student/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default SignIn;
