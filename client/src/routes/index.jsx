import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/dashboard/dashboard';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/home/home';
import AboutSection from '../sections/AboutSection';

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path='/about' element={<AboutSection />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Router>
  );
};

export default Routers;
