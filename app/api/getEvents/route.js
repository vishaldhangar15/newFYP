import { NextResponse } from 'next/server';
import clientPromise from '@/lib/connectDB';
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const eventCollection = await db.collection('eventDetails');
    const result = await eventCollection.find({}).toArray();
    return NextResponse.json({ data: result, status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
