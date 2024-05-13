const verifyMessAdmin = async (data) => {
  try {
    const response = await fetch('/api/messadmin/signin', {
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

export { verifyMessAdmin };
