import axios from 'axios';
import baseUrl from '../api/api';

const getSessions = async () => {
  return await axios
    .get(`${baseUrl}/sessions`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const getSessionsByCoachId = async (coachId) => {
  return await axios
    .get(`${baseUrl}/sessions/coach/${coachId}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

const getCoaches = async () => {
  return await axios
    .get(`${baseUrl}/coaches/list`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};


export { getSessions, getCoaches, getSessionsByCoachId };
