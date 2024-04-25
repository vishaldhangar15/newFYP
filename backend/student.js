import { NextResponse } from 'next/server';

const registerStudent = async (data) => {
  // sending post request to /api/student/signup with data
  // console.log(data);
  try {
    const response = await fetch('/api/student/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return {
      status: 200,
      message: 'Student registered successfully',
    };
  } catch (error) {
    return {
      status: 400,
      message: 'Error while registering student',
    };
  }
};

const loginStudent = async (data) => {
  // post method to api/student/signin
  try {
    const response = await fetch('/api/student/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    if (result.status === 200) {
      return {
        status: 200,
        message: result.message,
        success: true,
      };
    }
    return {
      status: 400,
      message: result.message,
      success: false,
    };
  } catch (error) {
    console.log(error.message);
    return {
      status: 400,
      message: result.message,
      success: false,
    };
  }
};

const getStudentData = async () => {
  // post method to api/student/getdata
  try {
    const response = await fetch('/api/student/getdata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    if (result.status === 200) {
      return {
        status: 200,
        message: result.message,
        success: true,
        data: result.data,
      };
    }
    return {
      status: 400,
      message: result.message,
      success: false,
    };
  } catch (error) {
    console.log(error.message);
    return {
      status: 400,
      message: 'Something wen wrong while fetching data',
      success: false,
    };
  }
};

const verifyStudentData = (data) => {
  console.log(data);
};

export { registerStudent, verifyStudentData, loginStudent, getStudentData };
