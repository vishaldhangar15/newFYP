import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt, { decode } from 'jsonwebtoken';
import clientPromise from '@/lib/connectDB';
import { ObjectId } from 'mongodb';
export async function POST(request) {
  try {
    // geeting userid from coockies refreshtoken
    const cookieStore = cookies();
    const token = cookieStore.get('refreshToken');
    if (!token) {
      return NextResponse.json({
        message: 'Token not found',
        success: false,
        status: 400,
      });
    }
    // decoding token
    const decodedToken = jwt.verify(
      token.value,
      process.env.REFRESH_TOKEN_SECRET
    );
    if (!decodedToken) {
      return NextResponse.json({
        message: 'Token not found',
        success: false,
        status: 400,
      });
    }
    const userID = decodedToken?.userid;
    console.log(userID);
    // finding the user in database and setting the refresh token to null
    const client = await clientPromise;
    const db = client.db();
    const studentCollection = db.collection('adminDetails');
    const updatedUser = await studentCollection.findOneAndUpdate(
      { _id: new ObjectId(userID) },
      { $set: { refreshToken: null } }
    );
    if (!updatedUser) {
      return NextResponse.json({
        message: 'User not found',
        status: 400,
        success: false,
      });
    }
    const cookieoptions = {
      httpOnly: true,
      secure: true,
    };
    // deletig the coockies accessToken and refreshToken
    cookieStore.delete('accessToken', cookieoptions);
    cookieStore.delete('refreshToken', cookieoptions);
    cookieStore.delete('role', cookieoptions);

    return NextResponse.json({
      message: 'Logged out successfully',
      success: true,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Error logging out',
      error: error.message,
      success: false,
      status: 400,
    });
  }
}
