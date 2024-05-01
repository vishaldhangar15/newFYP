import { NextResponse } from 'next/server';
import clientPromise from '@/lib/connectDB';
export async function GET(request) {
  //  getting the list of registered students having attribute isVerifed = false
  try {
    const client = await clientPromise;
    const db = client.db();
    const studentCollection = await db.collection('students');
    const result = await studentCollection
      .find({ isVerified: false })
      .toArray();
    return NextResponse.json({
      data: result,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
