import clientPromise from '@/lib/connectDB';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function PUT(request) {
  try {
    const { id, roomNo } = await request.json();
    // settings isVerified  = true and roomNo to given roomNo
    const client = await clientPromise;
    const db = client.db();
    const studentCollection = await db.collection('students');
    await studentCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { isVerified: true, RoomNo: roomNo } }
    );

    return NextResponse.json({
      message: 'Admitted successfully',
      success: true,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
      status: 500,
    });
  }
}
