const verifyAdmin = async (data) => {
  try {
    // post request to api/admin/signin
    const response = await fetch('/api/admin/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return {
      status: result.status,
      message: result.message,
    };
  } catch (error) {
    return {
      status: 400,
      message: error.message,
    };
  }
};

const getRegisteredStudents = async () => {
  try {
    const response = await fetch('/api/admin/registeredStudents', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    // console.log(result);
    if (result.status === 200) {
      return {
        status: 200,
        data: result.data,
      };
    }
    return {
      status: 400,
      message: result.message,
    };
  } catch (error) {
    return {
      status: 400,
      message: error.message,
    };
  }
};

const verifyStudent = async (data) => {
  try {
    const response = await fetch('/api/admin/admitStudents', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return {
      status: result.status,
      message: result.message,
    };
  } catch (error) {
    return {
      status: 400,
      message: error.message,
    };
  }
};

export { verifyAdmin, getRegisteredStudents, verifyStudent };
