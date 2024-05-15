const getTokens = async () => {
  // making a get request to /api/getTokens
  try {
    const response = await fetch('/api/getTokens');
    const result = await response.json();
    return result;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export default getTokens;
