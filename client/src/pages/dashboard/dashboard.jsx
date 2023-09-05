import React, { useEffect, useState } from 'react';
import { getSessions } from '../../services/session.service';

const Dashboard = () => {
  const [sessions, setSessions] = useState([]);
  const getSessionsList = () => {
    getSessions()
      .then((res) => {
        setSessions(res?.data?.sessions);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  useEffect(() => {
    getSessionsList();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
