import clientPromise from '@/lib/connectDB';
import { NextResponse } from 'next/server';
import generateAccessAndRefreshToken from '@/utils/generateAcessRefreshToken';
import { cookies } from 'next/headers';
export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({
        message: 'Please fill in all the fields',
        status: 400,
      });
    }
    const client = await clientPromise;
    const db = client.db();
    const adminCollection = await db.collection('messAdminDetails');
    const existingAdmin = await adminCollection.findOne({ email });
    if (!existingAdmin) {
      return NextResponse.json({
        message: 'Invalid credentials ',
        status: 400,
      });
    }
    if (existingAdmin.password !== password) {
      return NextResponse.json({
        message: 'Invalid credentials',
        status: 400,
      });
    }

    const cookieStore = cookies();
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      existingAdmin._id
    );
    cookieStore.set('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
    cookieStore.set('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
    // setting role as messAdmin
    cookieStore.set('role', 'messAdmin', {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });

    return NextResponse.json({ message: 'Login successful', status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
