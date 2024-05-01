import clientPromise from '@/lib/connectDB';
import { NextResponse } from 'next/server';
export async function POST(request) {
  try {
    const { from, to, title, venue, others } = await request.json();
    if (!from || !to || !venue || !title) {
      return NextResponse.json({
        message: 'Please fill in all the fields',
        success: false,
        status: 400,
      });
    }
    const client = await clientPromise;
    const db = client.db();
    const eventCollection = await db.collection('eventDetails');
    // check if event exits between the dates
    const existingEvent = await eventCollection.findOne({
      $and: [{ from: { $lte: to } }, { to: { $gte: from } }],
    });
    if (existingEvent) {
      return NextResponse.json({
        message: 'Event already exists between these dates',
        success: false,
        status: 400,
      });
    }
    const result = await eventCollection.insertOne({
      from,
      to,
      title,
      venue,
      others,
    });
    return NextResponse.json({
      message: 'Event added successfully',
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
