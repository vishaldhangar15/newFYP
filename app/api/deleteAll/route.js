// post method to delete all data from database collection
import clientPromise from '@/lib/connectDB';
import { NextResponse } from 'next/server';
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const studentCollection = await db.collection('students');
    const result = await studentCollection.deleteMany({});
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
