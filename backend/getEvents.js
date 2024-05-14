const getEvnets = async () => {
  try {
    const response = await fetch('/api/getEvents', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    console.log(result);
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
    console.log(error);
    return {
      status: 400,
      message: 'Error while fetching events',
    };
  }
};

export { getEvnets };
