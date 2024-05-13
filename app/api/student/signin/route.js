import clientPromise from '@/lib/connectDB';
import { NextResponse } from 'next/server';
import generateAcessandRefreshToken from '@/utils/generateAcessRefreshToken';
import bcryptjs from 'bcryptjs';
import { NodeNextResponse } from 'next/dist/server/base-http/node';
import { cookies } from 'next/headers';
export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Please fill in all the fields' },
        { status: 400 }
      );
    }
    const client = await clientPromise;
    const db = client.db();
    const studentCollection = await db.collection('students');
    const existingStudent = await studentCollection.findOne({ email });
    if (!existingStudent) {
      return NextResponse.json(
        { message: 'Email does not exist' },
        { status: 400 }
      );
    }
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      existingStudent.password
    );
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: 'Password is incorrect' },
        { status: 400 }
      );
    }

    const { accessToken, refreshToken } = await generateAcessandRefreshToken(
      existingStudent?._id
    );
    if (!accessToken || !refreshToken) {
      return NextResponse.json(
        { message: 'Something went wrong generating tokens' },
        { status: 500 }
      );
    }
    // updating refresh token in db
    const updatedStudent = await studentCollection.updateOne(
      { _id: existingStudent?._id },
      { $set: { refreshToken: refreshToken } }
    );

    // checking if isVerified is true
    if (!existingStudent.isVerified) {
      return NextResponse.json(
        { message: 'You are not verified yet' },
        { status: 400 }
      );
    }
    // setting accesstoken and refreshtoken in cookies
    const cookieOptions = {
      httpOnly: true,
      secure: true,
    };
    cookies().set('accessToken', accessToken, cookieOptions);
    cookies().set('refreshToken', refreshToken, cookieOptions);
    return NextResponse.json({
      message: 'login successfull',
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || 'Something went wrong while logging in' },
      { status: 500 }
    );
  }
}
