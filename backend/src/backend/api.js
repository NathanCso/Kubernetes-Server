const apiUrl = 'http://nodejs-backend:5000/api/data';

export const fetchData = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};
