const logout = async () => {
  // POST request to /api/logout
  try {
    const res = await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await res.json();
    if (res.status == 200) {
      return {
        message: result.message,
        success: true,
        status: 200,
      };
    }
    return {
      message: result.message,
      success: false,
      status: 400,
    };
  } catch (error) {
    console.log(error.message);
    return {
      message: error.message,
      success: false,
      status: 400,
    };
  }
};

export default logout;
