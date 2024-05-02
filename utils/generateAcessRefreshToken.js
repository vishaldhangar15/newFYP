import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const generateAccessAndRefreshToken = async (userid) => {
  try {
    // Generate access token
    const accessToken = await jwt.sign(
      { userid },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY, // Assuming ACCESS_TOKEN_EXPIRY is defined elsewhere
      }
    );

    // Generate refresh token
    const refreshToken = await jwt.sign(
      { userid },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY, // Assuming REFRESH_TOKEN_EXPIRY is defined elsewhere
      }
    );
    // console.log('accessToken: ', accessToken, ' refreshToken: ', refreshToken);

    return { accessToken, refreshToken };
  } catch (error) {
    // Throw the error to be handled by the calling function
    throw new Error('Failed to generate tokens');
  }
};

export default generateAccessAndRefreshToken;
