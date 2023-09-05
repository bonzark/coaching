import baseUrl from "../api/api";

export const login = async () => {
  await axios
    .post(`${baseUrl}/auth/login`, values)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
