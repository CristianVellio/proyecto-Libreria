const getBaseURL = () => {
  return process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
};

export default getBaseURL;
