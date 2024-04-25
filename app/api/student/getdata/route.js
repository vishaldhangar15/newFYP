import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import clientPromise from '@/lib/connectDB';
export async function POST(request) {
  try {
    // getting user id from cookies accesstoken
    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken');
    if (!accessToken) {
      return NextResponse.json({
        message: 'Token not found',
        success: false,
        status: 400,
      });
    }
    // decoding token
    const decodedToken = jwt.verify(
      accessToken?.value,
      process.env.ACCESS_TOKEN_SECRET
    );
    if (!decodedToken) {
      return NextResponse.json({
        message: 'Token not found',
        success: false,
        status: 400,
      });
    }

    const id = decodedToken?.userid;
    // getting details from database
    const client = await clientPromise;
    const db = client.db();
    const studentCollection = await db.collection('students');
    // get student details except isVerified , password , refreshToken
    const student = await studentCollection.findOne(
      { _id: new ObjectId(id) },
      { projection: { isVerified: 0, password: 0, refreshToken: 0 } }
    );
    if (!student) {
      return NextResponse.json({
        message: 'Student not found',
        success: false,
        status: 400,
      });
    }

    return NextResponse.json({
      // return student details
      message: 'student fetched successfully',
      data: student,
      success: true,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
      status: 400,
    });
  }
}
