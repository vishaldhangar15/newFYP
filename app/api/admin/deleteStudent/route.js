import { NextResponse } from 'next/server';
import clientPromise from '@/lib/connectDB';
import { ObjectId } from 'mongodb';
export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const client = await clientPromise;
    const db = client.db();
    const studentCollection = await db.collection('students');
    const result = await studentCollection.deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({
      status: 200,
      message: 'Student deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
}
