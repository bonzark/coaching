import axios from 'axios';
import baseUrl from '../api/api';

const getSessions = () => {
  return axios
    .get(`${baseUrl}/sessions`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export { getSessions };
