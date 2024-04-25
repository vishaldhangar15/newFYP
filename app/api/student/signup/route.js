import clientPromise from '@/lib/connectDB';
import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

export async function POST(request) {
  try {
    let data = await request.json();
    const {
      email,
      firstName,
      lastName,
      password,
      regNo,
      transactionId,
      phoneNo,
      parentPhoneNo,
      yearOfStudy,
    } = data;
    if (
      !email ||
      !firstName ||
      !lastName ||
      !password ||
      !regNo ||
      !transactionId ||
      !phoneNo ||
      !parentPhoneNo ||
      !yearOfStudy
    ) {
      return NextResponse.json(
        { message: 'Please fill in all the fields' },
        { status: 400 }
      );
    }

    // connecting to database
    const client = await clientPromise;
    const db = client.db();
    const studentCollection = await db.collection('students');
    const existingStudent = await studentCollection.findOne({ email });
    if (existingStudent) {
      return NextResponse.json(
        { message: 'Student with this email already exists' },
        { status: 400 }
      );
    }
    // // cheking if reg no already exists
    const existingRegNo = await studentCollection.findOne({ regNo });
    if (existingRegNo) {
      return NextResponse.json(
        { message: 'Student with this reg no already exists' },
        { status: 400 }
      );
    }

    // // hashing password
    const hashedPassword = await bcryptjs.hash(password, 10);
    // // creating new student

    const newStudent = {
      email,
      firstName,
      lastName,
      yearOfStudy,
      password: hashedPassword,
      regNo,
      transactionId,
      phoneNo,
      parentPhoneNo,
      isVerified: false,
      compalints: [],
      leaves: [],
    };

    // // console.log(result);
    const result = await studentCollection.insertOne(newStudent);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
