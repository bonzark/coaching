import axios from "axios";
import baseUrl from "../api/api";

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
};

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

const getCoachById = async (id) => {
  return await axios
    .get(`${baseUrl}/coaches/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const getBookedSessions = async () => {
  return await axios
    .get(`${baseUrl}/sessions/booked`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const getSessionsByCoachID = async (id) => {
  return await axios
    .get(`${baseUrl}/sessions/coach/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const getAllSessions = async () => {
  return await axios
    .get(`${baseUrl}/sessions`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export {
  getSessions,
  getCoaches,
  getSessionsByCoachId,
  getBookedSessions,
  getSessionsByCoachID,
  getAllSessions,
  getCoachById,
};
