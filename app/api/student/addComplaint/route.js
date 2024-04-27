// post function to add complaint
import clientPromise from '@/lib/connectDB';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { ObjectId } from 'mongodb';

export async function POST(request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('accessToken');
    if (!token) {
      return NextResponse.json({
        message: 'Token not found',
        success: false,
        status: 400,
      });
    }
    const decodedToken = jwt.verify(
      token.value,
      process.env.ACCESS_TOKEN_SECRET
    );
    if (!decodedToken) {
      return NextResponse.json({
        message: 'Token not found',
        success: false,
        status: 400,
      });
    }
    const id = decodedToken?.userid;
    const { title, description } = await request.json();

    if (!title || !description) {
      return NextResponse.json({
        message: 'Please fill in all the fields',
        success: false,
        status: 400,
      });
    }

    // create a complaint object having values of title and description and status as pending
    const complaint = {
      title,
      description,
      status: 'pending',
    };

    const client = await clientPromise;
    const db = client.db();
    const studentCollection = await db.collection('students');
    // updating the complaints array in the database
    // finding the user by id
    const existingStudent = await studentCollection.findOne({
      _id: new ObjectId(id),
    });
    if (!existingStudent) {
      return NextResponse.json({
        message: 'User not found',
        success: false,
        id: id,
        status: 400,
      });
    }
    const result = await studentCollection.updateOne(
      { _id: new ObjectId(id) },
      { $push: { complaints: complaint } }
    );
    // also add it in complaints collection too and the student id as well
    const complaintsCollection = await db.collection('complaints');
    const complaintWithStudentId = { ...complaint, studentId: id };
    await complaintsCollection.insertOne(complaintWithStudentId);

    // return success response

    return NextResponse.json({
      message: 'Complaint added successfully',
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
      message: 'Something went wrong while adding complaint',
    });
  }
}
