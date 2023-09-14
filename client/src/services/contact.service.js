import axios from "axios";
import baseUrl from "../api/api";

const contact = (values) => {
  return axios
    .post(`${baseUrl}/contact-us`, values)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export { contact };
