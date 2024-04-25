import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const generateAccessAndRefreshToken = async (userid) => {
  try {
    // Generate access token
    const accessToken = jwt.sign({ userid }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY, // Assuming ACCESS_TOKEN_EXPIRY is defined elsewhere
    });

    // Generate refresh token
    const refreshToken = jwt.sign(
      { userid },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY, // Assuming REFRESH_TOKEN_EXPIRY is defined elsewhere
      }
    );

    return { accessToken, refreshToken };
  } catch (error) {
    // Throw the error to be handled by the calling function
    throw new Error('Failed to generate tokens');
  }
};

export default generateAccessAndRefreshToken;
