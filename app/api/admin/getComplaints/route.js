import clientPromise from '@/lib/connectDB';
import { NextResponse } from 'next/server';
export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const complaintCollection = await db.collection('complaints');
    const result = await complaintCollection.find({}).toArray();

    return NextResponse.json({ data: result, status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
