import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
export async function GET(request) {
  try {
    const cookieStore = cookies();
    const refreshToken = cookieStore.get('refreshToken');
    if (!refreshToken) {
      return NextResponse.json({
        message: 'Token not found',
        success: false,
      });
    }

    const accessToken = cookieStore.get('accessToken');
    //  return the access token and refresh token
    return NextResponse.json({
      accessToken: accessToken?.value || null,
      refreshToken: refreshToken?.value || null,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
