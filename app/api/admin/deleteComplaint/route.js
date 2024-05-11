import clientPromise from '@/lib/connectDB';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const client = await clientPromise;
    const db = client.db();
    const complaintCollection = await db.collection('complaints');
    const result = await complaintCollection.deleteOne({
      _id: new ObjectId(id),
    });
    return NextResponse.json({
      status: 200,
      message: 'Complaint deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
}
