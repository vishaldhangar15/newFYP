import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import clientPromise from '@/lib/connectDB';
export async function POST(request) {
  try {
    const { from, to, reason } = await request.json();
    console.log(from, to, reason);
    if (!from || !to) {
      return NextResponse.json({
        message: 'Please fill in all the fields',
        success: false,
        status: 400,
      });
    }
    // getting userid from cookies
    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken');
    if (!accessToken) {
      return NextResponse.json({
        message: 'Token not found',
        success: false,
        status: 400,
      });
    }
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
    // creating leave object
    const leave = {
      from,
      to,
      reason,
    };
    const id = decodedToken?.userid;
    const client = await clientPromise;
    const db = client.db();
    const studentCollection = await db.collection('students');

    const result = await studentCollection.updateOne(
      { _id: new ObjectId(id) },
      { $push: { leaves: leave } }
    );

    // adding leave to to Lleaves database along with id
    if (!result) {
      return NextResponse.json(
        { message: 'Something went wrong', success: false },
        { status: 500 }
      );
    }
    const leaveCollection = await db.collection('leaves');
    const leaveWithId = { ...leave, studentId: id };
    await leaveCollection.insertOne(leaveWithId);

    return NextResponse.json({
      message: 'Leave added successfully',
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 500 }
    );
  }
}
