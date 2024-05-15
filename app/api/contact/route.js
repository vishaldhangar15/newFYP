import { NextResponse } from 'next/server';
import clientPromise from '@/lib/connectDB';
export async function POST(request) {
  try {
    const body = await request.json();
    // saving body to database in contact collection
    const client = await clientPromise;
    const db = client.db();
    const contactCollection = await db.collection('contact');
    const result = await contactCollection.insertOne(body);
    return NextResponse.json({
      message: 'Message sent successfully',
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
