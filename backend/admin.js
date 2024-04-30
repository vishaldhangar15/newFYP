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

export { verifyAdmin };
