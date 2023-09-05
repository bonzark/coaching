export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const setUserDetails = (details) => {
  localStorage.setItem('user', JSON.stringify(details));
};
