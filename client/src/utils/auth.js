export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const setUserDetails = (details) => {
  localStorage.setItem('user', JSON.stringify(details));
};

export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  return !!getAuthToken();
};